import schoolImg from "../assets/school-classroom.jpg";
import engineeringImg from "../assets/engineering-lab.jpg";
import healthImg from "../assets/health-sciences.jpg";
import bed from "../assets/b.ed.jpg"
import cartoon from "../assets/coching1.jpg"
import competitative from "../assets/womenCollege.jpeg"
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import {motion} from "framer-motion"

export default function Institutions() {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [hash]);
  
  const institutionsList = [
  {
    id: "school",
    title: "Fatima Convent School",
    description:
      "Providing quality primary and secondary education with a strong moral and ethical foundation.",
    points: [
      "Primary to Senior Secondary",
      "Experienced & caring teachers",
      "Focus on discipline and values",
    ],
    image: schoolImg,
    reverse: false,
  },
  {
    id: "engineering",
    title: "Fatima College of Engineering",
    description:
      "Modern technical education designed to prepare students for real-world engineering challenges.",
    points: [
      "Modern laboratories",
      "Industry exposure",
      "Placement assistance",
    ],
    image: engineeringImg,
    reverse: true,
  },
  {
    id: "health",
    title: "Fatima Health & Sciences Institute",
    description:
      "Training healthcare professionals with compassion, skill, and dedication to community service.",
    points: [
      "Nursing & Pharmacy programs",
      "Clinical training",
      "Hospital attachments",
    ],
    image: healthImg,
    reverse: false,
  },
  {
    id: "coaching",
    title: "Fatima Competitive Coaching",
    description:
      "Expert coaching for competitive exams to help students achieve their academic and professional goals.",
    points: [
      "IIT-JEE & NEET",
      "IAS / RAS Foundation",
      "Personal mentoring",
    ],
    image: cartoon,
    reverse: true,
  },
  {
    id: "teacherEducation",
    title: "Fatima Teacher Education Institute",
    description:
      "Training the educators of tomorrow through professional teaching programs.",
    points: [
      "D.El.Ed",
      "B.Ed",
      "M.Ed",
      "Teacher Training Workshops",
    ],
    image: bed,
    reverse: false,
  },
  {
    id: "FatimaWomensCollege",
    title: "Fatima Women's College of Arts & Sciences",
    description:
      "Empowering women through education in arts, sciences, and professional courses.",
    points: [
      "B.A. (Multiple Specializations)",
      "B.Sc. (Science Streams)",
      "B.Com & BBA",
      "Computer Applications",
    ],
    image: competitative,
    reverse: true,
  },
];

  return (
    <main className="w-full">
       {/* Hero */}
        <section className=" relative bg-gradient-to-br from-blue-600 via-grren-700 to-emerald-500 text-white py-20 md:py-10 ">
        <motion.div
        initial={{ opacity: 0, }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
          {/* Overlay pattern effect (simple gradient layer) */}
          <div className="absolute inset-0 bg-black/20"></div>

          <div className="relative max-w-7xl mx-auto px-6 pt-10">
            <div className="max-w-3xl">

              <p className=" text-yellow-400 font-semibold tracking-widest uppercase mb-1">
                  Our Institutions
              </p>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                  A Network of  <br />
                <span className="text-yellow-400">Academic Excellence</span>
              </h1>

              <p className="text-lg md:text-xl text-white/90 leading-relaxed">
                From foundational schooling to professional degrees, our institutions
              provide comprehensive education that combines academic rigor with
              ethical values and practical skills.
              </p>

            </div>
          </div>
          </motion.div>
        </section>
     

      {/* PAGE HERO */}
      <section className="bg-primary text-amber-400  px-8 pt-10">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-4xl font-bold mb-4">
            Our Institutions
          </h1>
          <p className="text-gray-500 max-w-2xl mx-auto">
            A network of educational excellence dedicated to learning,
            character building, and community service.
          </p>
        </div>
      </section>

      {/* CONTENT */}
      <section className="max-w-7xl mx-auto px-6 py-20 space-y-24">
  {institutionsList.map((item, index) => (
    <motion.div
      key={item.id}
      id={item.id}
      initial={{ opacity: 0,  }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className={`grid lg:grid-cols-2 gap-12 items-center ${
        item.reverse ? "lg:flex-row-reverse" : ""
      }`}
    >
      {/* Image */}
      <motion.img
        src={item.image}
        alt={item.title}
        initial={{ opacity: 0,  }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className={`rounded-2xl shadow-lg w-full ${
          item.reverse ? "order-1 lg:order-2" : ""
        }`}
      />

      {/* Text */}
      <motion.div
        initial={{ opacity: 0,  }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl font-semibold mb-4">
          {item.title}
        </h2>

        <p className="text-gray-600 mb-6">
          {item.description}
        </p>

        <ul className="space-y-2 text-gray-600 list-disc pl-5">
          {item.points.map((point, i) => (
            <li key={i}>{point}</li>
          ))}
        </ul>
      </motion.div>
    </motion.div>
  ))}
</section>

    </main>
  );
}
