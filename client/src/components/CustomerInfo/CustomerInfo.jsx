import React, { useState } from 'react';
import './Customerinfo.css';

function CustomerInfo (Props) {
  const [showProducts, setShowProducts] = useState(false);
  function handleClick () {
    setShowProducts(!showProducts);
  }

  return (
    <div className="customerinfo-container">
      {Props.customer ? (
        <div className="table-container">
          <table>
            <tr>
              <td>Customer ID</td>
              <td>{Props.customer.customerId}</td>
            </tr>
            <tr>
              <td>Document Type</td>
              <td>{Props.customer.docType}</td>
            </tr>
            <tr>
              <td>Document Number</td>
              <td>{Props.customer.docNum}</td>
            </tr>
            <tr>
              <td>Given Name</td>
              <td>{Props.customer.givenName}</td>
            </tr>
            <tr>
              <td>Family Name</td>
              <td>{Props.customer.familyName1}</td>
            </tr>
            <tr>
              <td>Email</td>
              <td>{Props.customer.email}</td>
            </tr>
            <tr>
              <td>Phone</td>
              <td>{Props.customer.phone}</td>
            </tr>
            <tr>
              <td>Products</td>
              <td>
                {Props.customer.products.length} <button onClick={handleClick}>show products</button>
              </td>
            </tr>
          </table>
        </div>
      ) : (
        ''
      )}
      <div className="products-container">
        {showProducts
          ? Props.customer.products.map((el) => (
            <table key={el.id} className="products-table">
              <tr>
                <td>Product Name</td>
                <td>{el.productName}</td>
              </tr>
              <tr>
                <td>Product Type Name</td>
                <td>{el.productTypeName}</td>
              </tr>
              <tr>
                <td>Numeracion Terminal</td>
                <td>{el.numeracionTerminal}</td>
              </tr>
              <tr>
                <td>Soldt At </td>
                <td>{el.soldAt}</td>
              </tr>
              <tr>
                <td>Customer Id</td>
                <td>{el.customerId}</td>
              </tr>
            </table>
          ))
          : ''}
      </div>
    </div>
  );
}
export default CustomerInfo;
