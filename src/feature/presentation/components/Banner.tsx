import React, { useState, useEffect } from 'react';


const Banner: React.FC = () => {

    const bannerImages = [
        // 'src/assets/banner-shop.jpg',
        // 'src/assets/shop5.jpg',
        // 'src/assets/shop10.jpeg'
        'https://i.pinimg.com/736x/15/41/b9/1541b903604e20c860865b32c7eac9f9.jpg',
        'https://i.pinimg.com/1200x/4b/15/ce/4b15ce66c1de5d23f577b0bf591b32ac.jpg',
        'https://i.pinimg.com/736x/11/2e/a4/112ea49b7e96737adc5ad4031b3fddb4.jpg',

    ];

    const [currentSlide, setCurrentSlide] = useState(0);
    const [imageErrors, setImageErrors] = useState<boolean[]>(
        new Array(bannerImages.length).fill(false)
    );

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % bannerImages.length);
        }, 3000);
        return () => clearInterval(timer);
    }, []);

    const handleImageError = (index: number) => {
        console.error(`Failed to load banner image ${index + 1}`);
        setImageErrors((prev) => {
            const newErrors = [...prev];
            newErrors[index] = true;
            return newErrors;
        });
    };

    return (
        <div className="relative w-full h-40 md:h-56 rounded-2xl overflow-hidden shadow-lg mb-6 bg-gray-200">
            {bannerImages.map((banner, index) => (
                <div
                    key={index}
                    className={`absolute w-full h-full transition-opacity duration-700 ${index === currentSlide ? 'opacity-100' : 'opacity-0'
                        }`}
                >
                    {imageErrors[index] ? (
                        // Fallback UI
                        <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-blue-500 to-blue-700">
                            <div className="text-center text-white">
                                <h2 className="text-2xl font-bold mb-2">عروض خاصة</h2>
                                <p className="text-sm">متجر شبرا</p>
                            </div>
                        </div>
                    ) : (
                        <img
                            src={banner}
                            alt={`Banner ${index + 1}`}
                            className="w-full h-full object-cover"
                            onError={() => handleImageError(index)}
                            loading="lazy"
                        />
                    )}
                </div>
            ))}

            {/* Dots Indicator */}
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                {bannerImages.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentSlide(index)}
                        className={`h-2 rounded-full transition-all ${index === currentSlide ? 'bg-white w-6' : 'bg-white/50 w-2'
                            }`}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>
        </div>
    );
};

export default Banner;