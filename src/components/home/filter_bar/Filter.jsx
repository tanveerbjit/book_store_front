
import FilterItem from './FilterItem';
import CommonFilterItem from './CommonFilteItem';
import FilterHeader from './FilterHeader';
import React, { useContext } from 'react';
import { ProductContext } from '../../../App';

function Filter() {

    const { book, isLoading, error} = useContext(ProductContext);
    let entries = [];
   
    if(!isLoading){
        entries = Object.entries(book.filter_data);
        console.log(entries)
    }

    
  return (
    <>

    {isLoading ? (
        <div>Loading...</div>
      ) : error ? (
        <div>Error: {error.message}</div>
      ) : book.products && book.products.length > 0 ? (
        <>
          {entries.map((element,i) => (
        <>
          <FilterHeader header={element[0]} key={i}/>

          <div className="bg-light p-4 mb-30">
            <CommonFilterItem/>
              {element[1].map((item, j) => (
                <FilterItem item={item} key={j}/>
              ))}
           </div>

        </>
           
        ))}
        </>
      ) : (
        <div>No category found.</div>
      )}

    
      
      
        
 
     
</>
    
  );
}

export default Filter;
