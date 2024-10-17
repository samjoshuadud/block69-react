import Image from "next/image"
import PaginatedMenu from "../PaginatedMenu"

export default function Expresso() {
    const espressoItems = [
        { name: "Spanish Latte", image: "/images/blk-menu/drinks/SPANISH LATTE.png", 
         description: "Enjoy our creamy Spanish Latte, made with premium espresso, sweetened condensed milk, and whole milk. Perfectly balanced for a smooth, sweet coffee experience.", 
         price: ["12oz: ₱99", "16oz: ₱149"] },
        { name: "White Choco Latte", image: "/images/blk-menu/drinks/WHITE CHOCO LATTE.png", 
         description: "Indulge in our White Choco Latte, a delightful blend of rich espresso and velvety steamed milk, infused with premium white chocolate. A sweet and creamy treat for chocolate lovers.", 
         price: ["12oz: ₱99", "16oz: ₱149"] },
        { name: "Mocha Latte", image: "/images/blk-menu/drinks/MOCHA LATTE.png", 
         description: "Savor our Mocha Latte, a perfect harmony of bold espresso, rich chocolate, and silky steamed milk. Topped with a light cocoa dusting for an indulgent coffee experience.", 
         price: ["12oz: ₱99", "16oz: ₱149"] },
        { name: "Caramel Latte", image: "/images/blk-menu/drinks/MOCHA LATTE.png", 
         description: "Delight in our Caramel Latte, featuring smooth espresso and steamed milk, enhanced with a sweet caramel swirl. A perfect balance of coffee and caramel flavors in every sip.", 
         price: ["12oz: ₱99", "16oz: ₱149"] }, // Update this image path when available
    ];

    return (
        <div>
            <h1 className="text-xl font-semibold">Expresso</h1>
            <p className="text-sm text-gray-500 border-b border-black p-2 pl-0 border-opacity-50">Ice/Hot</p>
        
            <PaginatedMenu items={espressoItems} />
        </div>
    )
}
