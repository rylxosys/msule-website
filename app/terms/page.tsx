// app/terms/page.tsx
export const metadata = { title: "Terms & Conditions — Msule" };

export default function TermsPage() {
  return (
    <main className="bg-bg">
      <section className="mx-auto max-w-[800px] px-6 py-20 md:py-28">
        <p className="font-mono text-xs uppercase tracking-widest text-accent">
          Legal
        </p>
        <h1 className="mt-3 font-display text-4xl font-bold tracking-tight text-ink md:text-5xl">
          Terms & Conditions
        </h1>
        <p className="mt-4 text-sm text-muted">
          Last updated: [Month Day, Year]
        </p>

        <div className="mt-10 space-y-8">
          <div>
            <h2 className="font-display text-xl font-semibold text-ink">
              1. Acceptance of Terms
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              By accessing or using the Msule website, you agree to be bound by
              these Terms & Conditions. If you do not agree, please do not use
              our website.
            </p>
          </div>

          <div>
            <h2 className="font-display text-xl font-semibold text-ink">
              2. Services
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              Information on this website is provided for general purposes only.
              Any engagement for services will be governed by a separate signed
              agreement between Msule and the client, which will take precedence
              over these Terms for that engagement.
            </p>
          </div>

          <div>
            <h2 className="font-display text-xl font-semibold text-ink">
              3. Intellectual Property
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              All content on this website, including text, graphics, logos, and
              design, is the property of Msule unless otherwise stated, and may
              not be reproduced without written permission.
            </p>
          </div>

          <div>
            <h2 className="font-display text-xl font-semibold text-ink">
              4. User Conduct
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              You agree not to misuse this website, including attempting to gain
              unauthorized access to our systems, interfering with site
              functionality, or submitting false information through our forms.
            </p>
          </div>

          <div>
            <h2 className="font-display text-xl font-semibold text-ink">
              5. Limitation of Liability
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              Msule is not liable for any indirect, incidental, or consequential
              damages arising from your use of this website, to the fullest
              extent permitted by law.
            </p>
          </div>

          <div>
            <h2 className="font-display text-xl font-semibold text-ink">
              6. Third-Party Links
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              Our website may contain links to third-party sites. We are not
              responsible for the content or practices of these external sites.
            </p>
          </div>

          <div>
            <h2 className="font-display text-xl font-semibold text-ink">
              7. Governing Law
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              These Terms are governed by the laws of [Jurisdiction], without
              regard to its conflict of law provisions.
            </p>
          </div>

          <div>
            <h2 className="font-display text-xl font-semibold text-ink">
              8. Changes to These Terms
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              We may revise these Terms at any time. Continued use of the
              website after changes constitutes acceptance of the revised Terms.
            </p>
          </div>

          <div>
            <h2 className="font-display text-xl font-semibold text-ink">
              9. Contact Us
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              Questions about these Terms can be sent to{" "}
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
