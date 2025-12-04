import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Banner: React.FC = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const bannerImages = [
        "src/assets/Shop10.jpeg",
        "src/assets/shop.jpeg",
        "src/assets/shop5.jpeg",

    ];

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % bannerImages.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    const handlePrev = () => {
        setCurrentSlide((prev) => (prev - 1 + bannerImages.length) % bannerImages.length);
    };

    const handleNext = () => {
        setCurrentSlide((prev) => (prev + 1) % bannerImages.length);
    };

    return (
        <div className="w-full flex justify-center mb-8 px-4">
            {/* Main container - exact 1348:718 aspect ratio */}
            <div className="relative w-full max-w-[1348px] rounded-3xl overflow-hidden shadow-2xl border-4 border-main">
                {/* Aspect ratio container */}
                <div className="w-full min-h-[200px] md:aspect-[1348/718] relative"> {/* 718/1348 = 53.26% */}
                    {bannerImages.map((img, index) => (
                        <img
                            key={index}
                            src={img}
                            alt={`Banner ${index + 1}`}
                            className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-500 ${index === currentSlide ? 'opacity-100' : 'opacity-0'
                                }`}
                        />
                    ))}

                    {/* Navigation buttons */}
                    <button
                        onClick={handlePrev}
                        className="absolute left-3 md:left-6 top-1/2 -translate-y-1/2 bg-main/90 hover:bg-main p-2 md:p-3 rounded-full z-10 transition active:scale-95 shadow-lg"
                        aria-label="Previous banner"
                    >
                        <ChevronLeft size={18} className="text-white" />
                    </button>

                    <button
                        onClick={handleNext}
                        className="absolute right-3 md:right-6 top-1/2 -translate-y-1/2 bg-main/90 hover:bg-main p-2 md:p-3 rounded-full z-10 transition active:scale-95 shadow-lg"
                        aria-label="Next banner"
                    >
                        <ChevronRight size={18} className="text-white" />
                    </button>

                    {/* Indicators */}
                    <div className="absolute bottom-3 md:bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                        {bannerImages.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentSlide(index)}
                                className={`rounded-full transition ${index === currentSlide
                                    ? 'bg-main w-8 h-3'
                                    : 'bg-white/60 w-3 h-3'
                                    }`}
                                aria-label={`Go to banner ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;