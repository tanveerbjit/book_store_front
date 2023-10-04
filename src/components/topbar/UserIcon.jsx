import React from 'react';
import { Link } from 'react-router-dom';

function UserIcon() {
  return (
    <div className="btn-group  ml-3">
      <Link to="/login"><i className="fa-solid fa-user fa-lg"></i></Link>
    </div>
  );
}

export default UserIcon;
