import { motion } from "framer-motion";
import slicecombo from '../img/slicecombo.jpg';

export default function ZenSipNewsletter() {
    return (
        <section className="bg-[#FAF9F6] py-24 px-6 overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <motion.div 
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="relative grid md:grid-cols-2 bg-[#1A1A1A] rounded-[2rem] overflow-hidden shadow-[0_40px_100px_-20px_rgba(0,0,0,0.3)]"
                >
                    {/* Left Side: Visual Impact */}
                    <div className="relative h-[400px] md:h-auto overflow-hidden group">
                        <img 
                            src={slicecombo}
                            alt="ZenSip Narrative" 
                            className="absolute inset-0 w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-1000 ease-out"
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-[#1A1A1A] via-transparent to-transparent md:block hidden" />
                        
                        {/* Floating Badge */}
                        <div className="absolute top-10 left-10 z-10">
                            <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-white border border-white/20 px-4 py-2 backdrop-blur-md">
                                Membership
                            </span>
                        </div>
                    </div>

                    {/* Right Side: Copy & Form */}
                    <div className="relative flex items-center p-10 md:p-20 bg-[#1A1A1A]">
                        <div className="w-full">
                            <motion.h2 
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.2 }}
                                className="text-5xl md:text-7xl font-black text-white uppercase italic tracking-tighter leading-none mb-6"
                            >
                                Join the <br /> <span className="text-white/50">Flow.</span>
                            </motion.h2>
                            
                            <p className="text-white text-lg mb-10 font-light leading-relaxed max-w-sm">
                                Receive mindful hydration tips and early access to our 2026 limited collections. 
                                <span className="text-white block mt-2 font-bold">— 10% off your first order.</span>
                            </p>

                            <form className="relative flex flex-col sm:flex-row gap-4 group">
                                <input 
                                    type="email" 
                                    placeholder="YOUR@EMAIL.COM"
                                    className="flex-grow bg-transparent border-b-2 border-white/30 py-4 text-white text-xs tracking-widest outline-none focus:border-white transition-all duration-500 uppercase placeholder:text-white/40"
                                />
                                <button 
                                    type="submit" 
                                    className="bg-white text-[#1A1A1A] px-10 py-4 font-black uppercase text-[10px] tracking-[0.3em] hover:bg-gray-200 transition-all active:scale-95"
                                >
                                    Subscribe
                                </button>
                            </form>

                            <motion.p 
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ delay: 0.5 }}
                                className="mt-8 text-[9px] text-white uppercase tracking-[0.5em] font-bold opacity-60"
                            >
                                Respecting your inbox & our planet.
                            </motion.p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};
