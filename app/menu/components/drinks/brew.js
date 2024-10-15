import Image from "next/image"
import PaginatedMenu from "../PaginatedMenu"

export default function Brew() {

    const brewItems = [
        { name: "Hot Brewed Coffee", image: "/images/blk-menu/drinks/HOT BREWED COFFEE.png" },
        { name: "Cold Brew", image: "/images/blk-menu/drinks/COLD BREW.png" },
        { name: "Iced Coffee", image: "/images/blk-menu/drinks/ICED COFFEE.png" },
        { name: "Vanilla", image: "/images/blk-menu/drinks/VANILLA.png" },
        { name: "Hazelnut", image: "/images/blk-menu/drinks/HAZELNUT.png" },
        { name: "Caramel", image: "/images/blk-menu/drinks/CARAMEL.png" },
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
