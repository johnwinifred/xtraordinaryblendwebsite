import React, { useState } from "react";

type Tab = "privacy" | "terms";

// ── Reusable Layout Components ──────────────────────────

const Clause = ({ num, id, title, children }: { num: string; id: string; title: string; children: React.ReactNode }) => (
  <div id={id} className="mb-10 scroll-mt-24">
    <p className="text-xs font-black tracking-widest uppercase text-[#ffad5b] mb-1">{num}</p>
    <h3 className="text-sm font-black tracking-widest uppercase mb-3 text-black">{title}</h3>
    {children}
    <div className="h-px bg-gray-100 mt-10" />
  </div>
);

const HighlightBox = ({ children }: { children: React.ReactNode }) => (
  <div className="bg-white border-l-4 border-[#ffad5b] px-5 py-4 my-4">
    <p className="text-xs italic text-gray-500 leading-relaxed font-light">{children}</p>
  </div>
);

const AddressBox = () => (
  <div className="bg-black text-gray-300 px-5 py-5 border-l-4 border-[#ffad5b] text-xs leading-loose font-light mt-4">
    Xtraordinary Blend Ltd<br />
    116 Worsley Road North<br />
    Worsley, Manchester, M28 3QW<br />
    United Kingdom<br /><br />
    Email:{" "}
    <a href="mailto:xblendix@xtraordinaryblend.com" className="text-[#ffad5b] font-semibold">
      xblendix@xtraordinaryblend.com
    </a>
  </div>
);

const Prose = ({ children }: { children: React.ReactNode }) => (
  <p className="text-sm text-gray-500 leading-relaxed font-light mb-3">{children}</p>
);

const List = ({ items }: { items: string[] }) => (
  <ul className="list-disc pl-5 mb-3 space-y-1">
    {items.map((item, i) => (
      <li key={i} className="text-sm text-gray-500 leading-relaxed font-light">{item}</li>
    ))}
  </ul>
);

// ── Privacy Policy Content ──────────────────────────────

