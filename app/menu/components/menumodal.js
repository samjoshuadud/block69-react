import Image from "next/image";
import { useState } from "react";

export default function MenuModal({ isOpen, onClose, item }) {
    const [quantity, setQuantity] = useState(1);
    const [selectedSize, setSelectedSize] = useState(item?.price[0].split(': ')[0] || '');

    const handleQuantityChange = (amount) => {
        setQuantity(Math.max(1, quantity + amount));
    };

    if (!isOpen || !item) return null;

    return (
        <div className="fixed inset-0 flex justify-center items-center pointer-events-none bg-black/50 z-[1000]">
            <div className="w-full max-w-[58rem] h-auto min-[900px]:h-[28rem] border border-black rounded-[1.5rem] min-[900px]:rounded-[3rem] bg-white pointer-events-auto relative p-4 min-[900px]:p-8 max-h-[90vh] min-[900px]:max-h-none overflow-y-auto min-[900px]:overflow-visible">
                {/* Exit Button */}
                <button 
                    onClick={onClose}
                    className="absolute top-2 right-2 min-[900px]:top-4 min-[900px]:right-4 w-8 h-8 flex items-center justify-center bg-gray-200 hover:bg-gray-300 rounded-full transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-gray-400"
                    aria-label="Close modal"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>

                <div className="flex flex-col min-[900px]:flex-row h-full">
                    <div className="w-full min-[900px]:w-[40rem] mb-4 min-[900px]:mb-0">
                        <div className="rounded-[1.5rem] min-[900px]:rounded-[3rem] overflow-hidden w-full h-48 min-[900px]:h-full">
                            <Image 
                                src={item.image}
                                alt={item.name}
                                width={200} 
                                height={200} 
                                className="w-full h-full object-cover =object-fit" 
                            />
                        </div>
                    </div>
                    <div className="min-[900px]:ml-10 w-full min-[900px]:w-[70rem]">
                        <h2 className="text-xl min-[900px]:text-2xl font-bold mt-0 min-[900px]:mt-6">{item.name}</h2>
                        <p className="text-sm my-2">{item.description}</p>
                        <div className="mt-4">
                            <p className="font-semibold mb-2">Price:</p>
                            <div className="flex items-center space-x-4">
                                {item.price.map((price, index) => (
                                    <label key={index} className="flex items-center cursor-pointer">
                                        <input 
                                            type="radio" 
                                            name="price" 
                                            value={price.split(': ')[0]}
                                            checked={selectedSize === price.split(': ')[0]}
                                            onChange={(e) => setSelectedSize(e.target.value)}
                                            className="form-radio h-4 w-4 text-indigo-600"
                                        />
                                        <span className="ml-2">{price}</span>
                                    </label>
                                ))}
                            </div>
                        </div>
                        <div className="mt-6">
                            <label htmlFor="quantity" className="block text-sm font-medium text-gray-700 mb-2">Quantity:</label>
                            <div className="flex items-center">
                                <button 
                                    onClick={() => handleQuantityChange(-1)}
                                    className="w-8 h-8 border border-gray-300 rounded-l-md flex items-center justify-center bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                    aria-label="Decrease quantity"
                                >
                                    -
                                </button>
                                <input 
                                    type="number" 
                                    name="quantity" 
                                    id="quantity" 
                                    value={quantity}
                                    readOnly
                                    className="w-12 h-8 border-t border-b border-gray-300 text-center focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                                />
                                <button 
                                    onClick={() => handleQuantityChange(1)}
                                    className="w-8 h-8 border border-gray-300 rounded-r-md flex items-center justify-center bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                    aria-label="Increase quantity"
                                >
                                    +
                                </button>
                            </div>
                        </div>

                        <div className="mt-6">
                            <button className="bg-white border border-black text-black px-4 py-2 rounded-md mr-4 hover:bg-black hover:text-white transition-colors duration-300 ease-in-out">
                                Add to Cart
                            </button>
                            <button className="bg-black border border-black text-white px-4 py-2 rounded-md hover:bg-white hover:text-black transition-colors duration-300 ease-in-out">
                                Buy
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
