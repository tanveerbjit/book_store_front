import React, { useContext} from 'react';
import { ProductContext } from '../../App';


function SearchBar() {
  
  const { setApiUrl} = useContext(ProductContext);
 

  const searching = (e) => {

    // Handling search
    setApiUrl(`/product/all/?query=${e.target.value}`);
    

  };
  

  return (


    <div className="input-group">
        <input type="text" className="form-control" placeholder="Search for products" onChange={searching}/>
        <div className="input-group-append">
          <span className="input-group-text bg-transparent text-primary">
            <i className="fa fa-search"></i>
          </span>
        </div>
      </div>
    // <form onSubmit={handleSubmit(onSubmit)}>
    //   <div className="input-group">
    //     <Controller
    //       name="search"
    //       control={control}
    //       defaultValue=""
    //       rules={{ maxLength: 20 }} // Add maxLength rule
    //       render={({ field }) => (
    //         <input
    //           {...field}
    //           type="text"
    //           className="form-control"
    //           placeholder="Search for products"
    //         />
    //       )}
    //     />
    //     <div className="input-group-append">
    //     <button type="submit" className="btn btn-primary">
    //     Search
    //     </button>
    //     </div>
    //   </div>
    //   {errors.search && <p className="text-danger">Max length exceeded (max 20 characters).</p>}
      
    // </form>
  );
}

export default SearchBar;