const PrivacyContent = () => (
  <div>
    <div className="mb-8 pb-6 border-b-2 border-gray-100">
      <h2 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "2.4rem", letterSpacing: "0.06em" }} className="mb-1">Privacy Policy</h2>
      <p className="text-xs text-gray-400 font-light tracking-wide">Last updated: <span className="text-[#ffad5b] font-semibold">13 April 2026</span> · Xtraordinary Blend Ltd, Manchester, UK</p>
    </div>

    <Clause num="01" id="p1" title="Overview">
      <Prose>Xtraordinary Blend Ltd ("we", "us", "our") operates this website as an informational landing page to showcase our bespoke clothing services and direct visitors to our online store. We respect your privacy and are committed to being transparent about how this website handles any information.</Prose>
      <HighlightBox>This is a landing page only. We do not operate accounts, memberships, or sign-up forms on this site. Purchases are completed on our separate store platform.</HighlightBox>
    </Clause>

    <Clause num="02" id="p2" title="Information We Collect">
      <Prose>Because this site is informational and does not include sign-up forms or user accounts, we collect minimal data:</Prose>
      <List items={[
        "Usage Data — anonymised information such as pages visited, browser type, device type, and time spent on pages, collected through analytics tools.",
        "Cookie Data — small data files stored on your browser to help us understand traffic patterns and improve the site experience.",
        "Contact Enquiries — if you contact us directly via email, we receive and store your email address and message content.",
      ]} />
      <Prose>We do not collect payment information, passwords, or personal accounts on this site. All transactions occur on our store platform under its own privacy terms.</Prose>
    </Clause>

    <Clause num="03" id="p3" title="How We Use Your Information">
      <Prose>Any information we collect is used solely to:</Prose>
      <List items={[
        "Understand how visitors use our website and improve its content and performance",
        "Respond to enquiries sent directly to our team via email",
        "Ensure the technical security and proper functioning of the site",
      ]} />
      <Prose>We do not sell, trade, or rent your personal information to any third parties. We do not use your data for targeted advertising on this site.</Prose>
    </Clause>

    <Clause num="04" id="p4" title="Cookies">
      <Prose>This site may use cookies for analytics and performance purposes. These are used to track anonymised page views, understand which content performs best, and maintain site security. You may disable cookies at any time through your browser settings without preventing you from accessing the site or our store.</Prose>
    </Clause>

    <Clause num="05" id="p5" title="Third-Party Links">
      <Prose>This website contains links to our external store and potentially to social media platforms. Once you leave this site by clicking any external link, you are subject to the privacy policies of those platforms. We accept no responsibility for the content or data practices of third-party websites.</Prose>
    </Clause>

    <Clause num="06" id="p6" title="Store Redirect & Purchases">
      <Prose>This landing page redirects visitors to our online store to browse and purchase products. The store operates as a separate platform with its own account system, payment processing, and privacy policy.</Prose>
      <HighlightBox>By clicking "Shop Now" or any store link, you will be redirected to our store platform. Any personal information you provide there is governed by the store's own privacy policy.</HighlightBox>
    </Clause>

    <Clause num="07" id="p7" title="Data Security">
      <Prose>We implement appropriate technical and organisational measures to protect any data associated with this website. We retain contact enquiry data for up to 12 months, after which it is securely deleted unless an ongoing business relationship requires otherwise.</Prose>
    </Clause>

    <Clause num="08" id="p8" title="Your Rights (UK GDPR)">
      <Prose>Under UK GDPR, you have the right to access, correct, or delete personal data we hold about you, and to lodge a complaint with the Information Commissioner's Office (ICO) at{" "}
        <a href="https://ico.org.uk" target="_blank" rel="noreferrer" className="text-[#ffad5b] font-semibold">ico.org.uk</a>.
        Contact us at{" "}
        <a href="mailto:xblendix@xtraordinaryblend.com" className="text-[#ffad5b] font-semibold">xblendix@xtraordinaryblend.com</a> — we will respond within 30 days.
      </Prose>
    </Clause>

    <Clause num="09" id="p9" title="Changes to This Policy">
      <Prose>We may update this Privacy Policy periodically. The "Last Updated" date at the top of this page will always reflect the most current version. Continued use of this site after any update constitutes acceptance of the revised policy.</Prose>
    </Clause>

    <Clause num="10" id="p10" title="Contact Us">
      <Prose>For any privacy-related questions or requests, please reach out:</Prose>
      <AddressBox />
    </Clause>
  </div>
);

// ── Terms of Service Content ────────────────────────────

