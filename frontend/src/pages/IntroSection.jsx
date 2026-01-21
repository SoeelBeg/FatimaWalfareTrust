import img1 from "../assets/slide1.jpeg"
import img2 from "../assets/slide2.jpeg"
import img3 from "../assets/slide3.jpeg"
// import img4 from "../assets/slide4.jpeg"

import { motion, AnimatePresence } from "framer-motion"
import { useState, useEffect } from "react"

export default function IntroSection({ onClose }) {

    // 🔹 Images array
    const images = [img1, img2, img3, ]

    const [preview, setPreview] = useState(null)


    // 🔹 Current slide index
    const [current, setCurrent] = useState(0)

    // 🔁 Auto slide every 3 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrent(prev => (prev + 1) % images.length)
        }, 6000)

        return () => clearInterval(interval)
    }, [images.length])

    // ⬅️➡️ Manual controls
    const prevSlide = () => {
        setCurrent(prev => (prev - 1 + images.length) % images.length)
    }

    const nextSlide = () => {
        setCurrent(prev => (prev + 1) % images.length)
    }

    // 🎬 Framer Motion animation
    const slideVariants = {
        initial: {
            opacity: 0,
            scale: 1.05
        },
        animate: {
            opacity: 1,
            scale: 1
        },
        exit: {
            opacity: 0,
            scale: 0.95
        }
    }

    return (
        <div className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center">

            {/* WHITE POPUP BOX */}
            <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="relative bg-amber-50 w-[92%] h-[85vh] md:w-[70%] md:h-[90vh] overflow-y-auto rounded-2xl"
            >

                {/* ❌ CLOSE BUTTON */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 z-50 w-9 h-9 bg-black text-white rounded-full flex items-center justify-center hover:bg-red-600"
                >
                    ✕
                </button>

                {/* 🔥 IMAGE SLIDER */}
                <div className="relative w-full max-w-3xl mx-auto overflow-hidden rounded-2xl shadow-lg mt-10 mb-16">

                    <AnimatePresence mode="wait">
                        <motion.img
                            key={current}
                            src={images[current]}
                            alt="Fatima Welfare Trust"
                            variants={slideVariants}
                            initial="initial"
                            animate="animate"
                            exit="exit"
                            transition={{ duration: 0.7, ease: "easeInOut" }}
                            onClick={() => setPreview(images[current])}
                            className="w-full h-[320px] sm:h-[420px] md:h-[520px] object-contain bg-gray-200 cursor-zoom-in"
                        />
                    </AnimatePresence>



                    {/* LEFT ARROW */}
                    <button
                        onClick={prevSlide}
                        className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/60 text-white w-10 h-10 rounded-full hover:bg-black"
                    >
                        ‹
                    </button>

                    {/* RIGHT ARROW */}
                    <button
                        onClick={nextSlide}
                        className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/60 text-white w-10 h-10 rounded-full hover:bg-black"
                    >
                        ›
                    </button>

                    {/* DOT INDICATORS */}
                    <div className=" absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                        {images.map((_, i) => (
                            <div
                                key={i}
                                onClick={() => setCurrent(i)}
                                className={` w-3 h-3 rounded-full cursor-pointer transition ${current === i ? "bg-white scale-125" : "bg-white/50"
                                    }`}
                            />
                        ))}
                    </div>
                    {preview && (
                    <div
                        className="fixed inset-0 bg-black/90 z-[999] flex items-center justify-center p-4"
                        onClick={() => setPreview(null)}
                    >

                        {/* CLOSE BUTTON */}
                        <button
                            className="absolute top-5 right-5 text-white text-3xl"
                            onClick={() => setPreview(null)}
                        >
                            ✕
                        </button>

                        {/* FULL IMAGE */}
                        <motion.img
                            src={preview}
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 0.3 }}
                            className="max-h-[90vh] max-w-[95vw] rounded-xl shadow-xl"
                            onClick={(e) => e.stopPropagation()}
                        />
                    </div>
                )}

                </div>
                

                {/* 📝 CONTENT SECTION (your existing text/cards can stay below) */}
                <div className="px-6 pb-16 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
                        तालीम · अख़लाक़ · सशक्त नस्ल
                    </h2>
                    <p className="text-gray-600 mt-4 max-w-3xl mx-auto leading-relaxed">
                        फातिमा वेलफेयर ट्रस्ट का मक़सद सिर्फ इमारतें खड़ी करना नहीं,
                        बल्कि एक ऐसी मुकम्मल तालीमी बुनियाद क़ायम करना है जहाँ
                        इल्म के साथ अख़लाक़ और इंसानियत की तरबियत भी हो।
                    </p>
                </div>

            </motion.div>
        </div>
    )
}
