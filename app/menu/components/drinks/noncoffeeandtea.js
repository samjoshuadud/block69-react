import Image from "next/image"
import PaginatedMenu from "../PaginatedMenu"

export default function NonCoffeeAndTea() {
    const nonCoffeeAndTeaItems = [
        { name: "Hot Chocolate", image: "/images/blk-menu/drinks/HOT CHOCOLATE.png" },
        { name: "Triple Chocolate", image: "/images/blk-menu/drinks/TRIPLE CHOCOLATE.png" },
        { name: "Pink Paradise", image: "/images/blk-menu/drinks/PINK PARADISE.png" },
        { name: "Tropical Cloud", image: "/images/blk-menu/drinks/TROPICAL CLOUD.png" },
        { name: "Caramel Candy", image: "/images/blk-menu/drinks/CARAMEL CANDY.png" },
        { name: "Dark Berry", image: "/images/blk-menu/drinks/DARK BERRY.png" },
    ];
    
    return (
        <div>
            <h1 className="text-xl font-semibold border-b border-black p-2 pl-0 border-opacity-50">Non Coffee and Tea</h1>        
           <PaginatedMenu items={nonCoffeeAndTeaItems} />
        </div>
    )
}
