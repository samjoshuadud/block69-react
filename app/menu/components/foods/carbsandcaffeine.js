import Image from "next/image";
import PaginatedMenu from "../PaginatedMenu"

export default function CarbsAndCaffeine() {
    const carbsAndCaffeineItems = [
        { name: "Clubhouse Sandwich", image: "/images/blk-menu/foods/CLUBHOUSE SANDWICH.png" },
    ];

    return (
        <div>
            <h1 className="text-xl font-semibold border-b border-black p-2 pl-0 border-opacity-50">Carbs and Caffeine</h1>        
            <PaginatedMenu items={carbsAndCaffeineItems} />
        </div>
    )
}
