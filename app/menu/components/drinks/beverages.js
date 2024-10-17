import Image from "next/image";
import PaginatedMenu from "../PaginatedMenu"

export default function Beverages() {
    const beverageItems = [
        { name: "Mango Juice", image: "/images/blk-menu/drinks/MANGO JUICE.png",
          description: "Refreshing and sweet, our Mango Juice is made from ripe, juicy mangoes for a tropical taste sensation.",
          price: ["Regular: ₱79", "Large: ₱99"] },
        { name: "Cucumber Juice", image: "/images/blk-menu/drinks/CUCUMBER JUICE.png",
          description: "Cool and crisp, our Cucumber Juice is a hydrating blend that's perfect for a refreshing pick-me-up.",
          price: ["Regular: ₱79", "Large: ₱99"] },
        { name: "Iced Tea", image: "/images/blk-menu/drinks/ICED TEA.png",
          description: "Our classic Iced Tea is brewed to perfection and served chilled for a satisfying and thirst-quenching experience.",
          price: ["Regular: ₱69", "Large: ₱89"] },
        { name: "Coca-Cola Zero", image: "/images/blk-menu/drinks/COCA-COLA ZERO.png",
          description: "Enjoy the great taste of Coca-Cola without the calories. A sugar-free option for cola lovers.",
          price: ["Can: ₱59", "Bottle: ₱79"] },
        { name: "Regular Coca-Cola", image: "/images/blk-menu/drinks/REGULAR COCA-COLA.png",
          description: "The classic Coca-Cola taste you know and love. A timeless refreshment to complement your meal.",
          price: ["Can: ₱59", "Bottle: ₱79"] },
        { name: "Pepsi", image: "/images/blk-menu/drinks/PEPSI.png",
          description: "Bold, refreshing Pepsi with its distinct cola flavor. A perfect fizzy companion to your food.",
          price: ["Can: ₱59", "Bottle: ₱79"] },
    ];

    return (
        <div>
            <h1 className="text-xl font-semibold border-b border-black p-2 pl-0 border-opacity-50">Beverages</h1>        
            <PaginatedMenu items={beverageItems} />
        </div>
    )
}
