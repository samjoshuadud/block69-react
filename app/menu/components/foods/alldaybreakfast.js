import Image from "next/image";
import PaginatedMenu from "../PaginatedMenu"

export default function AllDayBreakfast() {
    const breakfastItems = [
        { name: "French Toast", image: "/images/blk-menu/foods/FRENCH TOAST.png" },
        { name: "Poffertjes", image: "/images/blk-menu/foods/POFFERTJES.png" },
        { name: "Fluffy Pancakes", image: "/images/blk-menu/foods/FLUFFY PANCAKES.png" },
        { name: "Classic Waffles", image: "/images/blk-menu/foods/CLASSIC WAFFLES.png" },
        { name: "Marga's Fave", image: "/images/blk-menu/foods/MARGAS FAVE.png" },
        { name: "Breakfast Platter", image: "/images/blk-menu/foods/BREAKFAST PLATTER.png" },
    ];

    return (
        <div>
            <h1 className="text-xl font-semibold border-b border-black p-2 pl-0 border-opacity-50">All Day Breakfast</h1>        
            <PaginatedMenu items={breakfastItems} />
        </div>
    )
}
