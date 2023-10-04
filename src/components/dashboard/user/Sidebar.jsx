// Sidebar.js
import React from 'react';
import { Link } from 'react-router-dom';

function Sidebar() {
  return (
    <div className="col-2 col-sm-1 col-md-1 col-lg-2 ps-0 pe-0 pe-lg-3">
              <div className="side-bar side-bar-two position-sticky docboard-bg-soft d-none d-md-none d-lg-block side-bar-border">
                <ul className="list-group">
                 
                  <li className="list-group-item item-border side-bar-content-border">
                    <Link to={"/user"} className="d-block w-100 sidebar-content-color text-decoration-none">
                      <span className="me-1">
                        <img src="https://valerehealthcare.co/web/front/assets/images/dashboard/patient/icon/profile.svg" alt="Icon" />
                      </span>

                      <span className="text-gray-dark pl-1">My Profile</span>
                    </Link>
                  </li>
                  <li className="list-group-item  side-bar-content-border text-decoration-none">
                    <Link to={"/user/order"} className="d-block w-100 sidebar-content-color text-decoration-none">
                      <span className="me-1">
                        <img src="https://valerehealthcare.co/web/front/assets/images/dashboard/patient/icon/reports.svg" alt="Icon" />
                      </span>
                       <span className="pl-1">Order</span>
                    </Link>
                  </li>
                 
                  <li className="list-group-item  side-bar-content-border text-decoration-none">
                    <Link to={"/user/order"} className="d-block w-100 sidebar-content-color text-decoration-none">
                      <span className="me-1">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="22"
        viewBox="0 96 960 960"
        width="22"
        fill="#435d91"
      >
        <path d="m694 936 53-54-93-93-54 53q-20 20-19.5 47t19.5 47q20 19 47 19.5t47-19.5Zm94-95 54-53q20-20 19.5-47T841 694q-20-20-46.28-20T748 694l-53 54 93 93Zm-52 137q-37 37-89 37t-89-37q-37-37-37-89t37-89l148-148q37-37 89-37t89 37q37 37 37 89t-37 89L736 978ZM180 876V276v600Zm0 60q-24.75 0-42.375-17.625T120 876V276q0-24.75 17.625-42.375T180 216h205q5-35 32-57.5t63-22.5q36 0 63 22.5t32 57.5h205q24.75 0 42.375 17.625T840 276v284q-15-4-30-5t-30 1V276H180v600h281q-1 15 .5 30t5.5 30H180Zm300-677q14 0 24.5-10.5T515 224q0-14-10.5-24.5T480 189q-14 0-24.5 10.5T445 224q0 14 10.5 24.5T480 259ZM280 436v-60h400v60H280Zm0 170v-60h400v49q-3 2-6.5 5t-6.5 6H280Zm0 170v-60h277l-42 42q-5 5-8.5 9t-7.5 9H280Z"></path>
      </svg>
      <span className='pl-1'>Purchase</span>
    </span>
                    </Link>
                  </li>
                  <li className="list-group-item  side-bar-content-border text-decoration-none">
                    <Link to={"/user/setting"} className="d-block w-100 sidebar-content-color text-decoration-none">
                      <span className="me-1">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="22"
        viewBox="0 96 960 960"
        width="22"
        fill="#435d91"
      >
        <path d="m694 936 53-54-93-93-54 53q-20 20-19.5 47t19.5 47q20 19 47 19.5t47-19.5Zm94-95 54-53q20-20 19.5-47T841 694q-20-20-46.28-20T748 694l-53 54 93 93Zm-52 137q-37 37-89 37t-89-37q-37-37-37-89t37-89l148-148q37-37 89-37t89 37q37 37 37 89t-37 89L736 978ZM180 876V276v600Zm0 60q-24.75 0-42.375-17.625T120 876V276q0-24.75 17.625-42.375T180 216h205q5-35 32-57.5t63-22.5q36 0 63 22.5t32 57.5h205q24.75 0 42.375 17.625T840 276v284q-15-4-30-5t-30 1V276H180v600h281q-1 15 .5 30t5.5 30H180Zm300-677q14 0 24.5-10.5T515 224q0-14-10.5-24.5T480 189q-14 0-24.5 10.5T445 224q0 14 10.5 24.5T480 259ZM280 436v-60h400v60H280Zm0 170v-60h400v49q-3 2-6.5 5t-6.5 6H280Zm0 170v-60h277l-42 42q-5 5-8.5 9t-7.5 9H280Z"></path>
      </svg>
      <span className='pl-1'>Setting</span>
    </span>
                    </Link>
                  </li>
                  
                </ul>
              </div>
            </div>
  );
}

export default Sidebar;
