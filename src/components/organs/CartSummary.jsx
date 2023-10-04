import React from 'react';
import PriceSummary from '../molicule/PriceSummary';
import Button from '../atoms/Button';

function CartSummary({ totalDetail }) {
  return (
    <div className="bg-light p-30 mb-5">
      <PriceSummary totalValue={totalDetail.totalValue} />
      <div className="pt-2">
        <div className="d-flex justify-content-between mt-2">
          <h5>Total</h5>
          <h5>${totalDetail.totalValue}</h5>
        </div>
        <Button className="btn btn-block btn-primary font-weight-bold my-3 py-3">
          Proceed To Checkout
        </Button>
      </div>
    </div>
  );
}

export default CartSummary;
