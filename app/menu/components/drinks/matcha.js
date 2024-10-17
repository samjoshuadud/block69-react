import Image from "next/image";
import PaginatedMenu from "../PaginatedMenu"
export default function Matcha() {
    const matchaItems = [
        { name: "Matcha Mango", image: "/images/blk-menu/drinks/MATCHA MANGO.png", 
          description: "A refreshing blend of premium matcha and sweet mango, perfect for a tropical twist on the classic green tea flavor.", 
          price: ["12oz: ₱129", "16oz: ₱169"] },
        { name: "Vanilla Kissed Matcha", image: "/images/blk-menu/drinks/VANILLA KISSED MATCHA.png", 
          description: "Smooth matcha green tea latte infused with a hint of vanilla, creating a delightful balance of earthy and sweet notes.", 
          price: ["12oz: ₱119", "16oz: ₱159"] },
        { name: "Spicy Matcha", image: "/images/blk-menu/drinks/SPICY MATCHA.png", 
          description: "An adventurous blend of matcha with a kick of spice, perfect for those who enjoy a little heat with their green tea.", 
          price: ["12oz: ₱129", "16oz: ₱169"] },
        { name: "Whiteout Matcha", image: "/images/blk-menu/drinks/WHITEOUT MATCHA.png", 
          description: "A creamy, dreamy matcha latte made with white chocolate, offering a luxurious and indulgent green tea experience.", 
          price: ["12oz: ₱139", "16oz: ₱179"] },
        { name: "Matcha Latte", image: "/images/blk-menu/drinks/MATCHA LATTE.png", 
          description: "Our classic matcha green tea latte, made with high-grade matcha powder and steamed milk for a traditional and comforting drink.", 
          price: ["12oz: ₱109", "16oz: ₱149"] },
        { name: "Dirty Matcha", image: "/images/blk-menu/drinks/DIRTY MATCHA.png", 
          description: "A bold combination of matcha green tea and a shot of espresso, perfect for those who need an extra caffeine boost.", 
          price: ["12oz: ₱139", "16oz: ₱179"] },
    ];

    return (
        <div>
            <h1 className="text-xl font-semibold border-b border-black p-2 pl-0 border-opacity-50">Matcha</h1>        
            <PaginatedMenu items={matchaItems} />
        </div>
    )
}
