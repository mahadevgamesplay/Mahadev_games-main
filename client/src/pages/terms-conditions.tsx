import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function TermsConditions() {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <Card className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border-gray-700">
          <CardHeader>
            <CardTitle className="text-3xl font-bold text-center text-white">Terms & Conditions</CardTitle>
            <p className="text-center text-gray-400">Last updated: January 2025</p>
          </CardHeader>
          <CardContent className="space-y-6">
            <section>
              <h2 className="text-xl font-semibold mb-3 text-white">Acceptance of Terms</h2>
              <p className="text-gray-400">
                By accessing and using Mahadev Book services, you accept and agree to be bound by 
                the terms and provision of this agreement.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3 text-white">Service Description</h2>
              <p className="text-gray-400">
                Mahadev Book provides Entertainment ID services for accessing various digital game zones 
                and skill-based gaming platforms. Our services are intended for entertainment purposes only.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3 text-white">User Responsibilities</h2>
              <p className="text-gray-400">
                Users are responsible for maintaining the confidentiality of their Mahadev Book ID credentials 
                and for all activities that occur under their account.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3 text-white">Prohibited Activities</h2>
              <p className="text-gray-400">
                Users may not use our services for any illegal activities, fraud, or activities that violate 
                the terms of service of connected gaming platforms.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3 text-white">Limitation of Liability</h2>
              <p className="text-gray-400">
                Mahadev Book shall not be liable for any indirect, incidental, special, consequential, 
                or punitive damages resulting from your use of our services.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3 text-white">Contact Information</h2>
              <p className="text-gray-400">
                For questions about these Terms & Conditions, please contact us through our official 
                WhatsApp support channel.
              </p>
            </section>
          </CardContent>
        </Card>
      </div>
      <Footer />
    </div>
  );
}
