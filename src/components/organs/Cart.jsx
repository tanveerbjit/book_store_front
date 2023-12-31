// Cart.js
import React from 'react';
import CartItem from '../molecule/CartItem';
import CartSummary from '../cart/CartSummary';
import { useCart } from '../../hooks/useCartOperations';
import Loader from '../Loader';
const Cart = () => {
  const { order, isLoading, cartOperation } = useCart(); // Use the custom hook

  return (
    <div className="container-fluid">
      <div className="row px-xl-5">
        <div className="col-lg-8 table-responsive mb-5">
          <table className="table table-light table-borderless table-hover text-center mb-0">
            <thead className="thead-dark">
              <tr>
                <th>Products</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
                <th>Remove</th>
              </tr>
            </thead>
            <tbody className="align-middle">
              {isLoading ? (
                order ? (
                  order.orderItems.map((orderItem, index) => (
                    <CartItem
                      key={index}
                      order={orderItem}
                      cartOperation={cartOperation}
                    />
                  ))
                ) : (
                  <div>No order items available.</div>
                )
              ) : (
                <div style={{display:"flex",justifyContent:"center"}}>
        <Loader/>
        </div>
              )
              
              }
            </tbody>
          </table>
        </div>
        <div className="col-lg-4">
          <h5 className="section-title position-relative text-uppercase mb-3">
            <span className="bg-secondary pr-3">Cart Summary</span>
          </h5>
          {isLoading ? (
            order ? (
              <CartSummary totalDetail={order} />
            ) : (
              <div>No order items available.</div>
            )
          ) : (
            <div style={{width:"100vw",display:"flex",justifyContent:"center"}}>
        No data available
        </div>
          )}
        </div>
      </div>
    </div>
  );
};


export default Cart;
