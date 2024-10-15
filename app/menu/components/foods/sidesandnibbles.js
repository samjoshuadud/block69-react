import Image from "next/image";
import PaginatedMenu from "../PaginatedMenu"

export default function SidesAndNibbles() {
    const sidesAndNibblesItems = [
        { name: "Fries", image: "/images/blk-menu/foods/FRIES.png" },
        { name: "Calamari Mix", image: "/images/blk-menu/foods/CALAMARI MIX.png" },
        { name: "Fries Before Guys", image: "/images/blk-menu/foods/FRIES BEFORE GUYS.png" },
        { name: "Mozzarella Balls", image: "/images/blk-menu/foods/MOZZARELLA BALLS.png" },
        { name: "Calamari", image: "/images/blk-menu/foods/CALAMARI.png" },
        { name: "Hash Brown", image: "/images/blk-menu/foods/HASHBROWN.png" },
    ];

    return (
        <div>
            <h1 className="text-xl font-semibold border-b border-black p-2 pl-0 border-opacity-50">Sides and Nibbles</h1>        
            <PaginatedMenu items={sidesAndNibblesItems} />
        </div>
    )
}