const TermsContent = () => (
  <div>
    <div className="mb-8 pb-6 border-b-2 border-gray-100">
      <h2 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "2.4rem", letterSpacing: "0.06em" }} className="mb-1">Terms of Service</h2>
      <p className="text-xs text-gray-400 font-light tracking-wide">Last updated: <span className="text-[#ffad5b] font-semibold">13 April 2026</span> · Xtraordinary Blend Ltd, Manchester, UK</p>
    </div>

    <Clause num="01" id="t1" title="Agreement to Terms">
      <Prose>By accessing or using the Xtraordinary Blend website ("Site"), you agree to be bound by these Terms of Service. If you do not agree with any part of these terms, you must not use this Site.</Prose>
      <HighlightBox>This Site is an informational landing page only. It showcases our services and directs you to our store. These Terms govern your use of this Site — not the store, which has its own terms.</HighlightBox>
    </Clause>

    <Clause num="02" id="t2" title="Use of This Website">
      <Prose>You may use this Site for lawful purposes only. You agree not to:</Prose>
      <List items={[
        "Use the Site in any way that violates applicable local, national, or international laws or regulations",
        "Transmit any unsolicited or unauthorised advertising material",
        "Attempt to gain unauthorised access to any part of the Site or its related systems",
        "Reproduce, duplicate, or resell any part of this Site without our express written permission",
        "Use automated tools (bots, scrapers) to extract content from the Site",
      ]} />
    </Clause>

    <Clause num="03" id="t3" title="Store Redirect & Purchases">
      <Prose>This website may redirect you to our online store to browse and purchase bespoke garments. Please note:</Prose>
      <List items={[
        "All purchases and transactions occur on the store platform, not this Site",
        "The store's own Terms of Service and Privacy Policy apply to all transactions",
        "Custom and bespoke garments are non-refundable once production has commenced",
        "We are not liable for technical issues or errors occurring on the store platform",
      ]} />
      <HighlightBox>By clicking any "Shop Now" or store link, you leave this Site and enter our store environment, which is subject to its own terms.</HighlightBox>
    </Clause>

    <Clause num="04" id="t4" title="Intellectual Property">
      <Prose>All content on this Site — including text, photography, graphics, logos, the Xblendix name, brand marks, and design layouts — is the exclusive property of Xtraordinary Blend Ltd and is protected under applicable UK and international copyright and trademark laws.</Prose>
      <Prose>You may not reproduce, distribute, modify, or commercially exploit any content from this Site without prior written consent. The XBLENDIX wordmark and "Xtraordinary Blend" name are trademarks of Xtraordinary Blend Ltd. Unauthorised use is strictly prohibited.</Prose>
    </Clause>

    <Clause num="05" id="t5" title="Limitation of Liability">
      <Prose>To the fullest extent permitted by law, Xtraordinary Blend Ltd shall not be liable for any direct, indirect, incidental, or consequential damages arising from your use of or inability to use this Site, any errors or omissions in content, or actions taken on third-party platforms linked from this Site.</Prose>
      <Prose>This Site and its content are provided on an "as is" and "as available" basis without warranties of any kind.</Prose>
    </Clause>

    <Clause num="06" id="t6" title="Governing Law">
      <Prose>These Terms of Service shall be governed by and construed in accordance with the laws of England and Wales. Any disputes arising from your use of this Site shall be subject to the exclusive jurisdiction of the courts of England and Wales.</Prose>
    </Clause>

    <Clause num="07" id="t7" title="Contact">
      <Prose>Questions about these Terms of Service should be sent to:</Prose>
      <AddressBox />
    </Clause>
  </div>
);

// ── Main Page ───────────────────────────────────────────

