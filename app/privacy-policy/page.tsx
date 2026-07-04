// app/privacy-policy/page.tsx
export const metadata = { title: "Privacy Policy — Msule" };

export default function PrivacyPolicyPage() {
  return (
    <main className="bg-bg">
      <section className="mx-auto max-w-[800px] px-6 py-20 md:py-28">
        <p className="font-mono text-xs uppercase tracking-widest text-accent">
          Legal
        </p>
        <h1 className="mt-3 font-display text-4xl font-bold tracking-tight text-ink md:text-5xl">
          Privacy Policy
        </h1>
        <p className="mt-4 text-sm text-muted">
          Last updated: [Month Day, Year]
        </p>

        <div className="mt-10 space-y-8">
          <div>
            <h2 className="font-display text-xl font-semibold text-ink">
              1. Introduction
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              Msule ("we," "our," or "us") respects your privacy and is
              committed to protecting the personal information you share with
              us. This Privacy Policy explains how we collect, use, and
              safeguard information when you visit our website or engage our
              services.
            </p>
          </div>

          <div>
            <h2 className="font-display text-xl font-semibold text-ink">
              2. Information We Collect
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              We may collect information you provide directly, such as your
              name, email address, company name, and project details when you
              submit a contact form or inquiry. We may also collect usage data
              automatically through analytics tools, including IP address,
              browser type, and pages visited.
            </p>
          </div>

          <div>
            <h2 className="font-display text-xl font-semibold text-ink">
              3. How We Use Your Information
            </h2>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-relaxed text-muted">
              <li>To respond to inquiries and provide requested services</li>
              <li>To improve our website and user experience</li>
              <li>
                To send relevant updates, with your consent where required
              </li>
              <li>To comply with legal obligations</li>
            </ul>
          </div>

          <div>
            <h2 className="font-display text-xl font-semibold text-ink">
              4. Cookies & Analytics
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              Our website uses cookies and similar technologies, including
              Google Analytics and Microsoft Clarity, to understand how visitors
              use our site. You can control cookie preferences through your
              browser settings.
            </p>
          </div>

          <div>
            <h2 className="font-display text-xl font-semibold text-ink">
              5. Data Sharing
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              We do not sell your personal information. We may share data with
              trusted third-party service providers who assist in operating our
              website and business, under confidentiality obligations.
            </p>
          </div>

          <div>
            <h2 className="font-display text-xl font-semibold text-ink">
              6. Data Security
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              We implement reasonable technical and organizational measures to
              protect your information. However, no method of transmission over
              the internet is completely secure.
            </p>
          </div>

          <div>
            <h2 className="font-display text-xl font-semibold text-ink">
              7. Your Rights
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              Depending on your location, you may have the right to access,
              correct, or delete your personal information. To exercise these
              rights, contact us at{" "}
              <a
                href="mailto:hello@msule.com"
                className="text-accent hover:underline"
              >
                hello@msule.com
              </a>
              .
            </p>
          </div>

          <div>
            <h2 className="font-display text-xl font-semibold text-ink">
              8. Changes to This Policy
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              We may update this Privacy Policy from time to time. Changes will
              be posted on this page with an updated revision date.
            </p>
          </div>

          <div>
            <h2 className="font-display text-xl font-semibold text-ink">
              9. Contact Us
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              If you have questions about this Privacy Policy, contact us at{" "}
              <a
                href="mailto:hello@msule.com"
                className="text-accent hover:underline"
              >
                hello@msule.com
              </a>
              .
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
