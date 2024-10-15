import Image from "next/image";
import PaginatedMenu from "../PaginatedMenu"
export default function Matcha() {
    const matchaItems = [
        { name: "Matcha Mango", image: "/images/blk-menu/drinks/MATCHA MANGO.png" },
        { name: "Vanilla Kissed Matcha", image: "/images/blk-menu/drinks/VANILLA KISSED MATCHA.png" },
        { name: "Spicy Matcha", image: "/images/blk-menu/drinks/SPICY MATCHA.png" },
        { name: "Whiteout Matcha", image: "/images/blk-menu/drinks/WHITEOUT MATCHA.png" },
        { name: "Matcha Latte", image: "/images/blk-menu/drinks/MATCHA LATTE.png" },
        { name: "Dirty Matcha", image: "/images/blk-menu/drinks/DIRTY MATCHA.png" },
    ];

    return (
        <div>
            <h1 className="text-xl font-semibold border-b border-black p-2 pl-0 border-opacity-50">Matcha</h1>        
            <PaginatedMenu items={matchaItems} />
        </div>
    )
}
