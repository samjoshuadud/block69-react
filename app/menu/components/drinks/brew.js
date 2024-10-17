import Image from "next/image"
import PaginatedMenu from "../PaginatedMenu"

export default function Brew() {

    const brewItems = [
        { name: "Hot Brewed Coffee", image: "/images/blk-menu/drinks/HOT BREWED COFFEE.png", description: "Enjoy our creamy Hot Brewed Coffee, made with premium espresso, sweetened condensed milk, and whole milk. Perfectly balanced for a smooth, sweet coffee experience.", price: ["12oz: ₱69", "16oz: ₱109"] },
        { name: "Cold Brew", image: "/images/blk-menu/drinks/COLD BREW.png", description: "Our signature Cold Brew is steeped for 12 hours, resulting in a smooth, rich flavor with low acidity. Served over ice for a refreshing coffee experience.", price: ["12oz: ₱89", "16oz: ₱129"] },
        { name: "Iced Coffee", image: "/images/blk-menu/drinks/ICED COFFEE.png", description: "Our classic Iced Coffee is brewed double-strength and cooled, then poured over ice for a bold, refreshing taste. Customize with your choice of milk and sweetener.", price: ["12oz: ₱79", "16oz: ₱119"] },
        { name: "Vanilla", image: "/images/blk-menu/drinks/VANILLA.png", description: "Indulge in our Vanilla coffee, featuring our signature brew infused with rich, creamy vanilla flavor. A perfect balance of coffee and sweet vanilla notes.", price: ["12oz: ₱89", "16oz: ₱129"] },
        { name: "Hazelnut", image: "/images/blk-menu/drinks/HAZELNUT.png", description: "Savor the nutty goodness of our Hazelnut coffee. Our premium coffee blend complemented with the rich, toasty flavor of hazelnuts for a comforting treat.", price: ["12oz: ₱89", "16oz: ₱129"] },
        { name: "Caramel", image: "/images/blk-menu/drinks/CARAMEL.png", description: "Delight in our Caramel coffee, where our robust coffee meets the sweet, buttery notes of caramel. A harmonious blend for those who enjoy a touch of indulgence.", price: ["12oz: ₱89", "16oz: ₱129"] },
    ];
    
    return (
        <div>
            {/* Brew */}
        <h1 className="text-xl font-semibold">Brew</h1>
        <p className="text-sm text-gray-500 border-b border-black p-2 pl-0 border-opacity-50">Ice/Hot</p>
        
           <PaginatedMenu items={brewItems} />

               
            </div>

    )
}
