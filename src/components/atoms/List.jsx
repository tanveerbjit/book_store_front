import React from 'react';
import { Link } from 'react-router-dom';


function List({className,link=null,payload,onClick=null}) {
  return (

    <li className="nav-item" onClick={onClick}>
    <Link className="nav-link"  to={link}>{payload}</Link>
    </li>
    
  );
}

export default List;