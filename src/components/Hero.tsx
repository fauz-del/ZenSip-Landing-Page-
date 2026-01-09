import { Link } from 'react-router-dom'; 
import Navbar from './Navbar';
import differentcolor from '../img/differentcolor.jpg'; 

export default function Hero() {
    return (
        <>
            <Navbar />
            <section 
                className="relative w-full h-[60vh] flex items-center justify-center bg-cover bg-center" 
                style={{ backgroundImage: `url(${differentcolor})` }}
            >
                {/* 1. Subtle Darken Overlay */}
                <div className="absolute inset-0 bg-black/40"></div>

                {/* 2. Simplified Glassmorphism Panel */}
                <div className="relative z-10 p-8 md:p-12 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl text-center max-w-2xl mx-4 shadow-2xl">
                    <h2 className="text-white text-4xl md:text-6xl font-black uppercase italic tracking-tighter mb-4">
                        Premium Glassware
                    </h2>
                    <p className="text-gray-200 text-lg mb-8 font-medium">
                        Elevate your hydration with ZenSip.
                    </p>

                    {/* 3. Action Buttons leading to your files */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link 
                            to="/collection" 
                            className="bg-white text-black px-8 py-3 rounded-lg font-bold uppercase text-xs tracking-widest hover:bg-gray-200 transition"
                        >
                            Explore Collection
                        </Link>
                        <Link 
                            to="/Aboutus" 
                            className="bg-transparent border border-white/50 text-white px-8 py-3 rounded-lg font-bold uppercase text-xs tracking-widest hover:bg-white/10 transition"
                        >
                            About Us
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
};
