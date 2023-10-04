import React from 'react';

function PriceSummary({ totalValue }) {
  return (
    <div className="border-bottom pb-2">
      <div className="d-flex justify-content-between mb-3">
        <h6>Subtotal</h6>
        <h6>${totalValue}</h6>
      </div>
      <div className="d-flex justify-content-between">
        <h6 className="font-weight-medium">Shipping</h6>
        <h6 className="font-weight-medium">${0}</h6>
      </div>
    </div>
  );
}

export default PriceSummary;
