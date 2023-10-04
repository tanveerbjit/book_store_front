import React from 'react';
import Button from '../atoms/Button'; // Make sure you have the correct path
import Input from '../atoms/Input'; // Make sure you have the correct path

const CartItem = ({ order, cartOperation }) => {
  const cartHandler = (id, operation) => {
    cartOperation(id, operation);
  };

  return (
    <tr>
      <td className="align-middle">
        <Button className="btn btn-sm btn-primary btn-plus" payload={<i className="fa fa-minus"></i>} />
      </td>
      <td className="align-middle">
        <Input type="text" value={order.quantity} onChange={(e) => cartHandler(order.productDetails._id, e.target.value)} />
      </td>
    </tr>
  );
};

export default CartItem;
