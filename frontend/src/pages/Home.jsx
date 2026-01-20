import { Link } from "react-router-dom";
import { motion } from "framer-motion"
import { useState, useEffect } from "react";
import {
  BookOpen,
  Building2,
  Stethoscope,
  Award,
  GraduationCap,
  Users,
  ArrowRight
} from "lucide-react";
import IntroSection from "../pages/IntroSection"
import heroImg from "../assets/hero-campus.jpg";
import about from "../assets/founder-portrait.jpg"

const institutions = [
  {
    title: "Schools",
    description:
      "Providing holistic primary and secondary education that blends academic excellence with moral values, character building, and compassion — nurturing responsible citizens for the future.",
    icon: BookOpen,
    link: "/Institutions#school",
    ayah: "“Read in the name of your Lord who created.” (Qur’an 96:1)",
  },
  {
    title: "Engineering College",
    description:
      "Modern engineering education focused on innovation, ethics, and real-world problem solving — preparing students to serve society through knowledge and technology.",
    icon: Building2,
    link: "/Institutions#engineering",
    ayah: "“Allah will raise those who have believed and those who were given knowledge, by degrees.” (Qur’an 58:11)",
  },
  {
    title: "Health Sciences",
    description:
      "Training compassionate healthcare professionals in nursing, pharmacy, and allied health sciences — dedicated to saving lives and serving humanity with integrity.",
    icon: Stethoscope,
    link: "/Institutions#health",
    ayah: "“And whoever saves one life, it is as if he has saved all of mankind.” (Qur’an 5:32)",
  },
  {
    title: "Competitive Coaching",
    description:
      "Structured coaching for IIT-JEE, NEET, IAS & RAS with expert mentors, discipline, and ethical guidance — empowering students to achieve excellence with purpose.",
    icon: Award,
    link: "/Institutions#coaching",
    ayah: "“And say, ‘My Lord, increase me in knowledge.’” (Qur’an 20:114)",
  },
  {
    title: "Teacher Education",
    description:
      "Professional D.El.Ed & B.Ed programs aimed at developing skilled, ethical educators who shape minds, inspire values, and strengthen the foundation of society.",
    icon: GraduationCap,
    link: "/Institutions#teacherEducation",
    ayah: "“The best among you are those who teach goodness to others.” (Hadith-inspired value)",
  },
  {
    title: "Women’s College",
    description:
      "Empowering women through higher education, leadership training, and self-reliance — fostering confident contributors to family, community, and nation.",
    icon: Users,
    link: "/Institutions#FatimaWomensCollege",
    ayah: "“Indeed, Allah does not change the condition of a people until they change what is in themselves.” (Qur’an 13:11)",
  },
];

