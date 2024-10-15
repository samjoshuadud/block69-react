import Image from "next/image"


export default function HomeMenu({handleCategoryChange}) { // I am receiving the function handleCategoryChange from the menu page


    const menuItems = {
        drinks: [
            { category: 'expresso', name: 'Expresso Ice Hot', image: '/images/blk-menu/drinks/vanilla-cafe-latte.png' },
            { category: 'brew', name: 'Brew Iced/Hot', image: '/images/blk-menu/drinks/COLD BREW.png' },
            { category: 'noncoffeeandtea', name: 'Non Coffee and Tea', image: '/images/blk-menu/drinks/PINK PARADISE.png' },
            { category: 'matcha', name: 'Matcha', image: '/images/blk-menu/drinks/MATCHA MANGO.png' },
            { category: 'beverages', name: 'Beverages', image: '/images/blk-menu/drinks/REGULAR COCA-COLA.png' },
        ],
        foods: [
            { category: 'alldaybreakfast', name: 'All Day Breakfast', image: '/images/blk-menu/foods/FRENCH TOAST.png' },
            { category: 'silog', name: 'Silog', image: '/images/blk-menu/foods/LUNCHEONSILOG.png' },
            { category: 'pasta', name: 'Pasta', image: '/images/blk-menu/foods/AGLIO OLIO.png' },
            { category: 'bargainbites', name: 'Bargain Bites', image: '/images/blk-menu/foods/CHICKEN KATSUDON.png' },
            { category: 'sidesandnibbles', name: 'Sides And Nibbles', image: '/images/blk-menu/foods/CHICKEN BALLS MIX.png' },
            { category: 'carbsandcaffeine', name: 'Carbs and Caffeine', image: '/images/blk-menu/foods/CLUBHOUSE SANDWICH.png' },
        ],
    }; 

    const renderMenuItems = (items) => (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-[repeat(auto-fill,minmax(18rem,1fr))] gap-4 py-6 px-3">
            {items.map((item, index) => (
                <button key={index} onClick={() => handleCategoryChange(item.category)} className="flex flex-col items-center lg:flex-row cursor-default">
                    <Image 
                        src={item.image}
                        alt={item.name}
                        width={144}
                        height={144}
                        className="w-36 h-36 rounded-full hover:scale-110 transition-all duration-200 object-cover cursor-pointer"
                    />
                    <h2 className="text-lg px-4 hover:scale-110 hover:font-bold transition-all duration-100 sm:text-center md:text-center whitespace-normal cursor-pointer">{item.name}</h2>
                </button>
            ))}
        </div>
    );

    return (
        <div>
            {/* DRINKS */}
            <h1 className="text-xl font-semibold border-b border-black p-2 pl-0 border-opacity-50">Drinks</h1>
            {renderMenuItems(menuItems.drinks)}

            {/* FOODS */}
            <h1 className="text-xl font-semibold border-b border-black p-2 pl-0 border-opacity-50">Foods</h1>
            {renderMenuItems(menuItems.foods)}
        </div>
    )
}



