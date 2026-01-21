import { Link } from "react-router-dom"
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Youtube } from "lucide-react";
import FooterLogo from "../assets/logo1.png"
/* ---------- DATA ARRAYS ---------- */

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Institutions", href: "/Institutions" },
  { name: "Gallery", href: "/Gallery" },
  { name: "Contact", href: "/Contact" },
  { name: "Donate", href: "/Donate" }
];

const institutions = [
  { name: "Fatima Convert School", href: "/Institutions#school" },
  { name: "Engineering College", href: "/institutions#engineering" },
  { name: "Health Sciences", href: "/institutions#health" },
  { name: "Competitive Coaching", href: "/institutions#coaching" },
  { name: "Teacher Education", href: "/institutions#teacherEducation" },
  { name: "Women's College", href: "/institutions#FatimaWomensCollege" },

]

/* ---------- FOOTER COMPONENT ---------- */

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-200">
      {/* TOP FOOTER */}
      <div className="max-w-7xl mx-auto px-6 py-16">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* BRAND SECTION */}
          <div>
            <Link to="/" className="flex items-center gap-3 mb-4">
              <div className="w-15 h-15 rounded-full flex items-center justify-center text-white font-bold text-xl">
                <img
                  src={FooterLogo}
                  alt="Fatima Welfare Trust Logo"
                  className="h-15 w-auto object-contain bg-amber-50"
                />
              </div>
              <div>
                <h3 className="font-semibold text-lg">
                  Fatima Welfare Trust
                </h3>
                <p className="text-sm text-slate-400">
                  Education • Empowerment
                </p>
              </div>
            </Link>

            <p className="text-sm text-slate-400 leading-relaxed">
              Fatima Welfare Trust is dedicated to empowering communities
              through quality education, healthcare, and social upliftment.
            </p>

            {/* SOCIAL ICONS */}

            {/* <div className="flex gap-3 mt-5">
              <SocialIcon
                href="https://facebook.com/yourpage"
                icon={<Facebook className="w-5 h-5" />}
              />

              <SocialIcon
                href="https://twitter.com/yourpage"
                icon={<Twitter className="w-5 h-5" />}
              />

              <SocialIcon
                href="https://instagram.com/yourpage"
                icon={<Instagram className="w-5 h-5" />}
              />

              <SocialIcon
                href="https://youtube.com"
                icon={<Youtube className="w-5 h-5" />}
              />
            </div> */}


          </div>

          {/* QUICK LINKS */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    className="text-slate-400 hover:text-amber-400 transition"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* INSTITUTIONS */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Institutions</h4>
            <ul className="space-y-2">
              {institutions.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    className="text-slate-400 hover:text-amber-400 transition"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* CONTACT INFO */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>

            <div className="space-y-4 text-sm text-slate-400">
              <div className="flex gap-3">
                <MapPin className="w-5 h-5 text-orange-400" />
                <span>Bhilwara, India</span>
              </div>

              <div className="flex gap-3">
                <Phone className="w-5 h-5 text-orange-400" />
                <span>+91 9887875797</span>
              </div>

              <div className="flex gap-3">
                <Mail className="w-5 h-5 text-orange-400" />
                <span> fatimawelfaretrustbhilwara@gmail.com</span>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="border-t border-slate-700 py-4 text-center text-sm text-slate-400">
        © {new Date().getFullYear()} Fatima Welfare Trust. All rights reserved.
      </div>

    </footer>
  );
}

/* ---------- REUSABLE SOCIAL ICON ---------- */

function SocialIcon({ href, icon }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="
        w-10 h-10 
        rounded-full 
        bg-slate-800 
        flex items-center justify-center 
        transition 
        hover:bg-orange-400
      "
    >
      <span className="text-slate-300 hover:text-white transition">
        {icon}
      </span>
    </a>
  );
}