export default function Home() {

  const scrollToNext = () => {
    const nextSection = document.getElementById("next-section");

    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    } else {
      console.log("Next section not found");
    }
  };

  // ---Popup about Fatima Trust----
 const [showIntro, setShowIntro] = useState(false)

  useEffect(() => {
    const seen = sessionStorage.getItem("introSeen")

    if (!seen) {
      setShowIntro(true)
    }
  }, [])

  const handleCloseIntro = () => {
    sessionStorage.setItem("introSeen", "true")
    setShowIntro(false)
  }

  return (
    <>
     {showIntro && (
      <IntroSection onClose={handleCloseIntro} />
    )}
    
      {/* HERO SECTION */}
      <section
        className="relative bg-gradient-to-br text-white py-20 md:py-28"
        style={{
          backgroundImage: `url(${heroImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/55" />

        {/* Content */}
        <motion.div
          className="relative z-10 max-w-7xl mx-auto px-4 py-20 text-white"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >

          {/* Trust name */}
          <motion.p
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-amber-400 font-semibold uppercase tracking-widest mb-4"
          >
            Fatima Welfare Trust
          </motion.p>

          {/* Heading lines */}
          <motion.h1
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-4xl md:text-5xl font-bold leading-tight mb-6"
          >
            Education,<br />
          </motion.h1>

          <motion.h1
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-4xl md:text-5xl font-bold leading-tight mb-6"
          >
            Empowerment,<br />
            <span className="text-amber-500">Excellence</span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.45 }}
            className="text-lg text-gray-200 max-w-2xl mb-8 capitalize font-sans"
          >
            Building futures through quality education, ethical values,
            and community upliftment.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex flex-wrap gap-4"
          >
            <motion.div >
              <Link
                to="/institutions"
                className="px-6 py-3 bg-amber-500 text-white rounded-full hover:bg-amber-400 transition"
              >
                Explore Institutions
              </Link>
            </motion.div>

            <motion.div >
              <Link
                to="/about"
                className="px-6 py-3 border border-amber-100 text-amber-150 rounded-full hover:bg-white/10 transition"
              >
                Our Story
              </Link>
            </motion.div>
          </motion.div>

        </motion.div>

        {/* Scroll Down Arrow */}
        <button
          onClick={scrollToNext}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white animate-bounce cursor-pointer"
          aria-label="Scroll Down"
        >
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </button>

      </section>

      

      {/* INSTITUTIONS SECTION */}
      <section id="next-section" className="bg-gray-50 py-20 ">
        <div className="max-w-7xl mx-auto px-4">

          <div className="text-center mb-14">
            <p className="text-amber-400 font-semibold uppercase tracking-widest mb-2">
              Our Institutions
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              A Network of Educational Excellence
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              From schools to professional education, we nurture knowledge,
              character, and responsibility.
            </p>
          </div>

          <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 ">
            {institutions.map((item) => (
              <Link
                key={item.title}
                to={item.link}
                className=" border rounded-2xl p-6 hover:shadow-lg transition group"
              >
                <div className="w-14 h-14 mb-4 rounded-xl bg-green-100 flex items-center justify-center text-gray-800  group-hover:scale-110 transition">
                  <item.icon size={28} />
                </div>

                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {item.title}
                </h3>

                <p className="text-gray-600 mb-4 ">
                  {item.description}
                </p>

                <span className="inline-flex items-center text-gray-700 font-semibold group-hover:text-amber-400" >
                  Learn More
                  <ArrowRight className="ml-1 w-4 h-4 " />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Text+Image of About  */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

            {/* TEXT CONTENT */}
            <div className="order-2 lg:order-1">

              <p className=" border-b-2 inline-block text-amber-400  tracking-widest uppercase mb-3">
                From the Founder
              </p>

              <h2 className=" text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                Education with Faith & Humanity
              </h2>

              {/* Quran Ayat */}
              <blockquote className="border-l-4 border-emerald-700 pl-6 mb-6">
                <p className="text-xl text-emerald-800 italic mb-2">
                  “The example of those who spend their wealth in the way of Allah
                  is like a seed that grows seven ears, and in every ear there are
                  a hundred grains.”
                </p>
                <span className="text-sm text-gray-500">
                  — Qur’an 2:261
                </span>
              </blockquote>

              <p className="text-gray-700 leading-relaxed mb-6">
                Fatima Welfare Trust was founded with a deep belief that true
                education goes beyond classrooms. It is about building strong
                character, nurturing compassion, and empowering individuals to
                serve humanity with sincerity and purpose.
              </p>

              <p className="text-gray-700 leading-relaxed mb-8">
                Through education, welfare initiatives, and community support, we
                strive to create a lasting impact where knowledge, ethics, and
                generosity walk hand in hand for the betterment of society.
              </p>

              <Link
                to="/about"
                className="inline-flex items-center gap-2 px-6 py-3 border border-blue-800 text-blue-900 rounded-full hover:bg-blue-900 hover:text-emerald-50  transition"
              >
                Read Our Full Story
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* IMAGE */}
            <div className="order-1 lg:order-2">
              <div className="relative flex justify-center max-w-md mx-auto overflow-hidden rounded-2xl shadow-lg">
                <div className="absolute -inset-4 bg-green-100 rounded-3xl -z-10" />

                <img
                  src={about}
                  alt="Founder of Fatima Welfare Trust"
                  className="w-full max-w-md rounded-2xl shadow-lg object-cover transition-transform duration-500 ease-in-out hover:scale-110"
                />
              </div>
            </div>

          </div>
        </div>
      </section>


    </>
  );
}
