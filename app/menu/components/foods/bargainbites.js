import Image from "next/image";
import PaginatedMenu from "../PaginatedMenu"

export default function BargainBites() {
    const bargainBitesItems = [
        { name: "Chicken Poppers", image: "/images/blk-menu/foods/CHICKEN POPPERS.png" },
        { name: "Chicken Teriyaki", image: "/images/blk-menu/foods/CHICKEN TERIYAKI.png" },
        { name: "Pork Teriyaki", image: "/images/blk-menu/foods/PORK TERIYAKI.png" },
        { name: "Chicken Katsudon", image: "/images/blk-menu/foods/CHICKEN KATSUDON.png" },
        { name: "Pork Katsudon", image: "/images/blk-menu/foods/PORK KATSUDON.png" },
        { name: "Breakfast Platter", image: "/images/blk-menu/foods/BREAKFAST PLATTER.png" },
    ];

    return (
        <div>
            <h1 className="text-xl font-semibold border-b border-black p-2 pl-0 border-opacity-50">Bargain Bites</h1>        
            <PaginatedMenu items={bargainBitesItems} />
        </div>
    )
}
