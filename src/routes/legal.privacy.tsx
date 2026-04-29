import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/legal/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — GoLocal" },
      { name: "description", content: "How GoLocal collects, uses and protects your personal data." },
    ],
  }),
  component: () => (
    <article className="max-w-3xl mx-auto px-4 py-20 prose prose-lg">
      <h1 className="font-display text-4xl">Privacy Policy</h1>
      <p className="text-muted-foreground italic">Placeholder document — replace with your finalized policy before launch.</p>
      <p className="mt-6">GoLocal collects only the minimum data required to provide the service: account email, language preference, and submitted form content. We never sell your data and we encrypt all sensitive fields at rest and in transit.</p>
      <h2 className="font-display text-2xl mt-8">What we collect</h2>
      <ul className="list-disc pl-6 space-y-1 text-foreground/80">
        <li>Email address (for waitlist, partner inquiries, contact form)</li>
        <li>Language preference (to localize content)</li>
        <li>Submitted form content (only as long as needed to respond)</li>
      </ul>
      <h2 className="font-display text-2xl mt-8">Your rights</h2>
      <p>You can request deletion of any data we hold about you at any time by emailing <strong>privacy@golocal.app</strong>.</p>
    </article>
  ),
});
