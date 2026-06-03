import Footer from "@/components/sections/Footer";

export const metadata = {
  title: "Privacy Policy — BrandThink",
  description: "How BrandThink collects, uses, and protects your personal data.",
};

const sections = [
  {
    id: "data-collection",
    title: "Data Collection",
    content: [
      "We collect information you voluntarily provide when you contact us, submit a project inquiry, or subscribe to our newsletter. This may include your name, email address, phone number, company name, and project details.",
      "We also automatically collect certain technical information when you visit our website, including your IP address, browser type and version, pages visited, time spent on pages, referring URLs, and device information. This data is collected through standard server logs and analytics tools.",
      "We do not collect sensitive personal data such as financial account details, government identification numbers, or health information unless explicitly required for a specific service and with your clear consent.",
    ],
  },
  {
    id: "how-we-use",
    title: "How We Use Your Data",
    content: [
      "Information you provide is used to respond to your inquiries, deliver the services you have engaged us for, send relevant project updates, and improve our understanding of your business needs.",
      "Technical data collected automatically is used to analyse website performance, understand visitor behaviour in aggregate, diagnose technical issues, and improve the user experience on our platform.",
      "We may use your contact details to send you marketing communications about our services, industry insights, or case studies where you have opted in to receive such communications. You may withdraw this consent at any time by contacting us or using the unsubscribe link in any email.",
      "We will never sell, rent, or trade your personal information to third parties for their own marketing purposes.",
    ],
  },
  {
    id: "cookies",
    title: "Cookies",
    content: [
      "Our website uses cookies — small text files stored on your device — to enhance your browsing experience, remember your preferences, and gather analytics data.",
      "Essential cookies are required for the website to function correctly and cannot be disabled. Analytics cookies (such as those from Google Analytics) help us understand how visitors interact with our site; these are only set with your consent.",
      "You can control or delete cookies through your browser settings at any time. Disabling certain cookies may affect website functionality. Most browsers allow you to refuse new cookies, delete existing ones, or be notified when a new cookie is set.",
    ],
  },
  {
    id: "third-party",
    title: "Third-Party Services",
    content: [
      "We use a limited set of trusted third-party services to operate our business and website. These include analytics providers (Google Analytics), email delivery services, and project management tools. Each provider is bound by their own privacy policy and applicable data protection regulations.",
      "Our website may contain links to external sites. We are not responsible for the privacy practices or content of those sites and encourage you to review their privacy policies independently.",
      "Where we share data with third-party service providers, we do so only to the extent necessary to deliver the relevant service and require those providers to keep your information confidential and secure.",
    ],
  },
  {
    id: "data-security",
    title: "Data Security",
    content: [
      "We implement industry-standard technical and organisational measures to protect your personal data against unauthorised access, accidental loss, alteration, or disclosure. These measures include encrypted data transmission (HTTPS/TLS), access controls, and regular security reviews.",
      "While we take every reasonable precaution, no method of transmission over the internet or electronic storage is completely secure. We cannot guarantee absolute security, but we will notify you promptly in the unlikely event of a data breach that affects your personal information.",
      "We retain your personal data only for as long as necessary to fulfil the purposes described in this policy, to comply with legal obligations, resolve disputes, and enforce our agreements. When data is no longer required, it is securely deleted or anonymised.",
    ],
  },
  {
    id: "contact",
    title: "Contact",
    content: [
      "If you have any questions about this Privacy Policy, wish to exercise your data rights (access, correction, deletion, or portability), or want to raise a concern about how we handle your information, please contact us directly.",
    ],
    contactBlock: true,
  },
];

