import React from 'react';
import { Leaf, Wind, Sparkles } from "lucide-react";
import combo2 from '../img/combo2.jpg'; 
import sliverbottle1 from '../img/sliverbottle1.jpg';
import glassbottle from '../img/glassbottle.jpg'; 

const products = [
    { id: 1, name: "Pro Bottles 1L", price: "$45", img: combo2 },
    { id: 2, name: "Glass Core 1L", price: "$35", img: glassbottle },
    { id: 3, name: "Active Flask", price: "$28", img: sliverbottle1 },
];

export default function Collection() {
    return (
      <>
        <section className="bg-[#FAF9F6] py-20 my-10 px-5 border-y border-slate-100">
            <div className="max-w-6xl mx-auto">
                <div className="grid md:grid-cols-3 gap-16">
                    
                    {/* Pillar 1 */}
                    <div className="group text-center flex flex-col items-center">
                        <div className="mb-6 p-4 rounded-full bg-white shadow-sm border border-slate-50 group-hover:scale-110 transition-transform duration-300">
                            <Leaf className="w-6 h-6 text-teal-700/70 stroke-[1.5px]" />
                        </div>
                        <h3 className="text-sm uppercase tracking-[0.2em] font-semibold text-slate-800 mb-4">
                            Sustainable Soul
                        </h3>
                        <p className="text-slate-500 text-sm leading-relaxed font-light max-w-[280px]">
                            A lifetime companion crafted to eliminate single-use plastic from your daily ritual.
                        </p>
                    </div>

                    {/* Pillar 2 */}
                    <div className="group text-center flex flex-col items-center">
                        <div className="mb-6 p-4 rounded-full bg-white shadow-sm border border-slate-50 group-hover:scale-110 transition-transform duration-300">
                            <Wind className="w-6 h-6 text-teal-700/70 stroke-[1.5px]" />
                        </div>
                        <h3 className="text-sm uppercase tracking-[0.2em] font-semibold text-slate-800 mb-4">
                            Mindful Design
                        </h3>
                        <p className="text-slate-500 text-sm leading-relaxed font-light max-w-[280px]">
                            Ergonomic curves and high-tension borosilicate glass designed for sensory clarity.
                        </p>
                    </div>

                    {/* Pillar 3 */}
                    <div className="group text-center flex flex-col items-center">
                        <div className="mb-6 p-4 rounded-full bg-white shadow-sm border border-slate-50 group-hover:scale-110 transition-transform duration-300">
                            <Sparkles className="w-6 h-6 text-teal-700/70 stroke-[1.5px]" />
                        </div>
                        <h3 className="text-sm uppercase tracking-[0.2em] font-semibold text-slate-800 mb-4">
                            Absolute Purity
                        </h3>
                        <p className="text-slate-500 text-sm leading-relaxed font-light max-w-[280px]">
                            Non-porous materials ensure your water remains chemically pure and untainted.
                        </p>
                    </div>

                </div>
            </div>
        </section>
        
        <section className="py-10 bg-white">
            <div className="max-w-7xl mx-auto px-6">
              <h2 className= "text-[20px] uppercase tracking-[0.1em] font-bold text-slate-800 mb-4"> Collection </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {products.map((product) => (
                        <div key={product.id} className="group relative aspect-[3/4] bg-gray-100 overflow-hidden cursor-pointer">
                            
                            {/* Product Image */}
                            <img 
                                src={product.img} 
                                alt={product.name}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            />

                            <div className="absolute inset-0 bg-black/40 flex flex-col justify-end p-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                    <h3 className="text-white text-lg font-bold uppercase tracking-tighter italic">
                                        {product.name}
                                    </h3>
                                    <div className="flex justify-between items-center mt-2">
                                        <span className="text-white/80 text-sm font-medium">{product.price}</span>
                                        <span className="text-white text-[10px] border border-white/40 px-2 py-1 uppercase tracking-widest">
                                            Add to Cart
                                        </span>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                    ))}
                </div>
      
                
            </div>
        </section>
    </>
    );
}
