import Link from "next/link";

export default function TermsAndConditions() {
  return (
    <>
      {/* Banner */}
      <section className="bg-gradient-to-r from-[#6D7DFF] to-[#D6DCFF] py-16 text-center">
        <p className="text-white text-3xl md:text-5xl font-bold capitalize">Terms And Conditions</p>
        <nav className="mt-3">
          <ol className="flex justify-center list-none gap-2 text-sm text-white/80">
            <li><Link href="/">Home</Link></li>
            <li>/</li>
            <li className="font-semibold text-white">Terms And Conditions</li>
          </ol>
        </nav>
      </section>

      {/* Content */}
      <section className="max-w-3xl mx-auto px-4 py-12">
        <h1 className="text-2xl sm:text-3xl font-bold text-center text-blue-600 mb-6">
          Terms and Conditions
        </h1>

        <div className="space-y-6 text-sm sm:text-base text-gray-700">
          <p>
            Welcome to <strong>BlueTick AI Academy</strong> (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;). By accessing or using our website and our services, you agree to comply with and be bound by these Terms and Conditions (&quot;Terms&quot;). If you do not agree with any part of these Terms, please do not use our services.
          </p>

          <div>
            <h2 className="text-lg sm:text-xl font-semibold mt-4 mb-2">1. Definitions</h2>
            <ul className="list-disc ml-6 space-y-1">
              <li><strong>&quot;User,&quot; &quot;You,&quot; or &quot;Your&quot;</strong> refers to any individual or entity using our services.</li>
              <li><strong>&quot;Services&quot;</strong> refer to all courses, training programs, and related offerings provided by BlueTick AI Academy.</li>
              <li><strong>&quot;Website&quot;</strong> refers to the BlueTick AI Academy summer camp portal.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-lg sm:text-xl font-semibold mt-4 mb-2">2. Eligibility</h2>
            <ul className="list-disc ml-6 space-y-1">
              <li>You must be at least 18 years old or have guardian consent.</li>
              <li>You must provide accurate and complete information when registering.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-lg sm:text-xl font-semibold mt-4 mb-2">3. Enrollment &amp; Payments</h2>
            <ul className="list-disc ml-6 space-y-1">
              <li>Course fees must be paid in full or according to the agreed installment plan.</li>
              <li>Fees are non-refundable.</li>
              <li>We may modify course details before course commencement.</li>
              <li>Applicable taxes may be charged.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-lg sm:text-xl font-semibold mt-4 mb-2">4. Refund &amp; Cancellation Policy</h2>
            <ul className="list-disc ml-6 space-y-1">
              <li>Cancellations 7 days before course start receive a full refund.</li>
              <li>Refund requests must be emailed to{" "}
                <a href="mailto:info@bluetickacademy.ai" className="text-blue-500 underline">info@bluetickacademy.ai</a>
              </li>
              <li>No refunds after course commencement.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-lg sm:text-xl font-semibold mt-4 mb-2">5. Course Conduct &amp; Code of Ethics</h2>
            <ul className="list-disc ml-6 space-y-1">
              <li>Maintain professional behavior.</li>
              <li>Harassment or misconduct results in termination without refund.</li>
              <li>Course materials cannot be shared or redistributed.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-lg sm:text-xl font-semibold mt-4 mb-2">6. Intellectual Property</h2>
            <p>All content and course materials belong to BlueTick AI Academy and are copyright protected.</p>
          </div>

          <div>
            <h2 className="text-lg sm:text-xl font-semibold mt-4 mb-2">7. Disclaimer of Warranties</h2>
            <p>Services are provided &quot;as is&quot; without guarantees of specific results.</p>
          </div>

          <div>
            <h2 className="text-lg sm:text-xl font-semibold mt-4 mb-2">8. Limitation of Liability</h2>
            <p>We are not liable for indirect or consequential damages.</p>
          </div>

          <div>
            <h2 className="text-lg sm:text-xl font-semibold mt-4 mb-2">9. Privacy Policy</h2>
            <p>Governed by our{" "}
              <Link href="/privacypolicy" className="text-blue-500 underline">Privacy Policy</Link>.
            </p>
          </div>

          <div>
            <h2 className="text-lg sm:text-xl font-semibold mt-4 mb-2">10. Third-Party Links &amp; Services</h2>
            <p>We are not responsible for third-party websites or services.</p>
          </div>

          <div>
            <h2 className="text-lg sm:text-xl font-semibold mt-4 mb-2">11. Modification of Terms</h2>
            <p>Terms may be updated; continued use implies acceptance.</p>
          </div>

          <div>
            <h2 className="text-lg sm:text-xl font-semibold mt-4 mb-2">12. Termination</h2>
            <p>Violations may result in termination without notice.</p>
          </div>

          <div>
            <h2 className="text-lg sm:text-xl font-semibold mt-4 mb-2">13. Governing Law &amp; Dispute Resolution</h2>
            <p>Governed by the laws of Bangalore, Karnataka.</p>
          </div>

          <div>
            <h2 className="text-lg sm:text-xl font-semibold mt-4 mb-2">14. Contact Us</h2>
            <p>For queries:</p>
            <p className="font-semibold mt-2">BlueTick AI Academy</p>
            <p>No.545, 2nd Floor, CMH Road, Indiranagar Stage 2, Bangalore - 560038</p>
            <p className="mt-1">
              Email:{" "}
              <a href="mailto:info@bluetickacademy.ai" className="text-blue-500 underline">info@bluetickacademy.ai</a>
            </p>
            <p>
              Phone:{" "}
              <a href="tel:+919606681814" className="text-blue-500 underline">9606-6818-14</a>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
