import React, { useContext } from 'react';
import { ProductContext } from '../App';
import ProductSorting from './home/main/sort/ProductSorting';
import ProductList from './home/main/product/ProductList';
import ProductPagination from './home/main/pagination/ProductPagination';
import Loader from './Loader';


function Product() {
  const { book, isLoading, error} = useContext(ProductContext);
  

  return (
    <div className="col-lg-9 col-md-8">
      <ProductSorting />
      {isLoading ? (
        <div style={{display:"flex",justifyContent:"center"}}>
        <Loader/>
        </div>
      ) : error ? (
        <div>Error: {error.message}</div>
      ) : book.products && book.products.length > 0 ? (
        <>
          <ProductList/>
          <ProductPagination />
        </>
      ) : (
        <div>No products found.</div>
      )}
    </div>
  );
}

export default Product;

