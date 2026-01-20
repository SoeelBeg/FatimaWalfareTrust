import img1 from "../assets/dev1.jpeg"
import img2 from "../assets/about.jpeg"
import { motion } from "framer-motion"

export default function IntroSection({ onClose }) {
    return (
        <div className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center">

            {/* White Box */}
            <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.3 }}
                className=" relative bg-white w-[92%] h-[85vh] md:w-[90%] md:h-[90vh] overflow-y-auto rounded-2xl"
            >
                {/* ❌ CLOSE BUTTON */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 z-50 w-9 h-9 bg-black text-white rounded-full flex items-center justify-center hover:bg-red-600"
                >
                    ✕
                </button>

                {/* Urdu-Style Hindi Text + Images */}
                <section className="py-20 bg-gradient-to-b from-white to-gray-50">
                    <div className="max-w-7xl mx-auto px-6">

                        {/* Section Heading */}
                        <motion.div
                            initial={{ y: 40, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
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
                        </motion.div>

                        {/* Cards */}
                        <div className="grid md:grid-cols-2 gap-10">

                            {/* CARD 1 */}
                            <div
                                className=" max-w-xl mx-auto animate-fade bg-white rounded-2xl overflow-hidden shadow-lg group"
                            >
                                <div className="overflow-hidden">
                                    <img
                                        src={img1}
                                        alt="Fatima Welfare Trust Education"
                                        className="w-full h-56 md:h-64 lg:h-72 object-cover transition duration-500 group-hover:scale-110"
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
                            </div>

                            {/* CARD 2 */}
                            <div
                                className=" max-w-xl mx-auto animate-fade bg-white rounded-2xl overflow-hidden shadow-lg group"
                            >
                                <div className="overflow-hidden">
                                    <img
                                        src={img2}
                                        alt="Fatima Group of Institutions"
                                        className="w-full h-56 md:h-64 lg:h-72 object-cover transition duration-500 group-hover:scale-110"
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
                </section>

            </motion.div>
        </div>
    )
}