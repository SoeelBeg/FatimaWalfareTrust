import { Link } from "react-router-dom";
import { ArrowRight, Target, Eye, BookOpen, Heart, Users, Lightbulb, Scale } from "lucide-react";
import { motion } from "framer-motion"
import founderPortrait from "../assets/logo1.png";
//     import img1 from "../assets/dev1.png"
// import img2 from "../assets/about.png"

const coreValues = [
  {
    title: "Quality Education",
    description: "Delivering strong academic foundations through modern teaching and dedicated faculty.",
    icon: BookOpen
  },
  {
    title: "Ethics & Values",
    description: "Instilling moral values, discipline, and integrity alongside academic learning.",
    icon: Scale
  },
  {
    title: "Inclusivity",
    description: "Ensuring education remains accessible to students from all backgrounds.",
    icon: Users
  },
  {
    title: "Community Impact",
    description: "Working towards social upliftment through education and skill development.",
    icon: Heart
  },
  {
    title: "Innovation",
    description: "Adopting modern methods, technology, and practical learning approaches.",
    icon: Lightbulb
  },
  {
    title: "Future Readiness",
    description: "Preparing students for higher education, careers, and responsible citizenship.",
    icon: Target
  }

];

export default function About() {
  return (
    <>
      {/* Hero */}
      <section className=" relative bg-gradient-to-br from-blue-600 via-green-700 to-emerald-500 text-white py-20 md:py-12 ">

        {/* Overlay pattern effect (simple gradient layer) */}
        <div className="absolute inset-0 bg-black/20 "></div>

        <div className="relative max-w-7xl mx-auto px-6 pt-10">
         
            <div className="max-w-3xl">
             <motion.div
            initial={{ opacity: 0, }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >

              <p className="text-yellow-400 font-semibold tracking-widest uppercase mb-1">
                About Fatima Welfare Trust
              </p>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                Building Futures, <br />
                <span className="text-yellow-400">Transforming Lives</span>
              </h1>

              <p className="text-lg md:text-xl text-white/90 leading-relaxed">
                For over two decades, Fatima Welfare Trust has been dedicated to providing quality education and community upliftment through a network of institutions.
              </p>
            </motion.div>
            </div>
        
        </div>

      </section>


      {/* Vision and Mission */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="uppercase text-amber-400 font-semibold tracking-widest mb-2">
              Our Guiding Principles
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
              Vision & Mission of Fatima Welfare Trust
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto mt-4">
              Inspired by the teachings of Islam, we aim to provide education and guidance that builds knowledge, character, and service to humanity.
            </p>
          </div>

          <div className=" grid md:grid-cols-2 gap-8 lg:gap-12">

            {/* VISION */}
            <motion.div

              initial={{ opacity: 0,  }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="text-justify bg-white h-full rounded-2xl p-8 lg:p-10 shadow-md border border-gray-200">
                <div className="w-14 h-14 rounded-xl bg-green-100 text-green-700 flex items-center justify-center mb-6">
                  <Eye className="w-7 h-7" />
                </div>

                <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
                  Our Vision
                </h2>

                <p className="text-gray-600 leading-relaxed text-base md:text-lg mb-4">
                  To be a beacon of Islamic education and ethical guidance, nurturing responsible individuals who contribute positively to society. We aim to empower communities through knowledge and compassion.
                </p>

                <blockquote className="text-gray-700 italic border-l-4 border-amber-400 pl-4">
                  "And say, ‘My Lord, increase me in knowledge.’" <br />
                  <span className="text-sm text-gray-500">(Qur’an 20:114)</span>
                </blockquote>
              </div>
            </motion.div>

            {/* MISSION */}
            <motion.div
              initial={{ opacity: 0,  }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              whileHover={{ y: -8 }}
            >
              <div className="text-justify bg-white rounded-2xl h-full p-8 lg:p-10 shadow-md border border-gray-200">
                <div className="w-14 h-14 rounded-xl bg-yellow-100 text-yellow-700 flex items-center justify-center mb-6">
                  <Target className="w-7 h-7" />
                </div>

                <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
                  Our Mission
                </h2>

                <p className="text-gray-600 leading-relaxed text-base md:text-lg mb-4">
                  To provide inclusive, high-quality education rooted in Islamic values. We strive to develop students’ academic skills, moral integrity, and sense of social responsibility, guiding them to serve humanity with sincerity and compassion.
                </p>

                <blockquote className="text-gray-700 italic border-l-4 border-amber-400 pl-4">
                  "The believers are those who, when given authority, they uphold justice." <br />
                  <span className="text-sm text-gray-500">(Qur’an 4:58)</span>
                </blockquote>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About + Image */}
      <section className="text-justify max-w-7xl mx-auto px-4 py-20 bg-gray-50">
        <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 ">
          <div>

            <motion.p
              initial={{ opacity: 0,  }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="text-amber-400 font-body font-semibold tracking-widest uppercase mb-3"
            >
              Our Foundation
            </motion.p>


            <motion.h2
              initial={{ opacity: 0,  }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
              className="text-3xl text-gray-700 md:text-4xl font-bold mb-6">
              Values That Guide Our Journey

            </motion.h2>

            <p className="mb-4 text-gray-700 leading-relaxed">
              Fatima Welfare Trust is taking its first steps toward building a strong
              educational future. Join us as we launch schools, colleges, and learning

            </p>
            <p className="mb-4 text-gray-700 leading-relaxed"> programs designed to empower the next generation.
              As a newly established trust, our values define who we are and how we grow.
              They shape our institutions, our teaching approach, and our commitment to
              society.
            </p>
            <p className="mb-4 text-gray-700 leading-relaxed">
              As we take our first steps, we are launching a range of educational initiatives
              including schools, colleges, professional courses, and skill-based programs.
              Our focus is on building strong academic foundations while nurturing values,
              discipline, and social responsibility.
            </p>
          </div>
          <div className="relative overflow-hidden max-w-md mx-auto rounded-2xl     shadow-lg">
            <motion.img
              src={founderPortrait}
              alt="Trust Leadership"
              className="w-full bg-gray-50 rounded-2xl shadow-xl relative z-0"
              initial={{ scale: 1.50 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 5 }}
            />
          </div>
        </div>
      </section>

      {/* Urdu-Style Hindi Text + Images */}
      {/* <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-6">

          {/* Section Heading */}
          {/* <motion.div
            initial={{ opacity: 0,  }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-14"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
              तालीम · अख़लाक़ · सशक्त नस्ल
            </h2>
            <p className="text-gray-600 mt-4 max-w-3xl mx-auto leading-relaxed">
              फातिमा वेलफेयर ट्रस्ट का मक़सद सिर्फ इमारतें खड़ी करना या
              डिग्रियाँ देना नहीं है, बल्कि एक ऐसी मुकम्मल तालीमी बुनियाद
              क़ायम करना है जहाँ इल्म के साथ अख़लाक़, किरदार और इंसानियत
              की तरबियत भी की जाए।
            </p>
          </motion.div>  */}

          {/* Cards */}
          {/* <div className="grid md:grid-cols-2 gap-10"> */}

            {/* CARD 1 */}
            {/* <div
              className="animate-fade bg-white rounded-2xl overflow-hidden shadow-lg group"
            >
              <div className="overflow-hidden">
                <img
                  src={img1}
                  alt="Fatima Welfare Trust Education"
                  className="w-full h-180 object-cover transition duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-green-700 mb-4">
                  मुस्लिम तालीम के लिए एक इनक़िलाबी क़दम
                </h3>

                <p className="text-gray-600 leading-relaxed text-[15px]">
                  तालीम का मक़सद सिर्फ एक बैंकिंग निज़ाम नहीं है,
                  जहाँ उस्ताद वो लोग हों जिनके पास मालूमात हो
                  और वो अंधी तरह से तलबा के ख़ाली ज़हनों में डाल दी जाए।
                  <br /><br />
                  असल तालीम दरअस्ल तन्क़ीदी शऊर पैदा करती है —
                  यानी इंसान को असली दुनिया को समझने,
                  सवाल उठाने और हक़ की तलाश करने की सलाहियत देती है।
                  <br /><br />
                  फातिमा वेलफेयर ट्रस्ट इसी सोच के साथ ऐसी तालीम
                  को बढ़ावा देता है जो तलबा को सिर्फ पढ़ा-लिखा नहीं,
                  बल्कि समझदार, ज़िम्मेदार और बा-अख़लाक़ इंसान बनाए।
                </p>
              </div>
            </div> */}

            {/* CARD 2 */}
            {/* <div
              className="animate-fade bg-white rounded-2xl overflow-hidden shadow-lg group"
            >
              <div className="overflow-hidden">
                <img
                  src={img2}
                  alt="Fatima Group of Institutions"
                  className="w-full h-180 object-cover transition duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-green-700 mb-4">
                  एक मक़सद — कई तालीमी इदारे
                </h3>

                <p className="text-gray-600 leading-relaxed text-[15px]">
                  मुस्लिम बस्तियों को एक नया मुस्तक़बिल देने के लिए
                  “फातिमा ग्रुप ऑफ इंस्टीट्यूशन्स” के तहत
                  एक मज़बूत तालीमी हब क़ायम करने का इरादा बनाया गया है।
                  <br /><br />
                  इसमें स्कूल, कॉलेज, यूनिवर्सिटी,
                  मेडिकल, नर्सिंग, इंजीनियरिंग,
                  टीचर एजुकेशन और मुक़ाबलाती इम्तिहानों की
                  कोचिंग तक शामिल है।
                  <br /><br />
                  हमारा मक़सद एक ऐसी नस्ल तैयार करना है
                  जो इल्म, हुनर और अख़लाक़ से लैस हो,
                  जो समाज में रहनुमाई कर सके
                  और मुल्क-ओ-मिल्लत का नाम रोशन करे।
                </p>
              </div>
            </div>

          </div>
        </div>
      </section> */}


      {/* CORE VALUES */}
      <section className="py-20 bg-gradient-to-br from-yellow-400 via-yellow-600 to-yellow-500 text-white">
        <div className="container mx-auto px-6 text-center mb-12">
          <p className="uppercase font-semibold tracking-widest mb-2">Our Core Values</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What We Stand For</h2>
          <p className="max-w-2xl mx-auto mb-8">
            These principles guide everything we do—from curriculum design to community engagement.
          </p>
        </div>

        <div className=" max-w-7xl  container mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {coreValues.map((v, i) => (
            <div
              key={i}
              className="group bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 text-left 
                         transform transition-transform hover:-translate-y-2 hover:scale-105 duration-300 cursor-pointer"
            >
              <div className="group-hover:text-lime-500 w-12 h-12 rounded-xl bg-gradient-to-tr from-yellow-300 to-yellow-500 text-white flex items-center justify-center mb-5 shadow-lg">
                <v.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{v.title}</h3>
              <p className="text-white/90">{v.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gray-100 text-center">
        <h2 className="text-2xl md:text-4xl font-bold mb-4">Join Our Mission</h2>
        <p className="text-gray-700 mb-8 max-w-xl mx-auto">
          Be part of the change. Explore our institutions or support our mission to make education accessible to all.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link
            to="/institutions"
            className="px-5 py-3 mx-4 bg-gradient-to-r from-yellow-400 to-yellow-500 text-white rounded-full 
                       hover:from-yellow-500 hover:to-yellow-600 hover:scale-105 transition-all duration-300 shadow-lg inline-flex items-center justify-center "
          >
            Explore Institutions
            <ArrowRight className="inline-block w-5 h-5 ml-1" />
          </Link>

          <Link
            to="/contact"
            className="mx-4 px-6 py-3 border border-yellow-400 text-yellow-400 rounded-full 
                       hover:bg-yellow-50 hover:text-yellow-600 hover:scale-105 transition-all duration-300"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </>
  );
}
