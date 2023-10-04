import React from 'react';

function ProductPagination() {
  return (
    <div className="col-12">
      <nav>
        <ul className="pagination justify-content-center">
          {/* Pagination links */}
          {/* Add your pagination links code here */}
          <li className="page-item disabled">
                <a className="page-link" >
                  Previous
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" >
                  1
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" >
                  Next
                </a>
              </li>
        </ul>
      </nav>
    </div>
  );
}

export default ProductPagination;
