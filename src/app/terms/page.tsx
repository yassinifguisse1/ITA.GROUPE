import { Metadata } from "next";
import { Badge } from "@/components/ui/badge";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Terms of Service - iTA Groupe",
  description: "Read the terms and conditions for using iTA Groupe services.",
};

export default function TermsPage() {
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
                Terms of <span className="gradient-text">Service</span>
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
                    Welcome to iTA Groupe. By accessing or using our website and services, you agree to be bound by these Terms of Service. 
                    Please read them carefully before using our services.
                  </p>
                </div>

                <h2>1. Acceptance of Terms</h2>
                <p>
                  By accessing and using the services provided by iTA Groupe, you accept and agree to be bound by the terms and provisions 
                  of this agreement. If you do not agree to these terms, please do not use our services.
                </p>

                <h2>2. Services Description</h2>
                <p>
                  iTA Groupe provides digital marketing and web development services, including but not limited to:
                </p>
                <ul>
                  <li>Website design and development</li>
                  <li>Search engine optimization (SEO)</li>
                  <li>Social media marketing</li>
                  <li>Digital advertising campaigns</li>
                  <li>Custom digital solutions</li>
                </ul>

                <h2>3. User Obligations</h2>
                <p>When using our services, you agree to:</p>
                <ul>
                  <li>Provide accurate and complete information</li>
                  <li>Maintain the confidentiality of your account credentials</li>
                  <li>Use our services in compliance with all applicable laws</li>
                  <li>Not engage in any activity that could harm our services or other users</li>
                  <li>Not attempt to gain unauthorized access to our systems</li>
                </ul>

                <h2>4. Intellectual Property</h2>
                <p>
                  All content, features, and functionality of our services, including but not limited to text, graphics, logos, 
                  and software, are the property of iTA Groupe and are protected by copyright, trademark, and other intellectual property laws.
                </p>
                <h3>Client Materials</h3>
                <p>
                  Upon full payment, you own the final deliverables we create specifically for you. However, we retain the right 
                  to display the work in our portfolio and use it for promotional purposes unless otherwise agreed in writing.
                </p>

                <h2>5. Payment Terms</h2>
                <p>
                  Payment terms will be outlined in individual project agreements. Generally:
                </p>
                <ul>
                  <li>Invoices are due within 30 days of issuance</li>
                  <li>Project deposits are non-refundable</li>
                  <li>Late payments may incur interest charges</li>
                  <li>Services may be suspended for non-payment</li>
                </ul>

                <h2>6. Project Timeline and Delivery</h2>
                <p>
                  We strive to meet agreed-upon deadlines. However, timelines may be affected by:
                </p>
                <ul>
                  <li>Delayed client feedback or approvals</li>
                  <li>Changes in project scope</li>
                  <li>Technical difficulties beyond our control</li>
                  <li>Force majeure events</li>
                </ul>

                <h2>7. Revisions and Changes</h2>
                <p>
                  Project agreements include a specified number of revision rounds. Additional revisions may incur extra charges. 
                  Significant changes to project scope will require a new agreement and adjusted pricing.
                </p>

                <h2>8. Warranties and Disclaimers</h2>
                <p>
                  We warrant that services will be performed in a professional and workmanlike manner. However:
                </p>
                <ul>
                  <li>We do not guarantee specific results from marketing campaigns</li>
                  <li>Website performance may vary based on hosting and external factors</li>
                  <li>Third-party services and integrations are subject to their own terms</li>
                </ul>

                <h2>9. Limitation of Liability</h2>
                <p>
                  To the maximum extent permitted by law, iTA Groupe shall not be liable for any indirect, incidental, special, 
                  consequential, or punitive damages, or any loss of profits or revenues.
                </p>

                <h2>10. Confidentiality</h2>
                <p>
                  We respect the confidentiality of your business information and will not disclose it to third parties except 
                  as necessary to provide our services or as required by law.
                </p>

                <h2>11. Termination</h2>
                <p>
                  Either party may terminate services with written notice. Upon termination:
                </p>
                <ul>
                  <li>Client must pay for all work completed to date</li>
                  <li>We will deliver work-in-progress in its current state</li>
                  <li>Any outstanding payments become immediately due</li>
                </ul>

                <h2>12. Governing Law</h2>
                <p>
                  These terms shall be governed by and construed in accordance with the laws of Canada, without regard to its 
                  conflict of law provisions.
                </p>

                <h2>13. Changes to Terms</h2>
                <p>
                  We reserve the right to modify these terms at any time. We will notify users of any material changes. 
                  Continued use of our services after changes constitutes acceptance of the new terms.
                </p>

                <h2>14. Contact Information</h2>
                <p>
                  For questions about these Terms of Service, please contact us at:
                </p>
                <ul>
                  <li>Email: legal@ita-groupe.com</li>
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