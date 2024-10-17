import Image from "next/image";
import PaginatedMenu from "../PaginatedMenu"

export default function BargainBites() {
    const bargainBitesItems = [
        { name: "Chicken Poppers", image: "/images/blk-menu/foods/CHICKEN POPPERS.png",
          description: "Crispy, bite-sized chicken pieces perfect for snacking or as a side dish.",
          price: ["Solo: ₱99", "Savor: ₱159"] },
        { name: "Chicken Teriyaki", image: "/images/blk-menu/foods/CHICKEN TERIYAKI.png",
          description: "Tender chicken glazed with our sweet and savory teriyaki sauce, served with rice.",
          price: ["Solo: ₱129", "Savor: ₱199"] },
        { name: "Pork Teriyaki", image: "/images/blk-menu/foods/PORK TERIYAKI.png",
          description: "Juicy pork slices grilled and basted with our signature teriyaki sauce, served with rice.",
          price: ["Solo: ₱139", "Savor: ₱219"] },
        { name: "Chicken Katsudon", image: "/images/blk-menu/foods/CHICKEN KATSUDON.png",
          description: "Crispy chicken cutlet served over rice with a savory-sweet sauce and beaten egg.",
          price: ["Solo: ₱149", "Savor: ₱229"] },
        { name: "Pork Katsudon", image: "/images/blk-menu/foods/PORK KATSUDON.png",
          description: "Breaded pork cutlet topped with egg and onions in a dashi-based sauce, served over rice.",
          price: ["Solo: ₱159", "Savor: ₱239"] },
        { name: "Breakfast Platter", image: "/images/blk-menu/foods/BREAKFAST PLATTER.png",
          description: "A hearty combination of eggs, bacon, sausage, hash browns, and toast to start your day right.",
          price: ["Solo: ₱179", "Savor: ₱269"] },
    ];

    return (
        <div>
            <h1 className="text-xl font-semibold border-b border-black p-2 pl-0 border-opacity-50">Bargain Bites</h1>        
            <PaginatedMenu items={bargainBitesItems} />
        </div>
    )
}
