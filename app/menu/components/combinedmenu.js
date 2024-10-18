import PaginatedMenu from "./PaginatedMenu";

// Combine both drinkCategories and foodCategories into one object
const combinedCategories = {
    "Drinks": {
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
        // Add more drink categories like "Non Coffee and Tea", "Matcha", "Beverages"...
    },
    "Foods": {
        "All Day Breakfast": [
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
                price: ["Solo: ₱199", "Savor: ₱319"] }, // Update this image path when available
        ]
    ,
    
        "Pasta": [
            { name: "Chicken Pesto", image: "/images/blk-menu/foods/CHICKEN PESTO.png",
                description: "Tender chicken pieces in a creamy pesto sauce, served over al dente pasta.",
                price: ["Solo: ₱159", "Savor: ₱249"] },
              { name: "Gourmet Tuyo", image: "/images/blk-menu/foods/GOURMENT TUYO.png",
                description: "A Filipino-inspired pasta dish featuring dried fish flakes in olive oil and garlic.",
                price: ["Solo: ₱139", "Savor: ₱229"] },
              { name: "Aglio Olio", image: "/images/blk-menu/foods/AGLIO OLIO.png",
                description: "Classic Italian pasta with garlic, olive oil, and red pepper flakes.",
                price: ["Solo: ₱129", "Savor: ₱219"] },
              { name: "Garlic Bread", image: "/images/blk-menu/foods/GARLIC BREAD.png",
                description: "Crispy baguette slices toasted with garlic butter and herbs.",
                price: ["Solo: ₱79", "Savor: ₱129"] },
        ]
    ,
    
        "Bargain Bites": [
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
        ]
    ,
    
        "Sides and Nibbles": [
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
        ]
    ,
    
        "Carbs and Caffeine": [
            { name: "Clubhouse Sandwich", image: "/images/blk-menu/foods/CLUBHOUSE SANDWICH.png",
                description: "A classic triple-decker sandwich with layers of turkey, bacon, lettuce, and tomato.",
                price: ["Solo: ₱159", "Savor: ₱249"] },
        ]
        // Add more food categories like "Pasta", "Sandwiches", etc.
    }
};

  

export default function CombinedMenu({ categoryType, category }) {
    // categoryType could be "Drinks" or "Foods"
    const items = combinedCategories[categoryType][category];

    if (categoryType === "Drinks") {
        const isBrewOrExpresso = category === 'Brew' || category === 'Expresso';
      
        return (
          <div>
            <h1
              className={`text-xl font-semibold ${!isBrewOrExpresso ? 'border-b border-black p-2 pl-0 border-opacity-50' : ''}`}
            >
              {category}
            </h1>
      
            {isBrewOrExpresso && (
              <p className="text-sm text-gray-500 border-b border-black p-2 pl-0 border-opacity-50">Ice/Hot</p>
            )}
            
            <PaginatedMenu items={items} />
          </div>
        );
    } else {
        return (
            <div>
                <h1 className="text-xl font-semibold border-b border-black p-2 pl-0 border-opacity-50">{category}</h1>
                <PaginatedMenu items={items} />
            </div>
        );
    }
}
