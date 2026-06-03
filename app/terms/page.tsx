"use client";
import Footer from "@/components/sections/Footer";


/* ─── Static content ──────────────────────────────────────────────────── */
const SECTIONS = [
  {
    id: "acceptance",
    title: "1. Acceptance of Terms",
    body: [
      "By engaging BrandThink (hereinafter 'the Company', 'we', 'us', or 'our') for any marketing, advertising, creative, or consulting services — whether through a signed proposal, statement of work, purchase order, verbal agreement, or by making any payment — you ('Client', 'you', or 'your') agree to be fully bound by these Terms of Service.",
      "If you are accepting these terms on behalf of a company or other legal entity, you represent and warrant that you have the authority to bind that entity to these terms. If you do not have such authority, or do not agree with any part of these terms, you must not engage our services.",
      "BrandThink reserves the right to update or modify these Terms of Service at any time without prior notice. The most current version will always be available at thebrandthink.com/terms. Continued use of our services after any modification constitutes acceptance of the revised terms.",
    ],
  },
  {
    id: "services",
    title: "2. Services Description",
    body: [
      "BrandThink is a full-service 360° marketing and advertising agency. Our services include, but are not limited to: brand strategy and identity development, digital marketing (SEO, SEM, paid social, programmatic advertising), content creation and production, social media management, performance marketing and growth consulting, website design and development, marketing technology (MarTech) integration, and public relations.",
      "All services are provided as described in the specific proposal, statement of work, or agreement executed between the parties. Scope changes, additional deliverables, or requests outside the agreed statement of work will be subject to a separate change order and additional fees.",
      "BrandThink does not guarantee specific outcomes such as revenue targets, ranking positions, follower counts, or conversion rates unless explicitly stated in writing within a signed performance agreement. Marketing outcomes are inherently subject to market conditions, platform algorithm changes, and client-side factors beyond our control.",
      "We reserve the right to refuse, modify, or discontinue any service offering at our discretion. Clients will be notified of any material changes to ongoing service engagements with reasonable notice.",
    ],
  },
  {
    id: "ip",
    title: "3. Intellectual Property",
    body: [
      "Upon receipt of full payment for a completed deliverable, BrandThink assigns to the Client all rights, title, and interest in the final deliverable — including any original creative work, copy, design assets, and code — unless otherwise specified in the governing statement of work.",
      "BrandThink retains ownership of all preliminary concepts, drafts, working files, proprietary frameworks, internal tools, processes, methodologies, and any pre-existing intellectual property that was not created exclusively for the Client. These are not transferred as part of any engagement.",
      "BrandThink reserves the right to display and reference work produced for Clients in its portfolio, case studies, awards submissions, and marketing materials, unless the Client requests confidentiality in writing prior to project commencement.",
      "The Client warrants that any content, assets, trademarks, or materials provided to BrandThink for use in campaigns or deliverables do not infringe upon the intellectual property rights of any third party. The Client shall indemnify and hold harmless BrandThink against any claims arising from such infringement.",
      "Third-party assets — including licensed stock photography, fonts, music, software, and platform APIs — are subject to their respective license terms and are not transferred to the Client beyond the scope of those licenses.",
    ],
  },
  {
    id: "payment",
    title: "4. Payment Terms",
    body: [
      "Retainer engagements are billed monthly in advance. Project-based engagements are typically structured with a 50% advance upon signing and the remaining 50% upon delivery, unless otherwise agreed in writing.",
      "Invoices are due within 15 days of the invoice date unless otherwise specified. Overdue invoices will accrue interest at 1.5% per month (18% per annum) on the outstanding balance.",
      "BrandThink reserves the right to pause or suspend all active work if payment is overdue by more than 10 business days. Work will resume within 48 hours of full payment being received.",
      "All fees quoted are exclusive of applicable taxes. Clients are responsible for any Goods and Services Tax (GST), withholding tax, or other statutory levies as applicable under Indian law or the laws of the Client's jurisdiction.",
      "Retainer fees are non-refundable once a billing period has commenced and work has begun. For project-based work, the advance is non-refundable if the Client cancels after work has commenced. Refund requests for unused advance amounts in projects that have not commenced will be evaluated on a case-by-case basis.",
    ],
  },
  {
    id: "liability",
    title: "5. Limitation of Liability",
    body: [
      "To the maximum extent permitted by applicable law, BrandThink's total cumulative liability to the Client for any claim arising out of or related to these terms or any services rendered — whether in contract, tort (including negligence), or otherwise — shall not exceed the total fees paid by the Client to BrandThink in the three (3) months immediately preceding the event giving rise to the claim.",
      "In no event shall BrandThink be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to: loss of profits, loss of revenue, loss of data, loss of business opportunity, damage to brand reputation, or cost of substitute services — even if BrandThink has been advised of the possibility of such damages.",
      "BrandThink does not warrant that its services will be uninterrupted, error-free, or that advertising campaigns will achieve any specific results. Digital platforms, algorithms, and market conditions are outside our control and can materially affect campaign performance.",
      "BrandThink shall not be liable for any failure or delay in performance resulting from circumstances beyond our reasonable control, including but not limited to: acts of God, natural disasters, government actions, platform outages, internet disruptions, pandemics, or any other force majeure event.",
      "The Client assumes full responsibility for all decisions made on the basis of BrandThink's strategy recommendations, reports, or analysis. Our recommendations are advisory in nature and do not constitute financial, legal, or regulatory advice.",
    ],
  },
  {
    id: "governing",
    title: "6. Governing Law",
    body: [
      "These Terms of Service and any disputes arising from or related to services provided by BrandThink shall be governed by and construed in accordance with the laws of India, without regard to its conflict of law principles.",
      "Any dispute, controversy, or claim arising out of or relating to these terms, or the breach, termination, or invalidity thereof, shall first be subject to good-faith negotiation between the parties for a period of 30 days from the date either party notifies the other of the dispute.",
      "If the dispute is not resolved through negotiation within 30 days, it shall be submitted to binding arbitration in accordance with the Arbitration and Conciliation Act, 1996 (India), as amended. The seat and venue of arbitration shall be Bangalore, Karnataka, India. Arbitration proceedings shall be conducted in English.",
      "Subject to the arbitration clause above, the courts of competent jurisdiction in Bangalore, Karnataka, India shall have exclusive jurisdiction over any matter not subject to arbitration.",
    ],
  },
  {
    id: "contact",
    title: "7. Contact Information",
    body: [
      "If you have any questions, concerns, or requests regarding these Terms of Service — including questions about a specific engagement, invoice dispute, or intellectual property matter — please reach out to us directly.",
    ],
    contact: true,
  },
];

