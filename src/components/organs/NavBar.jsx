import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import CategoriesDropdown from './CategoriesDropdown';
import CartCount from '../navbar/CartCount';
import UserIcon from '../topbar/UserIcon';
import {ListData} from '../../util/List';
import List from '../atoms/List';


function Navbar() {
  const [isCollapsed, setCollapsed] = useState(false);

  const toggleCollapse = () => {
    setCollapsed(!isCollapsed);
  };

  console.log(ListData)

  return (
    <div className="container-fluid bg-dark mb-30 ">
      <div className="row px-xl-5">
        <CategoriesDropdown isCollapsed={isCollapsed} toggleCollapse={toggleCollapse} />
        <CartCount />
        <UserIcon/>
      </div>
    </div>
  );
}

export default Navbar;
