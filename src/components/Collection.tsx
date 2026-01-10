import { motion } from "framer-motion";
import { Leaf, Wind, Sparkles } from "lucide-react";
import combo2 from '../img/combo2.jpg'; 
import sliverbottle1 from '../img/sliverbottle1.jpg';
import glassbottle from '../img/glassbottle.jpg'; 

const products = [
    { 
        id: 1, 
        name: "Pro Bottles 1L", 
        price: "$45", 
        img: combo2, 
        size: "md:col-span-2 md:row-span-2" // Large Hero Product
    },
    { 
        id: 2, 
        name: "Glass Core 1L", 
        price: "$35", 
        img: glassbottle, 
        size: "md:col-span-1 md:row-span-1" 
    },
    { 
        id: 3, 
        name: "Active Flask", 
        price: "$28", 
        img: sliverbottle1, 
        size: "md:col-span-1 md:row-span-1" 
    },
];

export default function Collection() {
    return (
      <section id="collection" className="bg-white py-24 px-6 overflow-hidden">
        
        {/* PHILOSOPHY SECTION */}
        <div className="max-w-7xl mx-auto mb-32">
            <div className="grid md:grid-cols-3 border-t border-gray-100">
                {[
                    { icon: <Leaf className="w-5 h-5"/>, title: "Sustainable", desc: "Crafted to eliminate single-use plastic." },
                    { icon: <Wind className="w-5 h-5"/>, title: "Ergonomic", desc: "Curves designed for sensory clarity." },
                    { icon: <Sparkles className="w-5 h-5"/>, title: "Purity", desc: "Non-porous borosilicate glass." }
                ].map((feature, i) => (
                    <motion.div 
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.2 }}
                        className="p-10 border-b md:border-b-0 md:border-r border-gray-100 last:border-r-0 group"
                    >
                        <div className="text-[#1A1A1A] mb-6 group-hover:scale-110 transition-transform duration-500">
                            {feature.icon}
                        </div>
                        <h3 className="text-[10px] uppercase tracking-[0.4em] font-black text-[#1A1A1A] mb-4">
                            {feature.title}
                        </h3>
                        <p className="text-gray-500 text-sm font-light leading-relaxed">
                            {feature.desc}
                        </p>
                    </motion.div>
                ))}
            </div>
        </div>
        
        {/* GALLERY GRID */}
        <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
                <motion.h2 
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    className="text-6xl md:text-8xl font-black uppercase italic tracking-tighter text-[#1A1A1A]"
                >
                    The <br /> <span className="text-gray-300 italic">Drop.</span>
                </motion.h2>
                <p className="text-gray-400 text-[10px] uppercase tracking-[0.3em] font-bold pb-4">
                    Spring/Summer 2026 Collection
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px] md:auto-rows-[400px]">
                {products.map((product, i) => (
                    <motion.div 
                        key={product.id}
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: i * 0.1 }}
                        className={`group relative overflow-hidden bg-[#FAF9F6] ${product.size}`}
                    >
                        {/* Image Logic */}
                        <img 
                            src={product.img} 
                            alt={product.name}
                            className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-105"
                        />

                        {/* Hover Overlay */}
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                            <motion.div className="translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
                                <h3 className="text-white text-3xl font-black uppercase italic tracking-tighter mb-2">
                                    {product.name}
                                </h3>
                                <div className="flex justify-between items-center">
                                    <span className="text-white/70 text-sm font-light tracking-widest">{product.price}</span>
                                    <button className="bg-white text-[#1A1A1A] px-6 py-2 text-[9px] font-black uppercase tracking-widest hover:bg-gray-200 transition-colors">
                                        Add to Cart
                                    </button>
                                </div>
                            </motion.div>
                        </div>

                        {/* Top Right Label (Always Visible) */}
                        <div className="absolute top-6 right-6 z-20">
                           <span className="text-[9px] font-black uppercase tracking-widest text-[#1A1A1A] bg-white px-3 py-1 shadow-sm opacity-0 group-hover:opacity-100 transition-opacity">
                                Limited
                           </span>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
      </section>
    );
}
