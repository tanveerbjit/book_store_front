import React, { useState } from 'react';
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
           {
            ListData.map((element)=><List payload={element.payload} link={element.link}/>)
           }
      </div>
    </div>
  );
}

export default Navbar;
