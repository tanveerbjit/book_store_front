import React from 'react';
import { Link } from 'react-router-dom';

function CategoryLink({ to, onClick, name }) {
  return (
    <Link to={to} className="nav-link" onClick={onClick}>
      {name}
    </Link>
  );
}

export default CategoryLink;
