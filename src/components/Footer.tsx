import React from 'react';
import { Instagram, Twitter, Facebook } from 'lucide-react'; 

const Footer = () => {
    const linkSections = [
        {
            title: "Shop ZenSip",
            links: ["Classic Glass", "Infuser Series", "Accessories", "Gift Cards"]
        },
        {
            title: "Company",
            links: ["Our Story", "Sustainability", "Blog & Recipes", "Wholesale Inquiries"]
        },
        {
            title: "Support",
            links: ["Contact Us", "FAQs", "Shipping & Returns", "Warranty Policy"]
        }
    ];

    return (
        <footer className="bg-slate-50 border-t border-gray-200">
            <div className="px-6 md:px-16 lg:px-24 xl:px-32 max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row items-start justify-between gap-10 py-12 text-gray-600">
                    
                    <div className="max-w-md">
              
                        <div className="text-2xl font-bold text-teal-600 mb-4">
                          <a href="#" className="text-2xl font-black tracking-tighter text-black uppercase italic"> Zen <span className="text-gray-400">Sip</span>
                         </a>
                        
                        </div> 
                        <p className="mt-4 text-sm leading-relaxed">
                            Mindful hydration, elegantly designed. We craft pure borosilicate glass bottles designed to bring clarity and calm to your daily routine.
                        </p>
                    </div>

                    <div className="flex flex-wrap justify-between w-full md:w-[60%] gap-8">
                        {linkSections.map((section, index) => (
                            <div key={index}>
                                <h3 className="font-semibold text-base text-slate-800 mb-4">{section.title}</h3>
                                <ul className="text-sm space-y-3">
                                    {section.links.map((link, i) => (
                                        <li key={i}>
                                            <a href="#" className="hover:text-teal-600 transition duration-200">
                                                {link}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                        
                        <div>
                            <h3 className="font-semibold text-base text-slate-800 mb-4">Connect</h3>
                            <div className="flex space-x-4">
                          <a href="#" aria-label="Instagram" className="hover:text-teal-600 transition">
                           <Instagram size={20} />
                          </a>
                          <a href="#" aria-label="Twitter" className="hover:text-teal-600 transition">
                           <Twitter size={20} />
                         </a>
                         <a href="#" aria-label="Facebook" className="hover:text-teal-600 transition">
                            <Facebook size={20} />
                          </a>
                                
                            </div>
                            <p className="mt-6 text-xs">Stay hydrated & mindful </p>
                        </div>
                    </div>
                </div>

                <p className="py-6 text-center text-xs md:text-sm text-gray-500 border-t border-gray-200">
                    &copy; {new Date().getFullYear()} ZenSip Glassware. All Rights Reserved. 
                    <span className='block mt-1'>Designed with clarity in mind.</span>
                </p>
            </div>
        </footer>
    );
};

export default Footer;
