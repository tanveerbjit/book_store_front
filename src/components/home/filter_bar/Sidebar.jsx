import React, { useContext, useState } from 'react';

import Filter from './filter';


function Sidebar() {
 
  return (
    <div className="col-lg-3 col-md-4">
  
      <Filter/>
  
    </div>
  );
}

export default Sidebar;
