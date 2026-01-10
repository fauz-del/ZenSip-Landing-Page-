import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react"; 

const Navbar = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsSticky(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", path: "hero" },
    { name: "Collection", path: "collection" },
    { name: "About", path: "aboutus" },
    { name: "Reviews", path: "testimonial" },
    { name: "Contact", path: "contact" },
  ];

  return (
    <nav className="fixed top-8 w-full z-[100] px-5 flex justify-center">
      <motion.div 
        layout
        className={ `flex items-center justify-between w-full max-w-5xl px-8 py-2 rounded-full transition-all duration-500 border ${
          isSticky 
            ? "bg-[#1A1A1A] border-white/10 shadow-2xl" 
            : "bg-white/40 backdrop-blur-md border-[#1A1A1A]/10"
        }`}
      >
  
        <Link to="hero" smooth={true} className={`text-xl font-black tracking-tighter cursor-pointer italic transition-colors duration-500 ${
            isSticky ? "text-white" : "text-[#1A1A1A]"
        }`}>
          ZEN<span className={isSticky ? "text-gray-500" : "text-gray-400"}>SIP</span>
        </Link>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-10 items-center">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              smooth={true}
              duration={1000}
              spy={true}
              className={`text-[10px] uppercase tracking-[0.3em] cursor-pointer font-black transition-colors duration-500 ${
                isSticky ? "text-white/80 hover:text-white" : "text-[#1A1A1A]/70 hover:text-[#1A1A1A]"
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>

      
        <button 
          className={`md:hidden relative z-[110] p-2 transition-colors duration-500 ${
            isSticky ? "text-white" : "text-[#1A1A1A]"
          }`}
          onClick={() => setIsOpen(!isOpen)}
        >
          <AnimatePresence mode="wait">
            {isOpen ? (
              <motion.div key="close" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                <X size={24} strokeWidth={3} />
              </motion.div>
            ) : (
              <motion.div key="menu" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                <Menu size={24} strokeWidth={3} />
              </motion.div>
            )}
          </AnimatePresence>
        </button>
      </motion.div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.1 }}
            className="fixed inset-0 bg-[#1A1A1A] z-[105] flex flex-col items-center justify-center gap-10"
          >
            {navItems.map((item, i) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
              >
                <Link
                  to={item.path}
                  smooth={true}
                  onClick={() => setIsOpen(false)}
                  className="text-2xl font-black uppercase italic tracking-tighter text-white hover:text-gray-500 transition-colors cursor-pointer"
                >
                  {item.name}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
