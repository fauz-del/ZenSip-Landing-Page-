import bot from '../img/bot.jpg'; 
import sandbot from '../img/sandbot.jpg'; 

export default function Aboutus() {
    return (
        <>
            <style>{`
                @import url('fonts.googleapis.com');
                * { font-family: 'Poppins', sans-serif; }
            `}</style>

            <section className="py-20 px-6 text-center bg-cover bg-center"
            style={{ backgroundImage: `url(${sandbot})` }}>
                <span className="text-teal-600 font-semibold tracking-widest uppercase text-sm">Our Story</span>
                <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mt-4 mb-6">Hydration, Mindfully Reimagined.</h1>
                <p className="max-w-2xl mx-auto text-slate-600 text-lg leading-relaxed">
                    At ZenSip, we believe that the simplest acts—like taking a sip of water—should be moments of clarity and peace.
                </p>
            </section>

            {/* 2. Brand Mission (Split Layout) */}
            <section className="max-w-6xl mx-auto py-20 px-6 grid md:grid-cols-2 gap-12 items-center">
                <div className="rounded-2xl overflow-hidden shadow-xl">
                    <img 
                        src={ bot }
                        alt="" 
                        className="w-full h-[500px] object-cover"
                    />
                </div>
                <div className="space-y-6">
                    <h2 className="text-3xl font-bold text-slate-800">Why ZenSip?</h2>
                    <p className="text-slate-600">
                        Founded in 2026, ZenSip was born out of a desire to eliminate the noise of modern life. We noticed that most water bottles were built for "performance" and "speed," leaving behind the quiet beauty of the present moment.
                    </p>
                    <p className="text-slate-600">
                        Our bottles are crafted from premium borosilicate glass—a material as clear as a calm lake and as resilient as your spirit. No plastics, no toxins, just the pure essence of your drink.
                    </p>
                    <div className="flex gap-4">
                        <div className="text-center">
                            <span className="block text-2xl font-bold text-teal-600">100%</span>
                            <span className="text-xs text-slate-500 uppercase">Plastic Free</span>
                        </div>
                        <div className="h-10 w-[1px] bg-slate-200"></div>
                        <div className="text-center">
                            <span className="block text-2xl font-bold text-teal-600">Pure</span>
                            <span className="text-xs text-slate-500 uppercase">Borosilicate</span>
                        </div>
                    </div>
                </div>
            </section>

  
          
        </>
    );
}
