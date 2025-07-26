import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <Card className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border-gray-700">
          <CardHeader>
            <CardTitle className="text-3xl font-bold text-center text-white">Privacy Policy</CardTitle>
            <p className="text-center text-gray-400">Last updated: January 2025</p>
          </CardHeader>
          <CardContent className="space-y-6">
            <section>
              <h2 className="text-xl font-semibold mb-3 text-white">Information We Collect</h2>
              <p className="text-gray-400">
                We collect information you provide directly to us, such as when you create a Mahadev Book ID, 
                contact us for support, or fill out forms on our platform.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3 text-white">How We Use Your Information</h2>
              <p className="text-gray-400">
                We use the information we collect to provide, maintain, and improve our gaming access services, 
                process transactions, and communicate with you about our services.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3 text-white">Information Sharing</h2>
              <p className="text-gray-400">
                We do not sell, trade, or otherwise transfer your personal information to third parties without 
                your consent, except as described in this privacy policy.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3 text-white">Data Security</h2>
              <p className="text-gray-400">
                We implement appropriate security measures to protect your personal information against 
                unauthorized access, alteration, disclosure, or destruction.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3 text-white">Contact Us</h2>
              <p className="text-gray-400">
                If you have any questions about this Privacy Policy, please contact us through our WhatsApp 
                support channel or email us at support@mahadevbook.com.
              </p>
            </section>
          </CardContent>
        </Card>
      </div>
      <Footer />
    </div>
  );
}
