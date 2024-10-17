import Image from "next/image";
import PaginatedMenu from "../PaginatedMenu"

export default function SidesAndNibbles() {
    const sidesAndNibblesItems = [
        { name: "Fries", image: "/images/blk-menu/foods/FRIES.png",
          description: "Crispy golden fries, perfect as a side or snack.",
          price: ["Solo: ₱79", "Savor: ₱129"] },
        { name: "Calamari Mix", image: "/images/blk-menu/foods/CALAMARI MIX.png",
          description: "A delightful mix of crispy calamari and assorted seafood.",
          price: ["Solo: ₱149", "Savor: ₱239"] },
        { name: "Fries Before Guys", image: "/images/blk-menu/foods/FRIES BEFORE GUYS.png",
          description: "Our signature loaded fries with special toppings.",
          price: ["Solo: ₱119", "Savor: ₱189"] },
        { name: "Mozzarella Balls", image: "/images/blk-menu/foods/MOZZARELLA BALLS.png",
          description: "Crispy breaded mozzarella balls, gooey on the inside.",
          price: ["Solo: ₱129", "Savor: ₱209"] },
        { name: "Calamari", image: "/images/blk-menu/foods/CALAMARI.png",
          description: "Tender calamari rings, lightly battered and fried to perfection.",
          price: ["Solo: ₱139", "Savor: ₱229"] },
        { name: "Hash Brown", image: "/images/blk-menu/foods/HASHBROWN.png",
          description: "Crispy shredded potato patties, golden brown and delicious.",
          price: ["Solo: ₱69", "Savor: ₱109"] },
    ];

    return (
        <div>
            <h1 className="text-xl font-semibold border-b border-black p-2 pl-0 border-opacity-50">Sides and Nibbles</h1>        
            <PaginatedMenu items={sidesAndNibblesItems} />
        </div>
    )
}
