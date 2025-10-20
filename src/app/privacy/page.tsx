import { Metadata } from "next";
import { Badge } from "@/components/ui/badge";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy - iTA Groupe",
  description: "Learn how iTA Groupe collects, uses, and protects your personal information.",
};

export default function PrivacyPage() {
  return (
    <>
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="relative py-24 md:py-32 overflow-hidden">
          <div className="absolute inset-0 gradient-bg -z-10"></div>
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <Badge variant="secondary" className="mb-4">Legal</Badge>
              <h1 className="text-4xl md:text-6xl font-bold">
                Privacy <span className="gradient-text">Policy</span>
              </h1>
              <p className="text-lg text-muted-foreground">
                Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
              </p>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="py-20">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-4xl mx-auto prose prose-lg dark:prose-invert">
              <div className="space-y-8 [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:mt-12 [&_h2]:mb-4 [&_h3]:text-xl [&_h3]:font-semibold [&_h3]:mt-8 [&_h3]:mb-3 [&_p]:text-muted-foreground [&_p]:leading-relaxed [&_ul]:space-y-2 [&_ul]:text-muted-foreground">
                <div>
                  <p>
                    At iTA Groupe, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, 
                    and safeguard your information when you visit our website or use our services.
                  </p>
                </div>

                <h2>Information We Collect</h2>
                <h3>Personal Information</h3>
                <p>
                  We may collect personal information that you voluntarily provide to us when you:
                </p>
                <ul>
                  <li>Fill out contact forms on our website</li>
                  <li>Subscribe to our newsletter</li>
                  <li>Request a quote or consultation</li>
                  <li>Engage with our services</li>
                </ul>
                <p>
                  This information may include your name, email address, phone number, company name, and any other information you choose to provide.
                </p>

                <h3>Automatically Collected Information</h3>
                <p>
                  When you visit our website, we automatically collect certain information about your device, including:
                </p>
                <ul>
                  <li>IP address</li>
                  <li>Browser type and version</li>
                  <li>Time zone setting</li>
                  <li>Operating system</li>
                  <li>Pages visited and time spent on pages</li>
                </ul>

                <h2>How We Use Your Information</h2>
                <p>We use the information we collect to:</p>
                <ul>
                  <li>Provide, operate, and maintain our services</li>
                  <li>Improve and personalize your experience</li>
                  <li>Communicate with you about our services</li>
                  <li>Send you marketing communications (with your consent)</li>
                  <li>Respond to your inquiries and provide customer support</li>
                  <li>Analyze usage and trends to improve our website</li>
                  <li>Detect and prevent fraud or security issues</li>
                </ul>

                <h2>How We Share Your Information</h2>
                <p>
                  We do not sell, trade, or rent your personal information to third parties. We may share your information with:
                </p>
                <ul>
                  <li><strong>Service Providers:</strong> Third-party vendors who assist us in operating our website and providing services</li>
                  <li><strong>Legal Requirements:</strong> When required by law or to protect our rights and safety</li>
                  <li><strong>Business Transfers:</strong> In connection with any merger, sale, or acquisition of our business</li>
                </ul>

                <h2>Data Security</h2>
                <p>
                  We implement appropriate technical and organizational security measures to protect your personal information. 
                  However, no method of transmission over the Internet is 100% secure, and we cannot guarantee absolute security.
                </p>

                <h2>Your Rights</h2>
                <p>You have the right to:</p>
                <ul>
                  <li>Access the personal information we hold about you</li>
                  <li>Request correction of inaccurate information</li>
                  <li>Request deletion of your personal information</li>
                  <li>Object to processing of your information</li>
                  <li>Withdraw consent for marketing communications</li>
                </ul>

                <h2>Cookies</h2>
                <p>
                  We use cookies and similar tracking technologies to track activity on our website and hold certain information. 
                  You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.
                </p>

                <h2>Third-Party Links</h2>
                <p>
                  Our website may contain links to third-party websites. We are not responsible for the privacy practices or 
                  content of these external sites. We encourage you to review their privacy policies.
                </p>

                <h2>Children's Privacy</h2>
                <p>
                  Our services are not intended for children under 13 years of age. We do not knowingly collect personal 
                  information from children under 13.
                </p>

                <h2>Changes to This Policy</h2>
                <p>
                  We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new 
                  Privacy Policy on this page and updating the "Last updated" date.
                </p>

                <h2>Contact Us</h2>
                <p>
                  If you have any questions about this Privacy Policy or our privacy practices, please contact us at:
                </p>
                <ul>
                  <li>Email: privacy@ita-groupe.com</li>
                  <li>Phone: +1 (555) 123-4567</li>
                  <li>Address: 123 Business Avenue, Montreal, QC, Canada</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer language="en" />
    </>
  );
}