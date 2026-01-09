import slicecombo from '../img/slicecombo.jpg';

export default function ZenSipNewsletter() {
    return (
      <div className= "m-4">
        <div className="md:grid p-2 md:grid-cols-2 max-w-4xl bg-white mx-4 md:mx-auto rounded-2xl shadow-lg overflow-hidden border border-slate-100">
          
            <img src= {slicecombo}
                alt="ZenSip Bottle" className="hidden md:block w-full h-full object-cover rounded-xl" />
            
            <div className="relative flex items-center justify-center bg-slate-50/50">
                {/* Close Button */}
                <button className="absolute top-6 right-6 hover:rotate-90 transition-transform duration-200" aria-label="Close">
                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M13 2 2 13M2 2l11 11" stroke="#64748b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </button>

                <div className="max-md:py-20 px-6 md:px-10 text-center">
                    {/* 2. On-brand Copy */}
                    <h1 className="text-3xl font-bold text-slate-800">
                        Join the Flow
                    </h1>
                    <p className="mt-4 text-slate-500">
                        Receive mindful hydration tips, exclusive early access to new collections, and 10% off your first order.
                    </p>

                    {/* 3. Updated Form Styling */}
                    <form className="mt-6 md:mt-8 flex shadow-sm">
                        <input type="email" placeholder="Enter your email"
                            className="w-full outline-none rounded-l-xl border border-r-0 border-slate-200 p-3 text-slate-900 focus:border-teal-500 transition-colors" />
                        <button type="submit" className="rounded-r-xl bg-gray-400 px-6 lg:px-8 py-3 text-black font-medium hover:bg-teal-700 transition-colors">
                            Join
                        </button>
                    </form>
                    <p className="mt-4 text-[10px] text-slate-400 uppercase tracking-widest">
                        Respecting your inbox and our planet.
                    </p>
                </div>
            </div>
        </div>
      </div>
    );
};
