'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Calendar, Clock, User, ChevronRight, Coffee } from 'lucide-react';

const ImageBlog = {
    top: [
        "/images/blk-menu/adv.jpg",
        "/images/blk-menu/img1.jpg",
        "/images/blk-menu/img2.JPG",
    ],
    bottom: [
        "/images/blk-menu/adv.jpg",
        "/images/blk-menu/img1.jpg",
        "/images/blk-menu/img2.JPG",
    ]
}

export const blogPosts = [
    {
        title: "The Art of Coffee Roasting",
        slug: "art-of-coffee-roasting",
        image: "/images/blk-menu/adv.jpg",
        excerpt: "Discover the intricate process of coffee roasting and how it affects the flavor profile of your favorite Block 69 Cafe blends.",
        author: "Emma Barista",
        date: "May 20, 2023",
        readTime: "5 min read",
        category: "Coffee"
    },
    {
        title: "Seasonal Menu: Summer Refreshers",
        slug: "summer-refreshers-menu",
        image: "/images/blk-menu/img1.jpg",
        excerpt: "Beat the heat with our new line of summer refreshers! From iced lattes to fruit-infused cold brews, we've got you covered.",
        author: "Alex Brewmaster",
        date: "June 1, 2023",
        readTime: "4 min read",
        category: "Menu"
    },
    {
        title: "Sustainability at Block 69 Cafe",
        slug: "sustainability-practices",
        image: "/images/blk-menu/img2.JPG",
        excerpt: "Learn about our commitment to sustainability, from sourcing fair-trade beans to our eco-friendly packaging initiatives.",
        author: "Sam Greenie",
        date: "May 25, 2023",
        readTime: "6 min read",
        category: "Sustainability"
    }
];

export const BlogPost = ({ post }) => (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transform hover:shadow-xl transition-shadow duration-300 flex flex-col">
        <div className="relative">
            <Image 
                src={post.image}
                alt={post.title}
                width={400}
                height={250}
                className="w-full h-48 object-cover"
            />
            <div className="absolute top-0 left-0 bg-brown-600 text-white px-3 py-1 rounded-br-lg">
                {post.category}
            </div>
        </div>
        <div className="p-6 flex flex-col flex-grow">
            <h3 className="font-bold text-xl mb-2 text-brown-800 hover:text-brown-600 transition-colors duration-300">
                <Link href={`/blog/${post.slug}`}>{post.title}</Link>
            </h3>
            <p className="text-gray-600 mb-4 flex-grow">{post.excerpt}</p>
            <div className="flex items-center text-gray-500 text-sm mb-4">
                <User size={16} className="mr-2" />
                <span className="mr-4">{post.author}</span>
                <Calendar size={16} className="mr-2" />
                <span className="mr-4">{post.date}</span>
                <Clock size={16} className="mr-2" />
                <span>{post.readTime}</span>
            </div>
            <Link href={`/blog/${post.slug}`} className="inline-flex items-center text-brown-600 font-semibold hover:text-brown-800 transition-colors duration-300 mt-auto">
                Read More <ChevronRight size={16} className="ml-1" />
            </Link>
        </div>
    </div>
);

export default function Blog() {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [fade, setFade] = useState(false);
    const images = ImageBlog.top;

    const nextImage = () => {
        setFade(true);
        setTimeout(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
            setFade(false);
        }, 300);
    };

    useEffect(() => {
        const timer = setInterval(nextImage, 5000);
        return () => clearInterval(timer);
    }, []);

    return (
        <div className="w-full min-h-screen">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="mb-16">
                    <div className="relative overflow-hidden rounded-lg shadow-xl w-full h-[36.9rem]">
                        <div className={`transition-opacity duration-300 ${fade ? 'opacity-0' : 'opacity-100'}`}>
                            <Image 
                                src={images[currentImageIndex]}
                                alt={`Featured Image ${currentImageIndex + 1}`}
                                layout="fill"
                                objectFit="cover"
                            />
                        </div>
                        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                            <div className="text-center">
                                <h1 className="text-5xl font-bold text-white mb-4">Block 69 Cafe Blog</h1>
                                <p className="text-xl text-gray-200">Brewing Stories, One Cup at a Time</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mb-16">
                    <h2 className="font-bold text-4xl text-brown-800 border-b-4 border-brown-500 inline-block pb-2 mb-8">Latest Brews</h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {blogPosts.map((post, index) => (
                            <BlogPost key={index} post={post} />
                        ))}
                    </div>
                </div>

                <div className="text-center">
                    <Link href="/menu" className="inline-flex items-center bg-brown-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-brown-700 transition-colors duration-300">
                        <Coffee size={20} className="mr-2" />
                        Explore Our Menu
                    </Link>
                </div>
            </div>
        </div>
    );
}
