import Image from "next/image"
import { combinedCategories } from "./combinedmenu"


export default function HomeMenu({handleCategoryChange}) { // I am receiving the function handleCategoryChange from the menu page


    const renderMenuItems = (categoryType) => (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-[repeat(auto-fill,minmax(18rem,1fr))] gap-4 py-6 px-3">
            {Object.entries(combinedCategories[categoryType]).map(([category, items]) => (
                <button key={category} onClick={() => handleCategoryChange(category, categoryType)} className="flex flex-col items-center lg:flex-row cursor-default">
                    <Image 
                        src={items[0].image} // Using the first item's image as the category image
                        alt={category}
                        width={144}
                        height={144}
                        className="w-36 h-36 rounded-full hover:scale-110 transition-all duration-200 object-cover cursor-pointer"
                    />
                    <h2 className="text-lg px-4 hover:scale-110 hover:font-bold transition-all duration-100 sm:text-center md:text-center whitespace-normal cursor-pointer">{category}</h2>
                </button>
            ))}
        </div>
    );

    return (
        <div>
            {Object.keys(combinedCategories).map((categoryType) => (
                <div key={categoryType}>
                    <h1 className="text-xl font-semibold border-b border-black p-2 pl-0 border-opacity-50">{categoryType}</h1>
                    {renderMenuItems(categoryType)}
                </div>
            ))}
        </div>
    )
}



