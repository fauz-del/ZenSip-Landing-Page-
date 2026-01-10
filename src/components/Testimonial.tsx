import { motion } from "framer-motion";

const testimonials = [
    {
        quote: "ZenSip is a game-changer. The water tastes so pure, and the mindful design truly helps me stay grounded throughout my busy workday.",
        name: "Sarah L.",
        location: "New York, NY",
    },
    {
        quote: "I was skeptical about the glass at first, but it’s incredibly durable and elegant. I take my ZenSip everywhere. The quality is unmatched.",
        name: "Marcus T.",
        location: "Los Angeles, CA",
    },
    {
        quote: "The Infuser Series is perfect for my herbal teas. It's easy to clean, looks amazing, and I feel good supporting a sustainable company.",
        name: "Chloe K.",
        location: "Austin, TX",
    },
];

const TestimonialSection = () => {
    return (
        <section id="testimonial" className="py-32 bg-white px-6 overflow-hidden">
            <div className="max-w-7xl mx-auto">
                
                {/* Section Header */}
                <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="text-[10px] uppercase tracking-[0.5em] text-gray-400 font-black block mb-4">Community</span>
                        <h2 className="text-6xl md:text-8xl font-black uppercase italic tracking-tighter text-[#1A1A1A] leading-none">
                            Shared <br /> <span className="text-gray-300">Clarity.</span>
                        </h2>
                    </motion.div>
                    
                    <motion.p 
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="text-gray-400 max-w-[240px] text-[11px] uppercase tracking-[0.2em] font-bold leading-relaxed border-l border-gray-100 pl-6"
                    >
                        Real experiences from those who have found their flow with ZenSip.
                    </motion.p>
                </div>

                {/* Editorial Grid */}
                <div className="grid md:grid-cols-3 gap-px bg-gray-100 border border-gray-100">
                    {testimonials.map((testimonial, index) => (
                        <motion.div 
                            key={index} 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.2 }}
                            whileHover={{ backgroundColor: "#FAF9F6" }}
                            className="bg-white p-12 transition-colors duration-500 group relative"
                        >
                            {/* Minimalist Dot Rating */}
                            <div className="flex gap-1.5 mb-10">
                                {[...Array(5)].map((_, i) => (
                                    <div key={i} className="w-1 h-1 rounded-full bg-[#1A1A1A]" />
                                ))}
                            </div>

                            <p className="text-xl font-light italic text-[#1A1A1A] mb-16 leading-relaxed">
                                "{testimonial.quote}"
                            </p>

                            <div className="flex items-center gap-4 pt-8 border-t border-gray-50">
                                <div className="w-8 h-8 bg-[#1A1A1A] rounded-full flex items-center justify-center text-white text-[10px] font-black group-hover:scale-110 transition-transform">
                                    {testimonial.name.charAt(0)}
                                </div>
                                <div>
                                    <p className="text-xs font-black uppercase tracking-widest text-[#1A1A1A]">{testimonial.name}</p>
                                    <p className="text-[9px] text-gray-400 uppercase tracking-widest mt-1">{testimonial.location}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Call to Action */}
                <motion.div 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="text-center mt-20"
                >
                    <button className="group relative px-12 py-5 overflow-hidden border border-[#1A1A1A] transition-all">
                        <span className="relative z-10 text-[10px] font-black uppercase tracking-[0.4em] group-hover:text-white transition-colors duration-500">
                            View All 1,200+ Reviews
                        </span>
                        <div className="absolute inset-0 bg-[#1A1A1A] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
                    </button>
                </motion.div>

            </div>
        </section>
    );
};

export default TestimonialSection;
