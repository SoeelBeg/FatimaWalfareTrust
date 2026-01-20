import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, X } from "lucide-react";
import { motion } from "framer-motion";
import API_BASE_URL from "../utils/api";

const categories = ["All", "Campus", "School", "Engineering", "Health"];

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [images, setImages] = useState([]);
  const [preview, setPreview] = useState(null);

  const loadImages = () => {
    fetch(`${API_BASE_URL}/api/gallery`)

      .then(res => res.json())
      .then(setImages);
  };

  useEffect(() => {
    loadImages();
      console.log("API BASE URL:", API_BASE_URL);
  }, []);

  const filteredImages = activeCategory === "All"
    ? images
    : images.filter(img => img.category === activeCategory);

  return (
    <>
      {/* HERO */}
      <section className="relative bg-gradient-to-br from-blue-600 via-green-700 to-emerald-500 text-white py-20 md:py-28 text-center">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="relative max-w-7xl mx-auto px-6 pt-10">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Our Gallery <span className="text-yellow-400">Welfare Trust</span>
            </h1>
            <p className="text-lg md:text-xl text-white/90 leading-relaxed">
              Explore moments from our campuses, classrooms and learning environments.
            </p>
          </div>
        </motion.div>
      </section>

      {/* FILTER */}
      <section className="py-10 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 flex flex-wrap gap-3 justify-center">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition
                ${activeCategory === cat ? "bg-amber-300 text-white" : "bg-white border text-gray-700 hover:bg-gray-100"}`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* GALLERY GRID */}
      <section className="py-14">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredImages
            .filter(img => img?.src)
            .map((img, index) => (
              <div
                key={img.name || index}
                onClick={() => setPreview(img)}
                className="relative group cursor-pointer rounded-xl overflow-hidden shadow-md"
              >
                <img src={`${API_BASE_URL}${img.src}`} alt={img.title} className="w-full h-60 object-cover group-hover:scale-110 transition duration-500" />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition flex items-end p-4">
                  <div>
                    <p className="text-white font-semibold">{img.title}</p>
                    <p className="text-white/70 text-sm">{img.category}</p>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </section>

      {/* LIGHTBOX */}
      {preview && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4" onClick={() => setPreview(null)}>
          <button className="absolute top-5 right-5 text-white" onClick={() => setPreview(null)}>
            <X size={32} />
          </button>
          <img src={`${API_BASE_URL}${preview.src}`} alt={preview.title} className="max-h-[90vh] rounded-xl shadow-xl" onClick={e => e.stopPropagation()} />
        </div>
      )}

      {/* CTA */}
      <section className="py-16 bg-gray-100 text-center">
        <h2 className="text-3xl font-bold mb-4">Want to Visit Our Campus?</h2>
        <p className="text-gray-600 max-w-xl mx-auto mb-8">Contact us to schedule a visit and explore our facilities.</p>
        <Link to="/contact" className="inline-flex items-center gap-2 bg-amber-400 text-white px-8 py-3 rounded-full hover:bg-amber-300 transition">
          Contact Us <ArrowRight size={18} />
        </Link>
      </section>
    </>
  );
}

