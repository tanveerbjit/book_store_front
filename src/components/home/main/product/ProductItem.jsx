import { Link } from 'react-router-dom';
import React, { useContext, useState } from 'react';
import { ProductContext } from '../../../../App';

function ProductItem({product}) {
    const {cart, setCart} = useContext(ProductContext);
    const [isCart,setIsCart] = useState(false);
    
  return (
    <div className="col-lg-3 col-md-6 col-sm-6 pb-1 "  key={product._id}>
      <div className="product-item bg-light mb-4">

        {/* Product image and actions */}

        <div className="product-img position-relative overflow-hidden ">
          <img className="img-fluid w-100 " src={product.image} alt="Product" />
          <div className="product-action">

            <Link className={
    isCart
      ? "btn btn-outline-dark btn-square disabled bg-dark text-white"
      : "btn btn-outline-dark btn-square"
  } onClick={() => {setCart(cart+1); setIsCart(!isCart)}}> 
  
              <i className="fa fa-shopping-cart"></i>
            </Link>
            <Link to={`product/detail/${product._id}`} className="btn btn-outline-dark btn-square">
              <i className="fa fa-search"></i>
            </Link>
          </div>
        </div>

        {/* Product details */}
        <div className="text-center py-4">
  <Link to={`product/detail/${product._id}`} className="h6 text-decoration-none text-truncate" href="#">
    {product.name}
  </Link>
  <div className="d-flex align-items-center justify-content-center mt-2">
    <h5>{product.price}</h5>
    <h6 className="text-muted ml-2">
      <del>$00.00</del>
    </h6>
  </div>
  <div className="d-flex align-items-center justify-content-center mb-1">
    {Array.from({ length: 5 }, (_, index) => (
  <small key={index} className={`text-primary mr-1 ${product.rating > index ? 'fa fa-star' : 'far fa-star'}`}></small>
))}
    {product.num_of_people ? <small>({product.num_of_people ? product.num_of_people : 0})</small>:""}
    
  </div>
</div>


      </div>
    </div>
  );
}

export default ProductItem;
