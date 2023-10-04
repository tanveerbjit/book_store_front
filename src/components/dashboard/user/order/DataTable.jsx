import React, { useState } from 'react';
import "./modal.css"

const DataTable = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div className="container">
        <table className="table table-hover mt-4">
          <thead>
            <tr className="text-center">
              <th className="border border-primary">Order ID</th>
              <th className="border border-primary">Order Date</th>
              <th className="border border-primary">Total Amount</th>
              <th className="border border-primary">View Order</th>
              <th className="border border-primary">Order Status</th>
            </tr>
          </thead>
          <tbody>
            <tr className="text-center">
              <td className="border border-primary">12345</td>
              <td className="border border-primary">12.09.2023</td>
              <td className="border border-primary">5000</td>
              <td className="border border-primary">
                <i class="fa-regular fa-eye btn" onClick={openModal}></i>
              </td>
              <td className="border border-primary">pending</td>
            </tr>
          </tbody>
        </table>
      </div>

      {isModalOpen && (
   
        <div className="modals">
          <div className="modals-content" >
            <span className="closes" onClick={closeModal}>
              &times;
            </span>
            <h2>Order Details</h2>
            <p>Order content goes here...</p>
          </div>
        </div>
      )}
    </>
  );
};

export default DataTable;
