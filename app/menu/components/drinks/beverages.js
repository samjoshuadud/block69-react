import Image from "next/image";
import PaginatedMenu from "../PaginatedMenu"

export default function Beverages() {
    const beverageItems = [
        { name: "Mango Juice", image: "/images/blk-menu/drinks/MANGO JUICE.png" },
        { name: "Cucumber Juice", image: "/images/blk-menu/drinks/CUCUMBER JUICE.png" },
        { name: "Iced Tea", image: "/images/blk-menu/drinks/ICED TEA.png" },
        { name: "Coca-Cola Zero", image: "/images/blk-menu/drinks/COCA-COLA ZERO.png" },
        { name: "Regular Coca-Cola", image: "/images/blk-menu/drinks/REGULAR COCA-COLA.png" },
        { name: "Pepsi", image: "/images/blk-menu/drinks/PEPSI.png" },
    ];

    return (
        <div>
            <h1 className="text-xl font-semibold border-b border-black p-2 pl-0 border-opacity-50">Beverages</h1>        
            <PaginatedMenu items={beverageItems} />
        </div>
    )
}
