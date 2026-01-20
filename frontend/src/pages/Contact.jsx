import { MapPin, Phone, Mail, ArrowRight } from "lucide-react"
import { Link } from "react-router-dom";
import { motion } from "framer-motion"
import formPreview from "../assets/1.jpeg"
import leftimg from "../assets/contact.jpeg"

import membershipForm from "../assets/FatimaTrustForm.pdf"

export default function Contact() {
  return (
    <main className="w-full">

      {/* Hero */}
      <motion.div
        initial={{ opacity: 0, }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <section className=" relative bg-gradient-to-br from-blue-600 via-green-700 to-emerald-500 text-white py-20 md:py-25 ">

          {/* Overlay pattern effect (simple gradient layer) */}
          <div className="absolute inset-0 bg-black/20"></div>

          <div className="relative max-w-7xl mx-auto px-6 pt-10">
            <div className="max-w-3xl">

              <p className="text-blue-500-400 font-semibold tracking-widest uppercase mb-1">
                Contact Us
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                <span className="text-yellow-400"> Get in Touch With Us</span>
              </h1>

              <p className="text-lg md:text-xl text-white/90 leading-relaxed">
                We’re here to help you with admissions, trust activities,
                and general inquiries.
              </p>

            </div>
          </div>
        </section>
      </motion.div>

      

      {/* --Fatima Trust Form  ----*/}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-3 gap-8 items-stretch">

        {/* ---Office Address-- */}
        <div>
            <h2 className="text-3xl font-bold mb-6">
              Our Contact Details
            </h2>

            <div className="space-y-6 text-gray-700">

              <div>
                <h3 className="font-semibold text-lg mb-1">Office Address</h3>
                <p>
                  Fatima Welfare Trust, Shastri Nagar<br />
                  Bhilwara, Rajasthan <br />
                  India
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-lg mb-1">Phone Numbers</h3>
                <p>
                  +91 9887011234 <br />
                  {/* +91 91234 56789 */}
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-lg mb-1">Email Address</h3>
                <p>
                  fatimawelfaretrustbhilwara@gmail.com <br />
                  {/* support@fatimatrust.org */}
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-lg mb-1">Office Hours</h3>
                <p>
                  Monday – Saturday <br />
                  9:00 AM – 5:00 PM
                </p>
              </div>

            </div>
          </div>

          {/* SECTION 1 — TRUST INFO */}
          <div className="group relative rounded-2xl overflow-hidden shadow-md  gap-4 bg-gray-100">
            <img
              src={leftimg}
              alt="Fatima Welfare Trust Information"
              className="w-full h-full object-cover transition duration-500 group-hover:scale-105"
            />

            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-500 flex items-center justify-center">
              <p className="text-amber-100 text-base font-semibold text-center px-6 font-stretch-semi-condensed">
                Rajasthan mein Muslim Taleem ke liye ek Inquilabi Kadam
              </p>
            </div>
          </div>

          {/* SECTION 2 — FORM DOWNLOAD */}
          <div className="bg-white rounded-2xl shadow-md p-6  gap-4 flex flex-col justify-between">

            {/* Image */}
            <img
              src={formPreview}
              alt="Membership Form"
              className="h-36 object-contain bg-gray-100 rounded-xl mb-3"
            />

            {/* Text */}
            <div>
              <h3 className="text-lg font-bold text-gray-800 mb-1">
                Membership Application Form
              </h3>

              <p className="text-gray-600 text-sm">
                Fatima Welfare Trust ka official membership form download karein
                aur office me submit karein.
              </p>
            </div>

            {/* Button */}
            <a
              href={membershipForm}
              download
              className="mt-4 inline-flex items-center justify-center
                         bg-gradient-to-r from-blue-500 to-blue-600
                         text-white px-5 py-2 rounded-full
                         hover:scale-95 transition  shadow text-sm w-full"
            >
              Download Form
            </a>

          </div>

        </div>
      </section>


      <section className="py-16 bg-gray-200">
        <div className="max-w-6xl mx-auto px-4">
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-lg border text-center">

            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Looking for Something Specific?
            </h2>

            <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
              Explore our institutions or learn more about our trust and mission.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">

              <Link
                to="/institutions"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full border border-gray-300 text-gray-800 bg-amber-300 hover:bg-amber-400 transition"
              >
                View Institutions
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                to="/about"
                className="inline-flex items-center justify-center px-6 py-3 rounded-full border border-gray-300 text-gray-800 hover:bg-gray-100 transition"
              >
                About the Trust
              </Link>

            </div>

          </div>
        </div>
      </section>

    </main>
  );
}