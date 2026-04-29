import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import { supabaseAdmin } from "@/integrations/supabase/client.server";

const PartnerSchema = z.object({
  business_name: z.string().trim().min(1).max(120),
  business_type: z.string().trim().min(1).max(60),
  contact_name: z.string().trim().min(1).max(120),
  email: z.string().trim().email().max(255),
  phone: z.string().trim().max(40).optional().or(z.literal("")),
  city: z.string().trim().max(80).optional().or(z.literal("")),
  message: z.string().trim().max(2000).optional().or(z.literal("")),
});

const ContactSchema = z.object({
  name: z.string().trim().min(1).max(120),
  email: z.string().trim().email().max(255),
  subject: z.string().trim().max(160).optional().or(z.literal("")),
  message: z.string().trim().min(1).max(2000),
});

const WaitlistSchema = z.object({
  email: z.string().trim().email().max(255),
  language: z.string().trim().max(8).optional().or(z.literal("")),
  source: z.string().trim().max(60).optional().or(z.literal("")),
});

export const submitPartnerInquiry = createServerFn({ method: "POST" })
  .inputValidator((input: unknown) => PartnerSchema.parse(input))
  .handler(async ({ data }) => {
    const { error } = await supabaseAdmin.from("partner_inquiries").insert({
      business_name: data.business_name,
      business_type: data.business_type,
      contact_name: data.contact_name,
      email: data.email,
      phone: data.phone || null,
      city: data.city || null,
      message: data.message || null,
    });
    if (error) {
      console.error("partner_inquiries insert failed:", error);
      return { ok: false as const, error: "Could not submit. Please try again." };
    }
    return { ok: true as const };
  });

export const submitContactMessage = createServerFn({ method: "POST" })
  .inputValidator((input: unknown) => ContactSchema.parse(input))
  .handler(async ({ data }) => {
    const { error } = await supabaseAdmin.from("contact_messages").insert({
      name: data.name,
      email: data.email,
      subject: data.subject || null,
      message: data.message,
    });
    if (error) {
      console.error("contact_messages insert failed:", error);
      return { ok: false as const, error: "Could not send. Please try again." };
    }
    return { ok: true as const };
  });

export const submitWaitlist = createServerFn({ method: "POST" })
  .inputValidator((input: unknown) => WaitlistSchema.parse(input))
  .handler(async ({ data }) => {
    const { error } = await supabaseAdmin.from("waitlist_emails").insert({
      email: data.email.toLowerCase(),
      language: data.language || null,
      source: data.source || null,
    });
    if (error) {
      // Unique violation = already on the list — still success-ish
      if (error.code === "23505") return { ok: true as const, already: true };
      console.error("waitlist_emails insert failed:", error);
      return { ok: false as const, error: "Could not join. Please try again." };
    }
    return { ok: true as const, already: false };
  });
