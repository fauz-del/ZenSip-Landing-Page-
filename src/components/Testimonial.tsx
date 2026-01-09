import React from 'react';

const TestimonialSection = () => {
    const testimonials = [
        {
            quote: "ZenSip is a game-changer. The water tastes so pure, and the mindful design truly helps me stay grounded throughout my busy workday. It’s more than a bottle; it’s an experience.",
            name: "Sarah L.",
            location: "New York, NY",
            rating: 5,
        },
        {
            quote: "I was skeptical about the glass at first, but it’s incredibly durable and elegant. I take my ZenSip everywhere. The quality is unmatched, and I love being plastic-free.",
            name: "Marcus T.",
            location: "Los Angeles, CA",
            rating: 5,
        },
        {
            quote: "The Infuser Series is perfect for my herbal teas. It's easy to clean, looks amazing, and I feel good supporting a sustainable company. Highly recommend!",
            name: "Chloe K.",
            location: "Austin, TX",
            rating: 5,
        },
    ];

    const StarRating = ({ rating }) => (
        <div className="flex items-center mb-4">
            {[...Array(rating)].map((_, i) => (
                <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 24 24">
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                </svg>
            ))}
        </div>
    );

    return (
        <section className="py-20 bg-white px-6 md:px-16 lg:px-24 xl:px-32">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-slate-800">What Our Community Says</h2>
                    <p className="mt-4 text-slate-500 max-w-lg mx-auto">Real experiences from those who have found their flow with ZenSip.</p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <div key={index} className="bg-slate-50 p-8 rounded-xl shadow-sm hover:shadow-lg transition duration-300 transform hover:-translate-y-1 border border-slate-100">
                            <StarRating rating={testimonial.rating} />
                            <p className="text-slate-600 italic mb-6 leading-relaxed">"{testimonial.quote}"</p>
                            <div className="flex items-center">
                                {/* Placeholder for user avatar */}
                                <div className="w-10 h-10 bg-gray-400 rounded-full flex items-center justify-center text-white font-semibold text-sm mr-4">
                                    {testimonial.name.charAt(0)}
                                
                                </div>
                                <div>
                                    <p className="font-semibold text-slate-800">{testimonial.name}</p>
                                    <p className="text-xs text-slate-400">{testimonial.location}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                
                <div className="text-center mt-12">
                    <button className="bg-gray-400 text-white px-8 py-3 rounded-full font-medium hover:bg-teal-700 transition shadow-lg">
                        Read All 1,200+ Reviews
                    </button>
                </div>
            </div>
        </section>
    );
};

export default TestimonialSection;