const LegalPage: React.FC = () => {
  const [tab, setTab] = useState<Tab>("privacy");

  const privacyLinks = [
    { href: "#p1", label: "Overview" },
    { href: "#p2", label: "Information We Collect" },
    { href: "#p3", label: "How We Use It" },
    { href: "#p4", label: "Cookies" },
    { href: "#p5", label: "Third-Party Links" },
    { href: "#p6", label: "Store Redirect" },
    { href: "#p7", label: "Data Security" },
    { href: "#p8", label: "Your Rights" },
    { href: "#p9", label: "Changes to Policy" },
    { href: "#p10", label: "Contact Us" },
  ];

  const termsLinks = [
    { href: "#t1", label: "Agreement" },
    { href: "#t2", label: "Use of Website" },
    { href: "#t3", label: "Store & Purchases" },
    { href: "#t4", label: "Intellectual Property" },
    { href: "#t5", label: "Limitation of Liability" },
    { href: "#t6", label: "Governing Law" },
    { href: "#t7", label: "Contact" },
  ];

  const links = tab === "privacy" ? privacyLinks : termsLinks;

  return (
    <div style={{ fontFamily: "'Barlow', sans-serif" }} className="bg-[#F5F2EC] text-black min-h-screen">

      {/* HERO */}
      <div className="bg-black py-14 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: "repeating-linear-gradient(45deg, #ffad5b, #ffad5b 1px, transparent 1px, transparent 50px)" }} />
        <h1 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "clamp(2.8rem,7vw,5.5rem)", letterSpacing: "0.06em" }} className="text-white">
          Legal <span className="text-[#ffad5b]">&</span> Policies
        </h1>
        <p className="text-gray-400 mt-2 text-sm tracking-wide font-light">Transparency, trust, and clarity — the fabric of how we operate.</p>
        <div className="flex justify-center gap-8 mt-4">
          {[["Effective", "1 Jan 2025"], ["Entity", "Xtraordinary Blend Ltd"], ["Location", "Manchester, UK"]].map(([k, v]) => (
            <span key={k} className="text-xs text-gray-600 font-light tracking-wide">
              <span className="text-[#ffad5b] font-semibold">{k}:</span> {v}
            </span>
          ))}
        </div>
      </div>
      <div className="h-1.5 bg-[#ffad5b]" />

      {/* TAB NAV */}
      <div className="bg-white border-b-2 border-gray-200 flex px-8">
        {(["privacy", "terms"] as Tab[]).map((t) => (
          <button key={t} onClick={() => setTab(t)}
            className={`text-xs font-bold tracking-widest uppercase px-8 py-4 border-b-2 border-transparent transition-all ${tab === t ? "text-[#ffad5b] border-[#ffad5b]" : "text-gray-400 hover:text-[#ffad5b]"}`}>
            {t === "privacy" ? "Privacy Policy" : "Terms of Service"}
          </button>
        ))}
      </div>

      {/* MAIN LAYOUT */}
      <div className="max-w-5xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-0">

        {/* SIDEBAR */}
        <aside className="md:col-span-1 pr-6 mb-8 md:mb-0">
          <div className="sticky top-24">
            <p className="text-xs font-black tracking-widest uppercase text-[#ffad5b] mb-3">
              {tab === "privacy" ? "Privacy Policy" : "Terms of Service"}
            </p>
            <nav className="space-y-0">
              {links.map((link) => (
                <a key={link.href} href={link.href}
                  className="block text-xs font-medium text-gray-500 hover:text-black pl-3 py-2 border-l-2 border-transparent hover:border-[#ffad5b] transition-all">
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Sidebar CTA */}
            <div className="mt-8 bg-black p-5">
              <p className="text-xs text-gray-400 font-light leading-relaxed mb-4">
                Ready to commission your bespoke piece?
              </p>
              <a href="https://store.xtraordinaryblend.com" target="_blank" rel="noreferrer"
                className="block bg-[#ffad5b] text-white text-xs font-bold tracking-widest uppercase px-4 py-3 text-center hover:bg-[#b8973e] transition-colors">
                Visit Our Store →
              </a>
            </div>
          </div>
        </aside>

        {/* CONTENT */}
        <main className="md:col-span-3 border-l border-gray-200 pl-8">
          {tab === "privacy" ? <PrivacyContent /> : <TermsContent />}
        </main>
      </div>

      {/* STORE REDIRECT BANNER */}
      {/* <div className="bg-black border-t-4 border-[#ffad5b] py-16 text-center">
        <h3 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "2.5rem", letterSpacing: "0.06em" }} className="text-white mb-2">
          Ready to Own <span className="text-[#ffad5b]">Something Extraordinary?</span>
        </h3>
        <p className="text-gray-500 text-sm font-light mb-6">Commission your bespoke piece or browse our ready-to-wear collections.</p>
        <div className="flex gap-4 justify-center flex-wrap">
          <a href="https://store.xtraordinaryblend.com" target="_blank" rel="noreferrer"
            className="inline-flex items-center gap-2 bg-[#ffad5b] text-white text-xs font-bold tracking-widest uppercase px-8 py-4 hover:bg-[#b8973e] transition-colors">
            Visit the Store →
          </a>
          <a href="mailto:xblendix@xtraordinaryblend.com"
            className="inline-flex items-center border border-gray-700 text-gray-400 text-xs font-bold tracking-widest uppercase px-8 py-4 hover:border-[#ffad5b] hover:text-[#ffad5b] transition-all">
            Contact Us
          </a>
        </div>
      </div> */}

      {/* FOOTER */}
     
    </div>
  );
};

export default LegalPage;
