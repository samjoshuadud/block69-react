'use client'

import React, {useState, useEffect, Suspense} from 'react'
import LoadingMenu from './components/loading-menu'

const Expresso = React.lazy(() => import('./components/drinks/expresso'))
const HomeMenu = React.lazy(() => import('./components/homemenu'))
const Brew = React.lazy(() => import('./components/drinks/brew'))
const NonCoffeeAndTea = React.lazy(() => import('./components/drinks/noncoffeeandtea'))
const Matcha = React.lazy(() => import('./components/drinks/matcha'))
const Beverages = React.lazy(() => import('./components/drinks/beverages'))
const AllDayBreakfast = React.lazy(() => import('./components/foods/alldaybreakfast'))
const Silog = React.lazy(() => import('./components/foods/silog'))
const Pasta = React.lazy(() => import('./components/foods/pasta'))
const BargainBites = React.lazy(() => import('./components/foods/bargainbites'))
const SidesAndNibbles = React.lazy(() => import('./components/foods/sidesandnibbles'))
const CarbsAndCaffeine = React.lazy(() => import('./components/foods/carbsandcaffeine'))

export default function Menu() {
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const savedCategory = localStorage.getItem('selectedCategory'); // this here will save the selected category to the browser's local storage take note that we are the one saving via the function handleCategoryChange but even if refreshed the browsers save it to its local storage
        if (savedCategory) { // if the save is not null or there is a save category
            setSelectedCategory(savedCategory); // set the saved category(what menu) to setselectedcategory
        } else {
            setSelectedCategory('homemenu'); // otherwise set the category to homemenu
        }
        setIsLoading(false); // set the isloading to false so that the menu can load
    }, []);

    const handleCategoryChange = (category) => {
        setSelectedCategory(category); // set the selected category to the category (button) that is clicked
        localStorage.setItem('selectedCategory', category); // save the selected category to the browser's local storage
    };

    const MenuLink = ({ category, children }) => {
        const isActive = selectedCategory === category; 
        return (
            <button 
                onClick={() => handleCategoryChange(category)} 
                className={`group text-left w-full ${isActive ? 'font-bold' : ''}`}
            >
                <span className={`inline-block transition-all duration-200 ease-in-out ${
                    isActive ? 'border-b-2 border-black' : 'hover:border-b hover:border-black'
                }`}>
                    {children}
                </span>
            </button>
        );
    };

    const renderMenu = () => {
        if (isLoading) return <LoadingMenu />;
        switch (selectedCategory) {
            case 'homemenu':
                return <HomeMenu handleCategoryChange={handleCategoryChange} />; // I am passing down the function handleCategorychange to the homemenu component
            case 'expresso':
                return <Expresso />;
            case 'brew':
                return <Brew />;
            case 'noncoffeeandtea':
                return <NonCoffeeAndTea />;
            case 'matcha':
                return <Matcha />;
            case 'beverages':
                return <Beverages />;
            case 'alldaybreakfast':
                return <AllDayBreakfast />;
            case 'silog':
                return <Silog />;
            case 'pasta':
                return <Pasta />;
            case 'bargainbites':
                return <BargainBites />;
            case 'sidesandnibbles':
                return <SidesAndNibbles />;
            case 'carbsandcaffeine':
                return <CarbsAndCaffeine />;

            default:
                return <HomeMenu handleCategoryChange={handleCategoryChange} />; // this is the default case, it will return the homemenu component and pass down the handleCategoryChange function to it
        }
    }

    return (
        <div className="w-full h-auto">
            <div className="container mx-auto">
                <div className="flex px-16 pt-6 pb-32">
                    <div className="w-64">
                        <ul>
                            <li className="lg:text-2xl md:text-xl text-lg font-bold pb-8">
                                <MenuLink category="homemenu">
                                    <p>Menu</p>
                                </MenuLink>
                            </li>
                            
                            <ul className="py-2">
                                <li className="lg:text-xl md:text-lg text-md font-semibold">Drinks</li>
                                {Object.entries({ // this is an object dictionary that contains the caption and the value (key and value)
                                    'Expresso': 'expresso',
                                    'Brew': 'brew',
                                    'Non Coffee And Tea': 'noncoffeeandtea',
                                    'Matcha': 'matcha',
                                    'Beverages': 'beverages'
                                }).map(([caption, value]) => (
                                    <li key={value} className="py-1">
                                        <MenuLink category={value}> {/* this is the menu link component that is passed down to the menu link*/}
                                            {caption} {/* this is the caption that is passed down to the menu link*/}
                                        </MenuLink>
                                    </li>
                                ))}
                            </ul>

                            <ul className="py-6">
                                <li className="lg:text-xl md:text-lg text-md font-semibold">Foods</li>
                                {Object.entries({
                                    'All Day Breakfast': 'alldaybreakfast',
                                    'Silog': 'silog',
                                    'Pasta': 'pasta',
                                    'Bargain Bites': 'bargainbites',
                                    'Sides and Nibbles': 'sidesandnibbles',
                                    'Carbs and Caffeine': 'carbsandcaffeine'
                                }).map(([caption, value]) => (
                                    <li key={value} className="py-1">
                                        <MenuLink category={value}>
                                            {caption}
                                        </MenuLink>
                                    </li>
                                ))}
                            </ul>
                        </ul>
                    </div>

                    {/* flex grow allows the div to take up the remaining space, if all divs have flex grow, they will equally divide the space , if other div have higher value, it will take up more space */}
                    <div className="flex-grow">  
                        <Suspense fallback={<LoadingMenu />}>
                            {renderMenu()}
                        </Suspense>
                    </div>
                </div>
            </div>
        </div>
    )
}
