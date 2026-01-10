import { Instagram, Twitter, Facebook, ArrowUpRight } from 'lucide-react'; 
import { Link } from 'react-scroll';

const Footer = () => {
    const linkSections = [
        {
            title: "Collections",
            links: ["Classic Glass", "Infuser Series", "Accessories", "Limited Drops"]
        },
        {
            title: "The Brand",
            links: ["Our Story", "Sustainability", "Journal", "Wholesale"]
        },
        {
            title: "Support",
            links: ["Shipping", "Returns", "Warranty", "Contact Us"]
        }
    ];

    return (
        <footer id="contact" className="bg-[#FAF9F6] pt-32 pb-10 px-6 border-t border-gray-100 overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 mb-32">
                    
                    {/* Left: Mission Statement */}
                    <div className="space-y-8">
                        <a href="#" className="text-5xl font-black tracking-tighter text-[#1A1A1A] uppercase italic">
                            Zen<span className="text-gray-300">Sip</span>
                        </a>
                        <p className="text-gray-500 max-w-sm text-lg font-light leading-relaxed">
                            Crafting pure borosilicate glass tools designed to bring clarity and calm to your daily hydration ritual.
                        </p>
                        
                        <div className="flex gap-8 items-center">
                            <a href="#" className="group flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.3em] text-[#1A1A1A]">
                                Instagram <ArrowUpRight size={14} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                            </a>
                            <a href="#" className="group flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.3em] text-[#1A1A1A]">
                                Twitter <ArrowUpRight size={14} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                            </a>
                            <a href="#" className="group flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.3em] text-[#1A1A1A]">
                                Facebook <ArrowUpRight size={14} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                            </a>
                        </div>
                    </div>

                    {/* Right: Navigation Grid */}
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-12">
                        {linkSections.map((section, index) => (
                            <div key={index}>
                                <h3 className="text-[10px] font-black uppercase tracking-[0.5em] text-gray-400 mb-8">
                                    {section.title}
                                </h3>
                                <ul className="space-y-4">
                                    {section.links.map((link, i) => (
                                        <li key={i}>
                                            <a href="#" className="text-xs text-[#1A1A1A] font-bold uppercase tracking-widest hover:text-gray-400 transition-colors">
                                                {link}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Massive 2026 Typography Overlay */}
                <div className="relative h-[15vw] flex items-center justify-center pointer-events-none mb-10">
                    <h2 className="text-[18vw] font-black text-[#1A1A1A]/5 uppercase leading-none tracking-tighter select-none">
                        Pure Clarity
                    </h2>
                </div>

                {/* Bottom Bar */}
                <div className="pt-10 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="flex gap-8">
                        <Link to="hero" smooth={true} className="text-[9px] font-black uppercase tracking-[0.4em] text-gray-400 hover:text-[#1A1A1A] cursor-pointer transition-colors">Back to Top</Link>
                        <span className="text-[9px] font-black uppercase tracking-[0.4em] text-gray-400">Privacy Policy</span>
                        <span className="text-[9px] font-black uppercase tracking-[0.4em] text-gray-400">Terms</span>
                    </div>
                    
                    <p className="text-[10px] font-black text-[#1A1A1A] uppercase tracking-[0.2em]">
                        &copy; 2026 ZenSip Glassware. <span className="text-gray-400 italic">Elevate the Ritual.</span>
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
  