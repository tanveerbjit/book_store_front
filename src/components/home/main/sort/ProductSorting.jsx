import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function ProductSorting() {
  const [sortingDropdownVisible, setSortingDropdownVisible] = useState(false);
  const [showingDropdownVisible, setShowingDropdownVisible] = useState(false);
  const limitPerPage = [10,20,30];
  const sortBy = ['Price Low','Price High', 'Rating High', 'Rating Low', 'Discount High', 'Discount Low', 'Stock High', 'Stock Low'];


  const toggleSortingDropdown = (e) => {
    e.stopPropagation(); // Stop the event from propagating to the document
    setSortingDropdownVisible(!sortingDropdownVisible);
  };

  const toggleShowingDropdown = (e) => {
    e.stopPropagation(); // Stop the event from propagating to the document
    setShowingDropdownVisible(!showingDropdownVisible);
  };

  const handleSortingItemClick = () => {
    setSortingDropdownVisible(false); // Close the sorting dropdown when an item is clicked
  };

  const handleShowingItemClick = () => {
    setShowingDropdownVisible(false); // Close the showing dropdown when an item is clicked
  };

  useEffect(() => {
    const closeDropdownsOnClickOutside = () => {
      setSortingDropdownVisible(false);
      setShowingDropdownVisible(false);
    };

    document.addEventListener('click', closeDropdownsOnClickOutside);

    return () => {

    document.removeEventListener('click', closeDropdownsOnClickOutside);

    };
  }, []);

  return (
    <div className="col-12 pb-1">
      <div className="d-flex align-items-center justify-content-between mb-4">
        {/* Sorting options */}
        <div className="ml-2">
          <div className="btn-group">
            <button
              type="button"
              className="btn btn-sm btn-light dropdown-toggle"
              onClick={toggleSortingDropdown}
            >
              Sorting
            </button>
            <div
              className={`dropdown-menu dropdown-menu-right ${sortingDropdownVisible ? 'show' : ''}`}
            >
              {sortBy.map((element)=><Link className="dropdown-item" onClick={handleSortingItemClick}>
                {element}
              </Link>)}
            </div>
          </div>
          <div className="btn-group ml-2">
            <button
              type="button"
              className="btn btn-sm btn-light dropdown-toggle"
              onClick={toggleShowingDropdown}
            >
              Showing
            </button>
            <div
              className={`dropdown-menu dropdown-menu-right ${showingDropdownVisible ? 'show' : ''}`}
            >
              {
                limitPerPage.map((element,index)=><Link className="dropdown-item"  onClick={handleShowingItemClick} key={index}>
                  {element}
              </Link>)
              }
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductSorting;
