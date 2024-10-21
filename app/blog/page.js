'use client';
import Image from 'next/image';
import { useState } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react'; // Importing icons from lucide-react

const ImageBlog = {
    top: [
        "/images/home_images/clubhouse_design.png",
            "/images/blk-menu/adv.jpg", // Add more images here
    ],
    bottom: ["/images/home_images/clubhouse_design.png"],
}

export default function Blog() {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [fade, setFade] = useState(false);
    const images = ImageBlog.top; // Only use images from the 'top' key

    const nextImage = () => {
        setFade(true);
        setTimeout(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
            setFade(false);
        }, 300); // Duration of the fade effect
    };

    const prevImage = () => {
        setFade(true);
        setTimeout(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
            setFade(false);
        }, 300); // Duration of the fade effect
    };

    return (
        <div className="w-full">
            <div className={`flex items-center ${images.length > 1 ? 'justify-between' : 'justify-center'} mb-8`}>
                {images.length > 1 && ( // Only render buttons if there is more than one image
                    <button 
                        onClick={prevImage} 
                        className="ml-4 text-gray-500 hover:scale-125 translate-all ease-in-out duration-300 hover:text-black"
                    >
                        <ArrowLeft size="40"/> {/* Using the left arrow icon */}
                    </button>
                )}
                
                <div className={`w-[85rem] h-[36.9rem] transition-opacity duration-300 ${fade ? 'opacity-0' : 'opacity-100'}`}>
                    <Image 
                        src={images[currentImageIndex]}
                        alt={`Image ${currentImageIndex + 1}`}
                        width={1360}
                        height={565}
                        className="w-full h-full object-cover"
                    />
                </div>
                
                {images.length > 1 && ( // Only render buttons if there is more than one image
                    <button 
                        onClick={nextImage} 
                        className="mr-4 text-gray-500 hover:scale-125 translate-all ease-in-out duration-300 hover:text-black"
                    >
                        <ArrowRight size="40"/> {/* Using the right arrow icon */}
                    </button>
                )}
            </div>

            <div className="mx-10">
                <h1 className="font-bold text-6xl border-b-4 border-black ">Recent Posts</h1>
            </div>
        </div>
    );
}
