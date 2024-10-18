import Image from "next/image";
import PaginatedMenu from "../PaginatedMenu";
import { useState } from "react";


// FOR EXPERIMENTATION PURPOSES ONLY, CHANGING CATEGORY


const drinkCategories = {
    
        "Expresso": [
            { name: "Spanish Latte", image: "/images/blk-menu/drinks/SPANISH LATTE.png", 
             description: "Enjoy our creamy Spanish Latte, made with premium espresso, sweetened condensed milk, and whole milk. Perfectly balanced for a smooth, sweet coffee experience.", 
             price: ["12oz: ₱99", "16oz: ₱149"] },
            { name: "White Choco Latte", image: "/images/blk-menu/drinks/WHITE CHOCO LATTE.png", 
             description: "Indulge in our White Choco Latte, a delightful blend of rich espresso and velvety steamed milk, infused with premium white chocolate. A sweet and creamy treat for chocolate lovers.", 
             price: ["12oz: ₱99", "16oz: ₱149"] },
            { name: "Mocha Latte", image: "/images/blk-menu/drinks/MOCHA LATTE.png", 
             description: "Savor our Mocha Latte, a perfect harmony of bold espresso, rich chocolate, and silky steamed milk. Topped with a light cocoa dusting for an indulgent coffee experience.", 
             price: ["12oz: ₱99", "16oz: ₱149"] },
            { name: "Caramel Latte", image: "/images/blk-menu/drinks/MOCHA LATTE.png", 
             description: "Delight in our Caramel Latte, featuring smooth espresso and steamed milk, enhanced with a sweet caramel swirl. A perfect balance of coffee and caramel flavors in every sip.", 
             price: ["12oz: ₱99", "16oz: ₱149"] }, // Update this image path when available
        ]
    ,
    
        "Brew": [
            { name: "Hot Brewed Coffee", image: "/images/blk-menu/drinks/HOT BREWED COFFEE.png", description: "Enjoy our creamy Hot Brewed Coffee, made with premium espresso, sweetened condensed milk, and whole milk. Perfectly balanced for a smooth, sweet coffee experience.", price: ["12oz: ₱69", "16oz: ₱109"] },
            { name: "Cold Brew", image: "/images/blk-menu/drinks/COLD BREW.png", description: "Our signature Cold Brew is steeped for 12 hours, resulting in a smooth, rich flavor with low acidity. Served over ice for a refreshing coffee experience.", price: ["12oz: ₱89", "16oz: ₱129"] },
            { name: "Iced Coffee", image: "/images/blk-menu/drinks/ICED COFFEE.png", description: "Our classic Iced Coffee is brewed double-strength and cooled, then poured over ice for a bold, refreshing taste. Customize with your choice of milk and sweetener.", price: ["12oz: ₱79", "16oz: ₱119"] },
            { name: "Vanilla", image: "/images/blk-menu/drinks/VANILLA.png", description: "Indulge in our Vanilla coffee, featuring our signature brew infused with rich, creamy vanilla flavor. A perfect balance of coffee and sweet vanilla notes.", price: ["12oz: ₱89", "16oz: ₱129"] },
            { name: "Hazelnut", image: "/images/blk-menu/drinks/HAZELNUT.png", description: "Savor the nutty goodness of our Hazelnut coffee. Our premium coffee blend complemented with the rich, toasty flavor of hazelnuts for a comforting treat.", price: ["12oz: ₱89", "16oz: ₱129"] },
            { name: "Caramel", image: "/images/blk-menu/drinks/CARAMEL.png", description: "Delight in our Caramel coffee, where our robust coffee meets the sweet, buttery notes of caramel. A harmonious blend for those who enjoy a touch of indulgence.", price: ["12oz: ₱89", "16oz: ₱129"] },
        ]
    ,
    
        "Non Coffee and Tea": [
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
        ]
    ,
    
        "Matcha": [
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
        ]
    ,
    
        "Beverages": [
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
        ]
    
      };

export default function DrinkMenu({category}) {
    const [border, setBorder] = useState('border');


    return (
        <div>
          {/*Problem is Here, handling it, it should select only the passed value*/ }
          {/* {console.log(category)} */}
          {/* {console.log(drinkCategories[category])} */}
          
          
          <h1 className="text-xl font-semibold ">Brew</h1> 
          <p className="text-sm text-gray-500 border-b border-black p-2 pl-0 border-opacity-50">Ice/Hot</p>
          
            <PaginatedMenu items={drinkCategories[category]} />
        </div>
    );

}
