import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/legal/terms")({
  head: () => ({
    meta: [
      { title: "Terms of Service — GoLocal" },
      { name: "description", content: "Terms governing your use of GoLocal." },
    ],
  }),
  component: () => (
    <article className="max-w-3xl mx-auto px-4 py-20 prose prose-lg">
      <h1 className="font-display text-4xl">Terms of Service</h1>
      <p className="text-muted-foreground italic">Placeholder document — replace with your finalized terms before launch.</p>
      <p className="mt-6">By using GoLocal you agree to use the service for lawful travel-related purposes. GoLocal verifies businesses to the best of our ability but cannot guarantee perfect accuracy.</p>
      <h2 className="font-display text-2xl mt-8">User accounts</h2>
      <p>You're responsible for keeping your credentials secure. We may suspend accounts that abuse the platform.</p>
      <h2 className="font-display text-2xl mt-8">Liability</h2>
      <p>GoLocal is provided "as is". We are not liable for the actions of third-party businesses listed on our platform.</p>
    </article>
  ),
});