/* ─── Page component (Server Component) ──────────────────────────────── */
export default function TermsPage() {
  const lastUpdated = "June 2025";

  return (
    <>
      {/* ── Hero ──────────────────────────────────────────────────────────── */}
      <section
        style={{
          paddingTop: "calc(var(--nav-h) + 80px)",
          paddingBottom: 80,
          background: "var(--bt-black)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Subtle grid background */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
            maskImage:
              "radial-gradient(ellipse 70% 70% at 50% 50%, black, transparent 90%)",
          }}
        />

        <div
          className="container"
          style={{ position: "relative", zIndex: 1, maxWidth: 900 }}
        >
          <div style={{ marginBottom: 20 }}>
            <span className="chip">Legal</span>
          </div>
          <h1
            style={{
              fontSize: "clamp(2.25rem, 6vw, 4.5rem)",
              fontWeight: 900,
              letterSpacing: "-0.04em",
              lineHeight: 1.05,
              color: "var(--bt-white)",
              marginBottom: 24,
            }}
          >
            Terms of{" "}
            <span style={{ color: "var(--bt-red)" }}>Service</span>
          </h1>
          <p
            style={{
              fontSize: "1.0625rem",
              color: "var(--bt-muted)",
              lineHeight: 1.7,
              maxWidth: 560,
              marginBottom: 0,
            }}
          >
            These terms govern your use of BrandThink's marketing and
            advertising services. Please read them carefully before engaging us.
          </p>
          <div
            style={{
              marginTop: 32,
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              padding: "8px 16px",
              borderRadius: 8,
              background: "var(--bt-card)",
              border: "1px solid var(--bt-border)",
              fontSize: "0.8125rem",
              color: "var(--bt-muted)",
            }}
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              style={{ flexShrink: 0 }}
            >
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
              <line x1="16" y1="2" x2="16" y2="6" />
              <line x1="8" y1="2" x2="8" y2="6" />
              <line x1="3" y1="10" x2="21" y2="10" />
            </svg>
            Last updated: {lastUpdated}
          </div>
        </div>
      </section>

      {/* ── Table of Contents ─────────────────────────────────────────────── */}
      <section
        style={{
          background: "var(--bt-surface)",
          borderTop: "1px solid var(--bt-border)",
          borderBottom: "1px solid var(--bt-border)",
          padding: "32px 0",
        }}
      >
        <div className="container" style={{ maxWidth: 900 }}>
          <p
            style={{
              fontSize: "0.75rem",
              fontWeight: 700,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: "var(--bt-muted)",
              marginBottom: 16,
            }}
          >
            Contents
          </p>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "8px 24px",
            }}
          >
            {SECTIONS.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                style={{
                  fontSize: "0.875rem",
                  color: "var(--bt-muted)",
                  textDecoration: "none",
                  transition: "color 0.2s",
                  whiteSpace: "nowrap",
                }}
                onMouseOver={undefined}
              >
                {s.title}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── Body ──────────────────────────────────────────────────────────── */}
      <section
        style={{
          background: "var(--bt-black)",
          padding: "80px 0 120px",
        }}
      >
        <div
          className="container"
          style={{ maxWidth: 900 }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr",
              gap: 0,
            }}
          >
            {SECTIONS.map((section, idx) => (
              <div
                key={section.id}
                id={section.id}
                style={{
                  padding: "48px 0",
                  borderBottom:
                    idx < SECTIONS.length - 1
                      ? "1px solid var(--bt-border)"
                      : "none",
                  scrollMarginTop: "calc(var(--nav-h) + 24px)",
                }}
              >
                {/* Section header */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: 20,
                    marginBottom: 28,
                  }}
                >
                  <div
                    style={{
                      width: 4,
                      height: 28,
                      borderRadius: 2,
                      background: "var(--bt-red)",
                      flexShrink: 0,
                      marginTop: 4,
                    }}
                  />
                  <h2
                    style={{
                      fontSize: "clamp(1.25rem, 2.5vw, 1.625rem)",
                      fontWeight: 800,
                      letterSpacing: "-0.025em",
                      color: "var(--bt-white)",
                      lineHeight: 1.2,
                      margin: 0,
                    }}
                  >
                    {section.title}
                  </h2>
                </div>

                {/* Body paragraphs */}
                <div
                  style={{
                    paddingLeft: 24,
                    display: "flex",
                    flexDirection: "column",
                    gap: 16,
                  }}
                >
                  {section.body.map((para, i) => (
                    <p
                      key={i}
                      style={{
                        fontSize: "0.9375rem",
                        color: "var(--bt-muted)",
                        lineHeight: 1.8,
                        margin: 0,
                      }}
                    >
                      {para}
                    </p>
                  ))}

                  {/* Contact card */}
                  {section.contact && (
                    <div
                      style={{
                        marginTop: 16,
                        padding: "28px 32px",
                        borderRadius: 16,
                        background: "var(--bt-card)",
                        border: "1px solid var(--bt-border)",
                        display: "flex",
                        flexDirection: "column",
                        gap: 20,
                      }}
                    >
                      {/* Email row */}
                      <a
                        href="mailto:adityaraj@thebrandthink.com"
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: 16,
                          textDecoration: "none",
                          color: "inherit",
                        }}
                      >
                        <div
                          style={{
                            width: 44,
                            height: 44,
                            borderRadius: 10,
                            background: "rgba(232,49,42,0.10)",
                            border: "1px solid rgba(232,49,42,0.20)",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            flexShrink: 0,
                          }}
                        >
                          <svg
                            width="18"
                            height="18"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="var(--bt-red)"
                            strokeWidth="2"
                          >
                            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                            <polyline points="22,6 12,13 2,6" />
                          </svg>
                        </div>
                        <div>
                          <div
                            style={{
                              fontSize: "0.75rem",
                              fontWeight: 600,
                              color: "var(--bt-muted)",
                              letterSpacing: "0.08em",
                              textTransform: "uppercase",
                              marginBottom: 4,
                            }}
                          >
                            Email
                          </div>
                          <div
                            style={{
                              fontSize: "0.9375rem",
                              fontWeight: 600,
                              color: "var(--bt-white)",
                            }}
                          >
                            adityaraj@thebrandthink.com
                          </div>
                        </div>
                      </a>

                      <div
                        style={{
                          height: 1,
                          background: "var(--bt-border)",
                        }}
                      />

                      {/* Company address row */}
                      <div
                        style={{
                          display: "flex",
                          alignItems: "flex-start",
                          gap: 16,
                        }}
                      >
                        <div
                          style={{
                            width: 44,
                            height: 44,
                            borderRadius: 10,
                            background: "var(--bt-surface)",
                            border: "1px solid var(--bt-border)",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            flexShrink: 0,
                          }}
                        >
                          <svg
                            width="18"
                            height="18"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="var(--bt-muted)"
                            strokeWidth="2"
                          >
                            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                            <circle cx="12" cy="10" r="3" />
                          </svg>
                        </div>
                        <div>
                          <div
                            style={{
                              fontSize: "0.75rem",
                              fontWeight: 600,
                              color: "var(--bt-muted)",
                              letterSpacing: "0.08em",
                              textTransform: "uppercase",
                              marginBottom: 4,
                            }}
                          >
                            Registered Office
                          </div>
                          <div
                            style={{
                              fontSize: "0.9375rem",
                              color: "var(--bt-white)",
                              lineHeight: 1.5,
                            }}
                          >
                            BrandThink Marketing Pvt. Ltd.
                            <br />
                            2nd Main, 3rd Cross, Murugeshpalya
                            <br />
                            Bangalore, Karnataka 560017, India
                          </div>
                        </div>
                      </div>

                      {/* Response time note */}
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: 8,
                          padding: "12px 16px",
                          borderRadius: 8,
                          background: "var(--bt-surface)",
                          border: "1px solid var(--bt-border)",
                        }}
                      >
                        <svg
                          width="14"
                          height="14"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="var(--bt-muted)"
                          strokeWidth="2"
                          style={{ flexShrink: 0 }}
                        >
                          <circle cx="12" cy="12" r="10" />
                          <polyline points="12 6 12 12 16 14" />
                        </svg>
                        <span
                          style={{
                            fontSize: "0.8125rem",
                            color: "var(--bt-muted)",
                          }}
                        >
                          We respond to legal and contractual enquiries within 2
                          business days.
                        </span>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* ── Footer note ──────────────────────────────────────────────── */}
          <div
            style={{
              marginTop: 64,
              padding: "32px 40px",
              borderRadius: 16,
              background: "var(--bt-card)",
              border: "1px solid var(--bt-border)",
              textAlign: "center",
            }}
          >
            <p
              style={{
                fontSize: "0.875rem",
                color: "var(--bt-muted)",
                lineHeight: 1.75,
                margin: 0,
              }}
            >
              These Terms of Service constitute the entire agreement between you
              and BrandThink with respect to the subject matter herein and
              supersede all prior understandings, communications, or agreements.
              If any provision of these terms is held to be invalid or
              unenforceable, the remaining provisions shall continue in full
              force and effect. BrandThink's failure to enforce any right or
              provision in these terms shall not be deemed a waiver of such
              right or provision.
            </p>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 8,
                marginTop: 20,
              }}
            >
              <div
                style={{
                  width: 6,
                  height: 6,
                  borderRadius: "50%",
                  background: "var(--bt-red)",
                }}
              />
              <span
                style={{
                  fontSize: "0.8125rem",
                  fontWeight: 700,
                  color: "var(--bt-white)",
                  letterSpacing: "0.05em",
                }}
              >
                BrandThink — 360° Marketing & Advertising
              </span>
              <div
                style={{
                  width: 6,
                  height: 6,
                  borderRadius: "50%",
                  background: "var(--bt-red)",
                }}
              />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
