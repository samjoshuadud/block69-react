import Image from "next/image"
import PaginatedMenu from "../PaginatedMenu"

export default function Expresso() {
    const espressoItems = [
        { name: "Spanish Latte", image: "/images/blk-menu/drinks/SPANISH LATTE.png" },
        { name: "White Choco Latte", image: "/images/blk-menu/drinks/WHITE CHOCO LATTE.png" },
        { name: "Mocha Latte", image: "/images/blk-menu/drinks/MOCHA LATTE.png" },
        { name: "Caramel Latte", image: "/images/blk-menu/drinks/MOCHA LATTE.png" }, // Update this image path when available
    ];

    return (
        <div>
            <h1 className="text-xl font-semibold">Expresso</h1>
            <p className="text-sm text-gray-500 border-b border-black p-2 pl-0 border-opacity-50">Ice/Hot</p>
        
            <PaginatedMenu items={espressoItems} />
        </div>
    )
}
