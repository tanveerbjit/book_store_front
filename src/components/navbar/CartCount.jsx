import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ProductContext } from '../../App';

function CartCount() {
  const { cart } = useContext(ProductContext);

  return (
    <div className="navbar-nav ml-auto py-0 d-none d-lg-block">
      <Link to="/cart" className="btn px-0 ml-3">
        <i className="fas fa-shopping-cart text-primary fa-lg"></i>
        <span className="badge text-secondary border border-secondary rounded-circle" style={{ paddingBottom: '2px' }}>{cart}</span>
      </Link>
    </div>
  );
}

export default CartCount;
