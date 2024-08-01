//anchalsingh
import React from 'react';

const CustomerList = ({ customers, selectedCustomerId, onCustomerSelect }) => {
    const handleCustomerClick = (customer) => {
      onCustomerSelect(customer);
    };
    return (
<div>
      <h5 classname = "customerList">Customer List</h5>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Pass</th>
              </tr>
            </thead>
            <tbody> 
            {customers.map(customer => (
            <tr
              key={customer.id}
              onClick={() => handleCustomerClick(customer)}
              className={selectedCustomerId === customer.id ? 'selected' : ''}
            >
              <td>{customer.name}</td>
              <td>{customer.email}</td>
              <td>{customer.password}</td>
            </tr>
          ))}
          </tbody>
        
          </table> 
         

      </div> 
    );
  }

    export default CustomerList;