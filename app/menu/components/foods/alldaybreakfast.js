import Image from "next/image";
import PaginatedMenu from "../PaginatedMenu"

export default function AllDayBreakfast() {
    const breakfastItems = [
        { name: "French Toast", image: "/images/blk-menu/foods/FRENCH TOAST.png",
          description: "Thick slices of bread dipped in a rich egg mixture, grilled to golden perfection, and served with maple syrup.",
          price: ["Solo: ₱149", "Savor: ₱249"] },
        { name: "Poffertjes", image: "/images/blk-menu/foods/POFFERTJES.png",
          description: "Mini Dutch pancakes, fluffy and light, served with butter and powdered sugar.",
          price: ["Solo: ₱129", "Savor: ₱219"] },
        { name: "Fluffy Pancakes", image: "/images/blk-menu/foods/FLUFFY PANCAKES.png",
          description: "Stack of light and airy pancakes, served with butter and your choice of syrup.",
          price: ["Solo: ₱139", "Savor: ₱229"] },
        { name: "Classic Waffles", image: "/images/blk-menu/foods/CLASSIC WAFFLES.png",
          description: "Crispy on the outside, soft on the inside, served with whipped cream and fresh berries.",
          price: ["Solo: ₱159", "Savor: ₱259"] },
        { name: "Marga's Fave", image: "/images/blk-menu/foods/MARGAS FAVE.png",
          description: "A house special featuring a mix of breakfast favorites, curated by our chef Marga.",
          price: ["Solo: ₱189", "Savor: ₱299"] },
        { name: "Breakfast Platter", image: "/images/blk-menu/foods/BREAKFAST PLATTER.png",
          description: "A hearty combination of eggs, bacon, sausage, hash browns, and toast to start your day right.",
          price: ["Solo: ₱199", "Savor: ₱319"] },
    ];

    return (
        <div>
            <h1 className="text-xl font-semibold border-b border-black p-2 pl-0 border-opacity-50">All Day Breakfast</h1>        
            <PaginatedMenu items={breakfastItems} />
        </div>
    )
}
