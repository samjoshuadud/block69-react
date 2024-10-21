'use client'

import React, { useState, useEffect, Suspense } from 'react'
import LoadingMenu from './components/loading-menu'
import { combinedCategories } from './components/combinedmenu'

const HomeMenu = React.lazy(() => import('./components/homemenu'))
const CombinedMenu = React.lazy(() => import('./components/combinedmenu'))

export default function Menu() {
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [categoryType, setCategoryType] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const savedCategory = localStorage.getItem('selectedCategory');
        const savedCategoryType = localStorage.getItem('selectedCategoryType');
        if (savedCategory && savedCategoryType) {
            setSelectedCategory(savedCategory);
            setCategoryType(savedCategoryType);
        } else {
            setSelectedCategory('homemenu');
            setCategoryType('Drinks');
        }
        setIsLoading(false);
    }, []);

    const handleCategoryChange = (category, type) => {
        setSelectedCategory(category);
        setCategoryType(type);
        localStorage.setItem('selectedCategory', category);
        localStorage.setItem('selectedCategoryType', type);
    };

    const MenuLink = ({ category, type, children }) => {
        const isActive = selectedCategory === category;
        return (
            <button 
                onClick={() => handleCategoryChange(category, type)} 
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

        if (selectedCategory === 'homemenu') {
            return <HomeMenu handleCategoryChange={handleCategoryChange} />;
        } else {
            return <CombinedMenu categoryType={categoryType} category={selectedCategory} />;
        }
    }

    return (
        <div className="w-full min-h-screen relative">
            <div className="container mx-auto pb-32">
                <div className="flex px-16 pt-6">
                    <div className="w-64">
                        <ul>
                            <li className="lg:text-2xl md:text-xl text-lg font-bold pb-8">
                                <MenuLink category="homemenu" type="Home">
                                    <p>Menu</p>
                                </MenuLink>
                            </li>
                            
                            {Object.entries(combinedCategories).map(([type, categories]) => (
                                <ul key={type} className="py-2">
                                    <li className="lg:text-xl md:text-lg text-md font-semibold">{type}</li>
                                    {Object.keys(categories).map((category) => (
                                        <li key={category} className="py-1">
                                            <MenuLink category={category} type={type}>
                                                {category}
                                            </MenuLink>
                                        </li>
                                    ))}
                                </ul>
                            ))}
                        </ul>
                    </div>

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