export default function PrivacyPage() {
  return (
    <>
      {/* Hero */}
      <section
        style={{
          paddingTop: "calc(var(--nav-h) + 80px)",
          paddingBottom: 80,
          paddingLeft: 40,
          paddingRight: 40,
          background: "var(--bt-black)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Subtle background grid */}
        <div
          className="bg-grid"
          style={{
            position: "absolute",
            inset: 0,
            opacity: 0.25,
            maskImage:
              "radial-gradient(ellipse 70% 80% at 50% 0%, black, transparent 90%)",
          }}
        />

        {/* Red glow accent */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: "50%",
            transform: "translateX(-50%)",
            width: 600,
            height: 300,
            background:
              "radial-gradient(ellipse, rgba(232,49,42,0.12) 0%, transparent 70%)",
            pointerEvents: "none",
          }}
        />

        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          <div style={{ marginBottom: 24 }}>
            <span className="chip">Legal</span>
          </div>
          <h1
            style={{
              fontSize: "clamp(2.5rem, 6vw, 5.5rem)",
              fontWeight: 900,
              letterSpacing: "-0.04em",
              lineHeight: 1.0,
              color: "var(--bt-white)",
              marginBottom: 24,
            }}
          >
            Privacy{" "}
            <span style={{ color: "var(--bt-red)" }}>Policy</span>
          </h1>
          <p
            style={{
              fontSize: "1rem",
              color: "var(--bt-muted)",
              maxWidth: 560,
              lineHeight: 1.7,
            }}
          >
            Last updated: June 2025. BrandThink is committed to handling your
            personal data with transparency, care, and respect.
          </p>
        </div>
      </section>

      {/* Table of Contents + Body */}
      <section
        className="section"
        style={{ background: "var(--bt-black)", paddingTop: 0 }}
      >
        <div
          className="container"
          style={{
            display: "grid",
            gridTemplateColumns: "240px 1fr",
            gap: 64,
            alignItems: "start",
          }}
        >
          {/* Sticky TOC */}
          <aside
            style={{
              position: "sticky",
              top: "calc(var(--nav-h) + 32px)",
              padding: "24px",
              borderRadius: 16,
              background: "var(--bt-card)",
              border: "1px solid var(--bt-border)",
            }}
          >
            <p
              style={{
                fontSize: "0.6875rem",
                fontWeight: 700,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "var(--bt-muted)",
                marginBottom: 16,
              }}
            >
              Contents
            </p>
            <nav style={{ display: "flex", flexDirection: "column", gap: 4 }}>
              {sections.map((s) => (
                <a
                  key={s.id}
                  href={`#${s.id}`}
                  style={{
                    fontSize: "0.875rem",
                    fontWeight: 500,
                    color: "var(--bt-muted)",
                    textDecoration: "none",
                    padding: "6px 10px",
                    borderRadius: 8,
                    transition: "color 0.2s, background 0.2s",
                    display: "block",
                  }}
                  onMouseOver={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.color =
                      "var(--bt-white)";
                    (e.currentTarget as HTMLAnchorElement).style.background =
                      "rgba(255,255,255,0.05)";
                  }}
                  onMouseOut={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.color =
                      "var(--bt-muted)";
                    (e.currentTarget as HTMLAnchorElement).style.background =
                      "transparent";
                  }}
                >
                  {s.title}
                </a>
              ))}
            </nav>
          </aside>

          {/* Main content */}
          <article style={{ minWidth: 0 }}>
            {sections.map((s, idx) => (
              <div
                key={s.id}
                id={s.id}
                style={{
                  paddingBottom: 56,
                  marginBottom: 56,
                  borderBottom:
                    idx < sections.length - 1
                      ? "1px solid var(--bt-border)"
                      : "none",
                  scrollMarginTop: "calc(var(--nav-h) + 32px)",
                }}
              >
                {/* Section number + title */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 16,
                    marginBottom: 28,
                  }}
                >
                  <span
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                      width: 36,
                      height: 36,
                      borderRadius: 10,
                      background: "rgba(232,49,42,0.10)",
                      border: "1px solid rgba(232,49,42,0.22)",
                      color: "var(--bt-red)",
                      fontSize: "0.75rem",
                      fontWeight: 700,
                      flexShrink: 0,
                    }}
                  >
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                  <h2
                    style={{
                      fontSize: "clamp(1.25rem, 2.5vw, 1.75rem)",
                      fontWeight: 800,
                      letterSpacing: "-0.025em",
                      color: "var(--bt-white)",
                    }}
                  >
                    {s.title}
                  </h2>
                </div>

                {/* Paragraphs */}
                <div
                  style={{ display: "flex", flexDirection: "column", gap: 16 }}
                >
                  {s.content.map((para, pIdx) => (
                    <p
                      key={pIdx}
                      style={{
                        fontSize: "0.9375rem",
                        color: "var(--bt-muted)",
                        lineHeight: 1.8,
                      }}
                    >
                      {para}
                    </p>
                  ))}
                </div>

                {/* Contact block */}
                {s.contactBlock && (
                  <div
                    style={{
                      marginTop: 32,
                      padding: 28,
                      borderRadius: 16,
                      background: "var(--bt-card)",
                      border: "1px solid var(--bt-border)",
                      display: "flex",
                      flexDirection: "column",
                      gap: 12,
                    }}
                  >
                    <p
                      style={{
                        fontSize: "0.75rem",
                        fontWeight: 700,
                        letterSpacing: "0.08em",
                        textTransform: "uppercase",
                        color: "var(--bt-muted)",
                      }}
                    >
                      Privacy enquiries
                    </p>
                    <p
                      style={{
                        fontSize: "0.9375rem",
                        fontWeight: 600,
                        color: "var(--bt-white)",
                      }}
                    >
                      BrandThink — 360° Marketing &amp; Advertising Agency
                    </p>
                    <a
                      href="mailto:adityaraj@thebrandthink.com"
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: 10,
                        fontSize: "0.9375rem",
                        fontWeight: 600,
                        color: "var(--bt-red)",
                        textDecoration: "none",
                        width: "fit-content",
                      }}
                    >
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <rect x="2" y="4" width="20" height="16" rx="2" />
                        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                      </svg>
                      adityaraj@thebrandthink.com
                    </a>
                    <p
                      style={{
                        fontSize: "0.875rem",
                        color: "var(--bt-muted)",
                        lineHeight: 1.65,
                      }}
                    >
                      We aim to respond to all privacy-related requests within
                      five business days.
                    </p>
                  </div>
                )}
              </div>
            ))}
          </article>
        </div>
      </section>

      {/* Bottom CTA strip */}
      <section
        style={{
          padding: "60px 40px",
          background: "var(--bt-surface)",
          borderTop: "1px solid var(--bt-border)",
        }}
      >
        <div
          className="container"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 32,
            flexWrap: "wrap",
          }}
        >
          <div>
            <p
              style={{
                fontSize: "1.125rem",
                fontWeight: 700,
                color: "var(--bt-white)",
                marginBottom: 6,
              }}
            >
              Questions about your data?
            </p>
            <p style={{ fontSize: "0.9375rem", color: "var(--bt-muted)" }}>
              Our team is happy to help clarify anything in this policy.
            </p>
          </div>
          <a
            href="mailto:adityaraj@thebrandthink.com"
            className="btn btn-primary"
          >
            Get in touch
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </section>

      <Footer />
    </>
  );
}
