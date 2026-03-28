import Link from "next/link";

export default function PrivacyPolicy() {
  return (
    <>
      {/* Banner */}
      <section className="bg-gradient-to-r from-[#6D7DFF] to-[#D6DCFF] py-16 text-center">
        <p className="text-white text-3xl md:text-5xl font-bold capitalize">Privacy Policy</p>
        <nav className="mt-3">
          <ol className="flex justify-center list-none gap-2 text-sm text-white/80">
            <li><Link href="/">Home</Link></li>
            <li>/</li>
            <li className="font-semibold text-white">Privacy Policy</li>
          </ol>
        </nav>
      </section>

      {/* Content */}
      <section className="max-w-3xl mx-auto px-4 py-12">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-4">Privacy Policy - 2025</h1>
        <p className="text-sm md:text-base text-center mb-8 text-gray-600">
          Bluetick Academy owned and operated by Tech Tree ("we," "our," or "us") respects your privacy and is committed to protecting it through this Privacy Policy.
        </p>

        <div className="space-y-6 text-sm md:text-base text-gray-700">
          <div>
            <h2 className="text-xl md:text-2xl font-semibold mb-2">1. Information We Collect</h2>
            <p>We collect several types of information from and about users of our Website, including:</p>
            <h3 className="font-semibold mt-3">a. Personal Information:</h3>
            <ul className="list-disc list-inside mt-1 space-y-1">
              <li>Name</li>
              <li>Email address</li>
              <li>Phone number</li>
              <li>Billing and payment information (if applicable)</li>
              <li>Any other information you voluntarily provide</li>
            </ul>
            <h3 className="font-semibold mt-3">b. Non-Personal Information:</h3>
            <ul className="list-disc list-inside mt-1 space-y-1">
              <li>IP address</li>
              <li>Browser type and version</li>
              <li>Device type and operating system</li>
              <li>Pages visited and time spent on the Website</li>
              <li>Referring URL and search queries</li>
            </ul>
            <h3 className="font-semibold mt-3">c. Cookies and Tracking Technologies:</h3>
            <p className="mt-1">We may use cookies, web beacons, and similar technologies to track user activity and improve our Website.</p>
          </div>

          <div>
            <h2 className="text-xl md:text-2xl font-semibold mb-2">2. How We Use Your Information</h2>
            <ul className="list-disc list-inside space-y-1">
              <li>To provide, operate, and improve our Website and services</li>
              <li>To personalize your experience on the Website</li>
              <li>To communicate with you, respond to inquiries, and provide customer support</li>
              <li>To process transactions and send transactional emails</li>
              <li>To analyze website performance and improve our offerings</li>
              <li>To prevent fraudulent activities and enhance security</li>
              <li>To comply with legal obligations</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl md:text-2xl font-semibold mb-2">3. How We Share Your Information</h2>
            <p>We do not sell, trade, or rent your personal information to third parties. However, we may share your information in the following cases:</p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li><strong>Service Providers:</strong> We may share your data with trusted third-party service providers.</li>
              <li><strong>Legal Compliance:</strong> We may disclose information if required by law.</li>
              <li><strong>Business Transfers:</strong> In case of a merger or acquisition, your data may be transferred.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl md:text-2xl font-semibold mb-2">4. Data Security</h2>
            <p>We take reasonable measures to protect your personal information from unauthorized access, use, or disclosure. However, no method is 100% secure.</p>
          </div>

          <div>
            <h2 className="text-xl md:text-2xl font-semibold mb-2">5. Your Rights and Choices</h2>
            <ul className="list-disc list-inside space-y-1">
              <li>Request a copy of your personal data.</li>
              <li>Request corrections to inaccurate data.</li>
              <li>Request deletion of your personal data.</li>
              <li>Adjust cookie preferences in your browser settings.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl md:text-2xl font-semibold mb-2">6. Third-Party Links</h2>
            <p>Our Website may contain links to third-party websites. We are not responsible for their privacy practices.</p>
          </div>

          <div>
            <h2 className="text-xl md:text-2xl font-semibold mb-2">7. Children&apos;s Privacy</h2>
            <p>Our Website is not intended for individuals under the age of 10.</p>
          </div>

          <div>
            <h2 className="text-xl md:text-2xl font-semibold mb-2">8. Changes to This Privacy Policy</h2>
            <p>We may update this Privacy Policy from time to time. Changes will be posted on this page.</p>
          </div>

          <p className="text-center pt-4">
            For any questions, contact us at{" "}
            <a href="mailto:info@bluetickacademy.ai" className="text-blue-600 underline">
              info@bluetickacademy.ai
            </a>
          </p>
        </div>
      </section>
    </>
  );
}
