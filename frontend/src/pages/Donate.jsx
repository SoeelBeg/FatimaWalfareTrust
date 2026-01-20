import { motion } from "framer-motion";
import QRCODE from "../assets/7.jpeg"

export default function Donate() {

  return (
    <div className="bg-gray-50 text-gray-800">

      {/* ================= HERO SECTION ================= */}
      <section className="relative bg-gradient-to-br  from-blue-600 via-green-700 to-emerald-500 text-white py-24 md:py-22 overflow-hidden">

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/30"></div>

        {/* Decorative Blur */}
        <div className="absolute -top-24 -left-24 w-72 h-72 bg-yellow-400/30 rounded-full blur-3xl"></div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative z-10 max-w-5xl mx-auto px-6 text-center"
        >
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6">
            Support <span className="text-yellow-400">Fatima Welfare Trust</span>
          </h1>

          <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto mb-8">
            Your contribution helps educate children and build a future of
            doctors, engineers, teachers and leaders.
          </p>
        </motion.div>
      </section>

      {/* ================= QURAN AYAT ================= */}
      <section  className=" py-16 bg-emerald-50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-2xl md:text-3xl font-semibold leading-relaxed mb-6 text-emerald-900">
            مَّثَلُ ٱلَّذِينَ يُنفِقُونَ أَمْوَٰلَهُمْ فِى سَبِيلِ ٱللَّهِ
            كَمَثَلِ حَبَّةٍ أَنۢبَتَتْ سَبْعَ سَنَابِلَ
          </p>

          <p className="italic text-gray-600 mb-2">
            “The example of those who spend their wealth in the way of Allah is
            like a seed which grows seven ears…”
          </p>

          <span className="text-sm font-bold text-emerald-700">
            (Qur’an 2:261)
          </span>
        </div>
      </section>

      {/* ================= DONATION SECTION ================= */}
      <section id="donate" className="py-20">
        <div className="max-w-6xl mx-auto px-4">

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-3xl shadow-xl overflow-hidden"
          >

            {/* Header */}
            <div className="bg-blue-500 text-gray-100 p-6 text-center">
              <h2 className="text-2xl font-bold">Make a Donation</h2>
              <p className="text-sm text-white/90">
                100% of your donation supports education & welfare
              </p>
            </div>

            {/* Content */}
            <div className="grid md:grid-cols-2 gap-8 p-8">

              {/* UPI SECTION */}
              <div className="text-center">
                <h3 className="text-xl font-bold mb-2 text-gray-600">Donate via UPI</h3>
                <p className="text-sm text-gray-500 mb-4">
                  Scan using Google Pay, PhonePe or Paytm
                </p>
                <div>
                <img
                  src={QRCODE}
                  alt="UPI QR Code"
                  className="w-65 mx-auto rounded-2xl border shadow-md"
                />
                {/* Button */}
                            <a
                              href={QRCODE}
                              download
                              className="mt-4 inline-flex items-center justify-center
                                         bg-gradient-to-r from-blue-500 to-blue-600
                                         text-white px-5 py-2 rounded-full
                                         hover:scale-95 transition  shadow text-sm w-full"
                            >
                              Download QR Code
                            </a>
</div>
                <p className="mt-4 text-sm">
                  UPI ID:
                  <span className="block font-semibold">
                    fatimawelfaretrust2@sbi
                  </span>
                </p>
              </div>

              {/* BANK SECTION */}
              <div className="bg-emerald-50 rounded-2xl p-6">
                <h3 className="text-xl font-bold mb-4 text-center text-gray-600">
                  Bank Transfer Details
                </h3>

                <ul className="space-y-3 text-lg">
                  <li><b>Account Name:</b> Fatima Welfare Trust</li>
                  <li><b>Account Number:</b> 9887875797</li>
                  <li><b>Bank Name:</b> State Bank of India</li>
                  <li><b>IFSC Code:</b> SBIN0006335</li>
                  <li><b>Branch:</b> Sewa Sadan Rd</li>
                </ul>
              </div>

            </div>

            {/* AFTER PAYMENT */}
            <div className="bg-gray-100 p-6 text-center">
              <h3 className="text-lg font-bold mb-3">
                After Payment Confirmation
              </h3>

              <p className="text-sm mb-3">
                Please share your payment screenshot or reference number:
              </p>

              <p className="font-semibold">
                📞 WhatsApp: +91 9887875797 <br />
                📧 Email: fatimawelfaretrustbhilwara@gmail.com
              </p>

              <p className="text-xs text-gray-500 mt-4">
                Our team will verify and confirm your donation.
              </p>
            </div>

          </motion.div>
        </div>
      </section>

    </div>
  );
}
