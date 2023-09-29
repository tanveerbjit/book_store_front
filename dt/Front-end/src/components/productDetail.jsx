import React from 'react';
import { useParams } from 'react-router-dom';

function ProductDetails() {
  const { id } = useParams();
  console.log(id)
  return (
    <div className="container-fluid pb-5">
      <div className="row px-xl-5">
        <div className="col-lg-5 mb-30">
          <div id="product-carousel" className="carousel slide" data-ride="carousel">
            <div className="carousel-inner bg-light">
              <div className="carousel-item active">
                <img className="w-100 h-100" src="img/product-1.jpg" alt="Image" />
              </div>
              <div className="carousel-item">
                <img className="w-100 h-100" src="img/product-2.jpg" alt="Image" />
              </div>
              <div className="carousel-item">
                <img className="w-100 h-100" src="img/product-3.jpg" alt="Image" />
              </div>
              <div className="carousel-item">
                <img className="w-100 h-100" src="img/product-4.jpg" alt="Image" />
              </div>
            </div>
            <a className="carousel-control-prev" href="#product-carousel" data-slide="prev">
              <i className="fa fa-2x fa-angle-left text-dark"></i>
            </a>
            <a className="carousel-control-next" href="#product-carousel" data-slide="next">
              <i className="fa fa-2x fa-angle-right text-dark"></i>
            </a>
          </div>
        </div>

        <div className="col-lg-7 h-auto mb-30">
          <div className="h-100 bg-light p-30">
            <h3>Product Name Goes Here</h3>
            <div className="d-flex mb-3">
              <div className="text-primary mr-2">
                <small className="fas fa-star"></small>
                <small className="fas fa-star"></small>
                <small className="fas fa-star"></small>
                <small className="fas fa-star-half-alt"></small>
                <small className="far fa-star"></small>
              </div>
              <small className="pt-1">(99 Reviews)</small>
            </div>
            <h3 className="font-weight-semi-bold mb-4">$150.00</h3>
            <p className="mb-4">Volup erat ipsum diam elitr rebum et dolor. Est nonumy elitr erat diam stet sit clita ea. Sanc ipsum et, labore clita lorem magna duo dolor no sea Nonumy</p>
            
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
        </div>
      </div>
      <div className="row px-xl-5">
        <div className="col">
          <div className="bg-light p-30">
            <div className="nav nav-tabs mb-4">
              <a className="nav-item nav-link text-dark">Reviews</a>
            </div>
            <div className="tab-content">
              <div className="tab-pane active">
                <div className="row">
                  <div className="col-md-6">
                    <h4 className="mb-4">1 review for "Product Name"</h4>
                    <div className="media mb-4">
                      <img src="img/user.jpg" alt="Image" className="img-fluid mr-3 mt-1" style={{ width: "45px" }} />
                      <div className="media-body">
                        <h6>John Doe<small> - <i>01 Jan 2045</i></small></h6>
                        <div className="text-primary mb-2">
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star-half-alt"></i>
                          <i className="far fa-star"></i>
                        </div>
                        <p>Diam amet duo labore stet elitr ea clita ipsum, tempor labore accusam ipsum et no at. Kasd diam tempor rebum magna dolores sed sed eirmod ipsum.</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <h4 className="mb-4">Leave a review</h4>
                    <small>Your email address will not be published. Required fields are marked *</small>
                    <div className="d-flex my-3">
                      <p className="mb-0 mr-2">Your Rating * :</p>
                      <div className="text-primary">
                        <i className="far fa-star"></i>
                        <i className="far fa-star"></i>
                        <i className="far fa-star"></i>
                        <i className="far fa-star"></i>
                        <i className="far fa-star"></i>
                      </div>
                    </div>
                    <form>
                      <div className="form-group">
                        <label htmlFor="message">Your Review *</label>
                        <textarea id="message" cols="30" rows="5" className="form-control"></textarea>
                      </div>
                      <div className="form-group">
                        <label htmlFor="name">Your Name *</label>
                        <input type="text" className="form-control" id="name" />
                      </div>
                      <div className="form-group">
                        <label htmlFor="email">Your Email *</label>
                        <input type="email" className="form-control" id="email" />
                      </div>
                      <div className="form-group mb-0">
                        <input type="submit" value="Leave Your Review" className="btn btn-primary px-3" />
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
