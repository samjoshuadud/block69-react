import Image from "next/image";
import PaginatedMenu from "../PaginatedMenu"

export default function Silog() {
    const silogItems = [
        { name: "Chicken Silog", image: "/images/blk-menu/foods/CHICKSILOG.png",
          description: "Tender chicken served with garlic fried rice and a sunny-side-up egg.",
          price: ["Solo: ₱149", "Savor: ₱239"] },
        { name: "Tapsilog", image: "/images/blk-menu/foods/TAPSILOG.png",
          description: "Filipino-style beef tapa with garlic fried rice and a fried egg.",
          price: ["Solo: ₱159", "Savor: ₱249"] },
        { name: "Luncheon Silog", image: "/images/blk-menu/foods/LUNCHEONSILOG.png",
          description: "Sliced luncheon meat served with garlic fried rice and a fried egg.",
          price: ["Solo: ₱139", "Savor: ₱229"] },
        { name: "Bacsilog", image: "/images/blk-menu/foods/BACSILOG.png",
          description: "Crispy bacon strips with garlic fried rice and a sunny-side-up egg.",
          price: ["Solo: ₱169", "Savor: ₱259"] },
        { name: "Carrot Rice", image: "/images/blk-menu/foods/CARROT RICE.png",
          description: "Flavorful rice cooked with grated carrots, a healthier alternative.",
          price: ["Solo: ₱79", "Savor: ₱129"] },
        { name: "Plain Rice", image: "/images/blk-menu/foods/PLAIN RICE.png",
          description: "Steamed white rice, perfect as a side for any meal.",
          price: ["Solo: ₱59", "Savor: ₱99"] },
    ];

    return (
        <div>
            <h1 className="text-xl font-semibold border-b border-black p-2 pl-0 border-opacity-50">Silog</h1>        
            <PaginatedMenu items={silogItems} />
        </div>
    )
}
