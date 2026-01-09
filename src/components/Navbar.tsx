import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  const navItems = [
    { link: "Home", path: "hero" },
    { link: "Collection", path: "collection" }, 
    { link: "About Us", path: "aboutus" },      
    { link: "Testimonial", path: "testimonial" },
    { link: "Contact us", path: "contact" },
  ];

  useEffect(() => {
    const handleScroll = () => setIsSticky(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isSticky 
          ? "bg-white/90 backdrop-blur-md border-b border-black/5 py-3 shadow-sm" 
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
  
        <a href="#" className="text-2xl font-black tracking-tighter text-black uppercase italic">
          Zen<span className="text-gray-400">Sip</span>
        </a>

    
        <ul className="hidden md:flex gap-7 items-center">
          {navItems.map(({ link, path }) => (
            <li key={path}>
              <Link
                to={path}
                smooth={true}
                spy={true}
                offset={-100}
                className="relative cursor-pointer text-[12px] font-black text-black uppercase tracking-[0.2em] group"
              >
                {link}
      
                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-gray-400 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </li>
          ))}
        </ul>


        <div className="hidden md:flex items-center">
          <a
            href="#shop"
            className="px-8 py-2.5 bg-black text-white text-xs font-black uppercase tracking-widest hover:bg-gray-800 transition-all duration-300 transform hover:scale-105"
          >
            Shop Now
          </a>
        </div>

        <button
          className="md:hidden p-1 text-black z-50"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
        </button>
      </div>

      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 bg-white z-[40] flex flex-col px-8 py-24 animate-in slide-in-from-right duration-300">
          <ul className="flex flex-col gap-3">
            {navItems.map(({ link, path }) => (
              <li key={path}>
                <Link
                  to={path}
                  smooth={true}
                  spy={true}
                  offset={-100}
      
                  className="block text-1xl font-black text-black group-hover:text-amber-900 uppercase italic tracking-tighter active:text-gray-400"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link}
                </Link>
              </li>
            ))}
          </ul>
          
          <div className="mt-auto pb-10">
            <a
              href="#shop"
              className="block w-full text-center py-5 bg-black text-white group-hover:bg-amber-900 text-lg font-black uppercase tracking-widest"
              onClick={() => setIsMenuOpen(false)}
            >
              Shop Now
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
