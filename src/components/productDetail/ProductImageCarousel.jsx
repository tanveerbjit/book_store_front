import React from 'react';

function ProductImageCarousel({img}) {
  return (
    <div id="product-carousel" className="carousel slide" data-ride="carousel">
      <div className="carousel-inner bg-light">
        <div className="carousel-item active">
          <img className="w-100 h-100" src={img} alt="Image" />
        </div>
      </div>
      {/* <a className="carousel-control-prev" href="#product-carousel" data-slide="prev">
        <i className="fa fa-2x fa-angle-left text-dark"></i>
      </a>
      <a className="carousel-control-next" href="#product-carousel" data-slide="next">
        <i className="fa fa-2x fa-angle-right text-dark"></i>
      </a> */}
    </div>
  );
}

export default ProductImageCarousel;
