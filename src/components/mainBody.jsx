import React from 'react';
import Sidebar from './sidebar';
import Product from './product';

function MainBody({children}) {
  return (
    
    <div className="container-fluid">
        <div className="row px-xl-5">
          
          {...children}
    
        </div>
    </div>
    
  )
}

export default MainBody