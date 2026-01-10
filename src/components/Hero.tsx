import { motion } from "framer-motion";
import { Link } from "react-scroll";
import Navbar from './Navbar';
import differentcolor from '../img/differentcolor.jpg'; 

export default function Hero() {
    return (
        <section id="hero" className="relative min-h-screen bg-[#FAF9F6] overflow-hidden">
            <Navbar />
            
            <div className="flex flex-col lg:flex-row min-h-screen items-center">
                
                {/* LEFT SIDE: Typography & Action */}
                <div className="w-full lg:w-1/2 px-8 md:px-20 pt-40 pb-20 z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="text-[10px] uppercase tracking-[0.5em] text-gray-400 font-black block mb-6">
                            The 2026 Glassware Series
                        </span>
                        
                        <h2 className="text-6xl md:text-8xl font-black uppercase italic tracking-tighter leading-[0.85] text-[#1A1A1A] mb-8">
                            Premium <br /> 
                            <span className="text-transparent" style={{ WebkitTextStroke: '1px #1A1A1A' }}>Hydration</span>
                        </h2>

                        <p className="text-lg text-gray-600 mb-12 max-w-sm font-light leading-relaxed">
                            Elevate your daily ritual with high-tension borosilicate glass. Designed for those who find beauty in clarity.
                        </p>

                        <div className="flex flex-wrap gap-6">
                            <Link 
                                to="collection" 
                                smooth={true} 
                                duration={1000}
                                offset={-50}
                                className="bg-[#1A1A1A] text-white px-10 py-4 font-[#fff] uppercase text-[10px] tracking-[0.2em] hover:bg-gray-800 transition-all cursor-pointer shadow-xl"
                            >
                                Explore Collection
                            </Link>
                            
                            <Link 
                                to="aboutus" 
                                smooth={true} 
                                duration={1000}
                                className="group flex items-center gap-4 px-6 py-4 cursor-pointer"
                            >
                                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#1A1A1A]">Learn More</span>
                                <div className="w-8 h-[1px] bg-[#1A1A1A] group-hover:w-12 transition-all duration-300"></div>
                            </Link>
                        </div>
                    </motion.div>

                    <div className="hidden lg:flex gap-12 mt-24 border-t border-gray-200 pt-10">
                        <div>
                            <p className="text-xl font-black text-[#1A1A1A]">01.</p>
                            <p className="text-[9px] uppercase tracking-widest text-gray-400 font-bold">Pure Materials</p>
                        </div>
                        <div>
                            <p className="text-xl font-black text-[#1A1A1A]">02.</p>
                            <p className="text-[9px] uppercase tracking-widest text-gray-400 font-bold">Thermal Shock Resistant</p>
                        </div>
                    </div>
                </div>

                <motion.div 
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                    className="w-full lg:w-1/2 h-[60vh] lg:h-screen relative"
                >
                    <div 
                        className="absolute inset-0 grayscale hover:grayscale-0 transition-all duration-1000 ease-in-out"
                        style={{ 
                            backgroundImage: `url(${differentcolor})`, 
                            backgroundSize: 'cover', 
                            backgroundPosition: 'center',
        
                            clipPath: 'polygon(10% 0, 100% 0, 100% 100%, 0% 100%)' 
                        }}
                    >
                        {/* Overlay for subtle texture */}
                        <div className="absolute inset-0 bg-black/5 mix-blend-overlay"></div>
                    </div>

                    {/* Floating Label */}
                    <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.5 }}
                        className="absolute bottom-10 left-0 bg-[#FAF9F6] p-6 hidden lg:block"
                    >
                        <p className="text-[10px] font-black uppercase tracking-widest text-[#1A1A1A]">Featured: Zen Core Matte</p>
                    </motion.div>
                </motion.div>
            </div>
            
            {/* Scroll Indicator */}
            <motion.div 
                animate={{ y: [0, 10, 0] }} 
                transition={{ repeat: Infinity, duration: 2 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:block"
            >
                <div className="w-[1px] h-12 bg-gradient-to-b from-gray-300 to-transparent"></div>
            </motion.div>
        </section>
    );
};
