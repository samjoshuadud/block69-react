import React, { useState, useEffect } from 'react';
import Image from 'next/image';

// Custom hook to get and update window size
function useWindowSize() {
  const [windowSize, setWindowSize] = useState({
    width: undefined,
  });

  useEffect(() => {
    // Handler to call on window resize
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
      });
    }
    
    // Add event listener
    window.addEventListener("resize", handleResize);
    
    // Call handler right away so state gets updated with initial window size
    handleResize();
    
    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []); // Empty array ensures that effect is only run on mount and unmount

  return windowSize;
}

export default function PaginatedMenu({ items }) {
    // State for current page and items per page
    const [currentPage, setCurrentPage] = useState(0);
    const [itemsPerPage, setItemsPerPage] = useState(2);
    const [isAnimating, setIsAnimating] = useState(false);
    
    // Get current window size
    const size = useWindowSize();
  
    // Effect to update itemsPerPage based on window width
    useEffect(() => {
      if (size.width >= 1280) { // xl
        setItemsPerPage(8);
      } else if (size.width >= 1024) { // lg
        setItemsPerPage(6);
      } else if (size.width >= 768) { // md
        setItemsPerPage(4);
      } else { // sm and below
        setItemsPerPage(2);
      }
      setCurrentPage(0); // Reset to first page when changing items per page
    }, [size.width]);

    // Calculate start and end index for current page
    const startIndex = currentPage * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    
    // Slice the items array to get only the items for the current page
    const currentItems = items.slice(startIndex, endIndex);
  
    const totalPages = Math.ceil(items.length / itemsPerPage);

    // Handler for next page button
    const handleNext = () => {
      if (endIndex < items.length) {
        setIsAnimating(true);
        setTimeout(() => {
          setCurrentPage(currentPage + 1);
          setIsAnimating(false);
        }, 300);
      }
    };
  
    // Handler for previous page button
    const handlePrevious = () => {
      if (currentPage > 0) {
        setIsAnimating(true);
        setTimeout(() => {
          setCurrentPage(currentPage - 1);
          setIsAnimating(false);
        }, 300);
      }
    };

    // Auto-next effect
    useEffect(() => {
      // Only set up the timer if there's more than one page
      if (totalPages > 1) {
        const timer = setInterval(() => {
          setIsAnimating(true);
          setTimeout(() => {
            setCurrentPage((prevPage) => 
              endIndex >= items.length ? 0 : prevPage + 1
            );
            setIsAnimating(false);
          }, 300);
        }, 10000); // time interval for auto-next

        // Clean up the timer
        return () => clearInterval(timer);
      }
    }, [currentPage, items.length, itemsPerPage, endIndex, totalPages]);

    // Determine whether to show navigation buttons
    const showNavigation = totalPages > 1;

    return (
        <div>
            {/* Grid to display menu items */}
            <div className={`grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 py-6 px-3 justify-items-center transition-opacity duration-300 ease-in-out ${isAnimating ? 'opacity-0' : 'opacity-100'}`}>
                {currentItems.map((item, index) => (
                    <button key={index} className="flex flex-col cursor-default items-center justify-center">
                        {/* Image container */}
                        <div className="hover:scale-110 transition-all duration-200 w-36 h-36 relative">   
                            <Image 
                                src={item.image}
                                alt={item.name}
                                layout="fill"
                                objectFit="cover"
                                className="rounded-full cursor-pointer"
                            />
                        </div>
                        {/* Item name */}
                        <h2 className="text-center mt-2 text-sm leading-tight h-10 overflow-hidden cursor-pointer hover:font-bold hover:scale-110 transition-all duration-200">
                            {item.name}
                        </h2>
                    </button>
                ))}
            </div>
            {/* Navigation buttons */}
            {showNavigation && (
                <div className="flex justify-center mt-8 space-x-4">
                    {/* Previous page button */}
                    <button 
                        onClick={handlePrevious} 
                        disabled={currentPage === 0 || isAnimating}
                        className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 
                            ${currentPage === 0 || isAnimating
                                ? 'bg-gray-300 text-gray-500 cursor-not-allowed' 
                                : 'bg-black text-white hover:bg-gray-800'}`}
                    >
                        Previous
                    </button>
                    {/* Next page button */}
                    <button 
                        onClick={handleNext} 
                        disabled={endIndex >= items.length || isAnimating}
                        className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 
                            ${endIndex >= items.length || isAnimating
                                ? 'bg-gray-300 text-gray-500 cursor-not-allowed' 
                                : 'bg-black text-white hover:bg-gray-800'}`}
                    >
                        Next
                    </button>
                </div>
            )}
        </div>
    );
}
