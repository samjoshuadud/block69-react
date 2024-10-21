'use client';
import { useParams } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { Calendar, Clock, User, ArrowLeft, Coffee, Tag } from 'lucide-react';
import { blogPosts, BlogPost } from '../page';

const BlogPostPage = () => {
    const { slug } = useParams();
    
    const blogPost = blogPosts.find(post => post.slug === slug);

    if (!blogPost) {
        return (
            <div className="w-full min-h-screen flex items-center justify-center ">
                <div className="text-center p-8 bg-white rounded-lg shadow-xl">
                    <Coffee size={64} className="mx-auto text-brown-600 mb-4" />
                    <h1 className="text-3xl font-bold text-brown-800 mb-2">Oops! Blog Post Not Found</h1>
                    <p className="text-brown-600 mb-6">We couldn't find the blog post you're looking for. It might have been moved or deleted.</p>
                    <Link href="/blog" className="inline-flex items-center px-4 py-2 bg-brown-600 text-white rounded-md hover:bg-brown-700 transition-colors duration-300">
                        <ArrowLeft size={20} className="mr-2" />
                        Back to Blog
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="w-full  min-h-screen">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <Link href="/blog" className="inline-flex items-center text-brown-600 hover:text-brown-800 mb-8 transition-colors duration-300">
                    <ArrowLeft size={20} className="mr-2" /> Back to Blog
                </Link>
                <article className="bg-white rounded-lg shadow-xl overflow-hidden">
                    <div className="relative h-96">
                        <Image 
                            src={blogPost.image}
                            alt={blogPost.title}
                            layout="fill"
                            objectFit="cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-brown-900 opacity-70"></div>
                        <div className="absolute bottom-0 left-0 right-0 p-8">
                            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4">{blogPost.title}</h1>
                            <div className="flex flex-wrap items-center text-white text-sm">
                                <span className="bg-brown-500 px-3 py-1 rounded-full mr-4 mb-2">{blogPost.category}</span>
                                <div className="flex items-center mr-4 mb-2">
                                    <User size={16} className="mr-2" />
                                    <span>{blogPost.author}</span>
                                </div>
                                <div className="flex items-center mr-4 mb-2">
                                    <Calendar size={16} className="mr-2" />
                                    <span>{blogPost.date}</span>
                                </div>
                                <div className="flex items-center mb-2">
                                    <Clock size={16} className="mr-2" />
                                    <span>{blogPost.readTime}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="p-8 md:p-12">
                        <div className="prose max-w-none">
                            <p className="text-xl leading-relaxed mb-8">{blogPost.content}</p>
                            <div className="bg-amber-100 border-l-4 border-brown-500 p-4 my-8">
                                <p className="italic text-brown-700">"At Block 69 Cafe, we believe that every cup tells a story. Our passion for coffee is reflected in every brew we serve."</p>
                            </div>
                            <p>From bean to cup, we take pride in every step of our coffee-making process. Our skilled baristas are trained to bring out the best flavors in each blend, ensuring that every sip is a delightful experience.</p>
                            <h2 className="text-2xl font-bold mt-8 mb-4">Exploring Coffee Origins</h2>
                            <p>At Block 69 Cafe, we source our beans from various regions around the world, each with its unique flavor profile. From the bright, citrusy notes of Ethiopian beans to the rich, chocolatey undertones of Colombian coffee, our diverse selection caters to every palate.</p>
                        </div>
                        <div className="mt-12 flex flex-wrap gap-2">
                            {['Coffee', 'Cafe Culture', 'Brewing Techniques'].map((tag) => (
                                <span key={tag} className="inline-flex items-center bg-amber-200 text-brown-700 px-3 py-1 rounded-full text-sm">
                                    <Tag size={14} className="mr-2" />
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>
                </article>
                <div className="mt-12">
                    <h3 className="text-2xl font-bold mb-6">More from Block 69 Cafe</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {blogPosts.filter(post => post.slug !== slug).map((post) => (
                            <BlogPost key={post.slug} post={post} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogPostPage;
