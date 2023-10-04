import React from 'react';
import NavigationLinks from './NavigationLinks';
import LanguageSelector from './LanguageSelector';
import UserIcon from './UserIcon';
import SearchBar from './SearchBar';
import CustomerService from './CustomerService';
import { Link } from 'react-router-dom';

function TopBar() {
  return (
    <div className="container-fluid">
      {/* <div className="row bg-secondary py-1 px-xl-5">
        <div className="col-lg-6 d-none d-lg-block">
          <NavigationLinks />
        </div>

        <div className="col-lg-6 text-center text-lg-right">
          <LanguageSelector />
          <UserIcon />
        </div>
      </div> */}

      <div className="row align-items-center bg-light py-3 px-xl-5 d-none d-lg-flex">
        <div className="col-lg-4">
          <Link to={'/'} className='text-decoration-none'>
            <span className="h1 text-uppercase text-primary bg-dark px-2">Book</span>
            <span className="h1 text-uppercase text-dark bg-primary px-2 ml-n1">Shop</span>
          </Link>
        </div>
        <div className="col-lg-4 col-6 text-left">
          <SearchBar />
        </div>
        <CustomerService />
      </div>
    </div>
  );
}

export default TopBar;
