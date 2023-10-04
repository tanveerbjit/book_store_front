import React from 'react';

function ProductInfo({info}) {
  return (
    <div className="h-100 bg-light p-30">
      <h3>{info.name}</h3>
      
      {/* Product Rating */}


      <div className="d-flex mb-3">
        <div className="text-primary mr-2">
          {Array.from({ length: 5 }, (_, index) => (
  <small key={index} className={`text-primary mr-1 ${info.rating > index ? 'fa fa-star' : 'far fa-star'}`}></small>
))}
        </div>
        <small className="pt-1">({info.num_of_people > 0 ? info.num_of_people :0} Reviews)</small>
      </div>
      
      {/* Product Price */}
      <h3 className="font-weight-semi-bold mb-4">${info.price}</h3>
      
      {/* Product Description */}
      <p className="mb-4">
      {info.description}
      </p>
      
      {/* Quantity Selector and Add to Cart Button */}
      <div className="d-flex align-items-center mb-4 pt-2">
        <div className="input-group quantity mr-3" style={{ width: "130px" }}>
          <div className="input-group-btn">
            <button className="btn btn-primary btn-minus">
              <i className="fa fa-minus"></i>
            </button>
          </div>
          <input type="text" className="form-control bg-secondary border-0 text-center" value="1" />
          <div className="input-group-btn">
            <button className="btn btn-primary btn-plus">
              <i className="fa fa-plus"></i>
            </button>
          </div>
        </div>
        <button className="btn btn-primary px-3"><i className="fa fa-shopping-cart mr-1"></i> Add To Cart</button>
      </div>
    </div>
  );
}

export default ProductInfo;
