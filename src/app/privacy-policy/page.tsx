import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy - Emaculata",
  description: "Emaculata privacy policy, terms of service, and cookie information.",
};

function PolicySection({
  title,
  id,
  children,
}: {
  title: string;
  id: string;
  children: React.ReactNode;
}) {
  return (
    <div id={id} className="scroll-mt-24">
      <h2 className="text-2xl font-bold text-forest mb-3">{title}</h2>
      <div className="text-gray-700 leading-relaxed space-y-3">{children}</div>
    </div>
  );
}

const sections = [
  { id: "visitors", label: "Visitors To Our Website" },
  { id: "newsletter", label: "Newsletter Sign Up" },
  { id: "forms", label: "Form Submissions" },
  { id: "links", label: "Links To Other Websites" },
  { id: "access", label: "Access To Your Personal Information" },
  { id: "changes", label: "Changes To This Privacy Notice" },
  { id: "cookies-policy", label: "Cookies Policy" },
  { id: "what-is-a-cookie", label: "What Is A Cookie?" },
  { id: "cookie-duration", label: "How Long Are Cookies Stored For?" },
  { id: "cookies-used", label: "Cookies Used On The Website" },
  { id: "strictly-necessary", label: "Strictly Necessary Cookies" },
  { id: "performance", label: "Performance Cookies" },
  { id: "functionality", label: "Functionality Cookies" },
  { id: "third-party", label: "Third Party Cookies" },
];

export default function PrivacyPolicyPage() {
  return (
    <>
      <section className="bg-dark-bg text-white py-16 md:py-24 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Privacy Policy
          </h1>
          <p className="text-xl text-white/80">Privacy Policy &amp; GDPR</p>
        </div>
      </section>

      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-[1fr_280px] gap-12">
            {/* Main content */}
            <div className="space-y-10">
              <div>
                <h2 className="text-3xl font-bold text-forest mb-4">
                  Privacy Policy &amp; Terms of Service
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  This Privacy Policy describes how our organization collects,
                  uses, and protects your personal information when you visit our
                  website or use our services. By accessing our website, you
                  agree to the terms outlined in this policy.
                </p>
              </div>

              <PolicySection id="visitors" title="Visitors To Our Website">
                <p>
                  We collect standard web traffic information through secure and
                  transparent methods. Visitor data may include IP addresses,
                  browser type, and browsing behavior to improve user experience
                  and website functionality.
                </p>
              </PolicySection>

              <PolicySection id="newsletter" title="Newsletter Sign Up">
                <p>
                  When you subscribe to our newsletter, we collect your email
                  address and optional personal details to send targeted
                  communications. You can unsubscribe at any time using the link
                  provided in each newsletter.
                </p>
              </PolicySection>

              <PolicySection id="forms" title="Form Submissions">
                <p>
                  Information submitted through our website forms is collected
                  and stored securely for the purpose of responding to your
                  inquiries and providing requested services. We will not share
                  your personal information with third parties without your
                  consent.
                </p>
              </PolicySection>

              <PolicySection id="links" title="Links To Other Websites">
                <p>
                  Our website may contain links to external sites not operated by
                  us. We are not responsible for the privacy practices or content
                  of these third-party websites and encourage users to review
                  their respective privacy policies.
                </p>
              </PolicySection>

              <PolicySection
                id="access"
                title="Access To Your Personal Information"
              >
                <p>
                  You have the right to request access to, correction of, or
                  deletion of your personal information stored by our
                  organization. Please contact us using the information provided
                  at the end of this privacy policy.
                </p>
              </PolicySection>

              <PolicySection
                id="changes"
                title="Changes To This Privacy Notice"
              >
                <p>
                  We reserve the right to update this privacy policy
                  periodically. Any significant changes will be communicated
                  through our website or direct notification to registered users.
                </p>
              </PolicySection>

              <PolicySection id="cookies-policy" title="Cookies Policy">
                <p>
                  Our website uses cookies to enhance user experience, analyze
                  website traffic, and provide personalized content. By
                  continuing to use our site, you consent to our use of cookies.
                </p>
              </PolicySection>

              <PolicySection
                id="what-is-a-cookie"
                title="What Is A Cookie?"
              >
                <p>
                  A cookie is a small text file stored on your device that helps
                  websites remember your preferences and improve your browsing
                  experience. Cookies do not contain personally identifiable
                  information.
                </p>
              </PolicySection>

              <PolicySection
                id="cookie-duration"
                title="How Long Are Cookies Stored For?"
              >
                <p>
                  Cookies are stored for varying durations, from session-based
                  (deleted when you close your browser) to persistent cookies
                  that can remain on your device for up to 12 months.
                </p>
              </PolicySection>

              <PolicySection
                id="cookies-used"
                title="Cookies Used On The Website"
              >
                <p>
                  We use different types of cookies to optimize website
                  performance, understand user behavior, and provide a seamless
                  browsing experience.
                </p>
              </PolicySection>

              <PolicySection
                id="strictly-necessary"
                title="Strictly Necessary Cookies"
              >
                <p>
                  These cookies are essential for the basic functioning of our
                  website and cannot be disabled. They enable core features like
                  secure login and navigation.
                </p>
              </PolicySection>

              <PolicySection id="performance" title="Performance Cookies">
                <p>
                  Performance cookies collect anonymous data about how visitors
                  use our website, helping us understand and improve site
                  functionality and user experience.
                </p>
              </PolicySection>

              <PolicySection id="functionality" title="Functionality Cookies">
                <p>
                  Functionality cookies allow our website to remember user
                  preferences and provide enhanced, personalized features during
                  your visit.
                </p>
              </PolicySection>

              <PolicySection id="third-party" title="Third Party Cookies">
                <p>
                  We may use third-party cookies from external services like
                  Google Analytics to help us understand website traffic and user
                  interactions. These cookies are subject to the privacy policies
                  of their respective providers.
                </p>
              </PolicySection>

              <div className="pt-6 border-t border-gray-200">
                <p className="text-gray-600">
                  If you have any questions about this privacy policy, please{" "}
                  <Link
                    href="/contact"
                    className="text-forest underline hover:text-forest-light"
                  >
                    contact us
                  </Link>
                  .
                </p>
              </div>
            </div>

            {/* Quick Jump sidebar */}
            <aside className="hidden md:block">
              <div className="sticky top-28">
                <h3 className="text-sm font-bold uppercase tracking-wider text-gray-400 mb-4">
                  Quick Jump
                </h3>
                <nav className="space-y-2">
                  {sections.map((s) => (
                    <a
                      key={s.id}
                      href={`#${s.id}`}
                      className="block text-sm text-gray-600 hover:text-forest transition-colors"
                    >
                      {s.label}
                    </a>
                  ))}
                </nav>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}
