import Image from "next/image"
import PaginatedMenu from "../PaginatedMenu"

export default function NonCoffeeAndTea() {
    const nonCoffeeAndTeaItems = [
        { name: "Hot Chocolate", image: "/images/blk-menu/drinks/HOT CHOCOLATE.png", 
          description: "Rich and creamy hot chocolate made with premium cocoa, perfect for a cozy treat.",
          price: ["12oz: ₱89", "16oz: ₱129"] },
        { name: "Triple Chocolate", image: "/images/blk-menu/drinks/TRIPLE CHOCOLATE.png",
          description: "Indulgent blend of dark, milk, and white chocolate for the ultimate chocolate lover's dream.",
          price: ["12oz: ₱109", "16oz: ₱149"] },
        { name: "Pink Paradise", image: "/images/blk-menu/drinks/PINK PARADISE.png",
          description: "A refreshing strawberry and cream blend, topped with whipped cream for a taste of paradise.",
          price: ["12oz: ₱99", "16oz: ₱139"] },
        { name: "Tropical Cloud", image: "/images/blk-menu/drinks/TROPICAL CLOUD.png",
          description: "Smooth blend of coconut and pineapple, creating a light and fluffy tropical delight.",
          price: ["12oz: ₱99", "16oz: ₱139"] },
        { name: "Caramel Candy", image: "/images/blk-menu/drinks/CARAMEL CANDY.png",
          description: "Sweet and creamy caramel drink, reminiscent of your favorite candy, topped with whipped cream.",
          price: ["12oz: ₱99", "16oz: ₱139"] },
        { name: "Dark Berry", image: "/images/blk-menu/drinks/DARK BERRY.png",
          description: "A rich blend of mixed berries with a hint of dark chocolate for a sophisticated flavor.",
          price: ["12oz: ₱109", "16oz: ₱149"] },
    ];
    
    return (
        <div>
            <h1 className="text-xl font-semibold border-b border-black p-2 pl-0 border-opacity-50">Non Coffee and Tea</h1>        
           <PaginatedMenu items={nonCoffeeAndTeaItems} />
        </div>
    )
}
