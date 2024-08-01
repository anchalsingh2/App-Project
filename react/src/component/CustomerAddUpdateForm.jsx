//anchalSingh
import React from 'react';

const CustomerAddUpdateForm = ({ customer, onInputChange, onSave, onDelete, onCancel }) => {
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    onInputChange(name, value);
  };

  const handleButtonClick = (action) => {
    if (action === 'Delete') {
      onDelete();
    } else if (action === 'Save') {
      onSave();
    } else if (action === 'Cancel') {
      onCancel();
    }
  };

 
  return (
<div classname= "form-box-container">
<form>
              <h5 className='updatebox'>Update</h5>
              
              <table id="add-update" >
              <tbody>
              <tr>
                <td className={'label'} >Name:</td>
                <td><input
                  type="text"
                  name="name"
                  value={customer.name} onChange={handleInputChange}
                  placeholder="Customer Name"
                  required /></td>
              </tr>
              <tr>
                <td className={'label'} >Email:</td>
                <td><input
                  type="email"
                  name="email"
                  value={customer.email} onChange={handleInputChange}
                  placeholder="name@company.com" /></td>
              </tr>
            <tr>
                <td className={'label'} >Pass:</td>
                <td><input
                  type="text"
                  name="password"
                 
                  value={customer.password} onChange={handleInputChange}
                  placeholder="password" /></td>
              </tr>
           

           
             
              <tr className="button-bar">
              <td colSpan="2">
                <button type="button" onClick={() => handleButtonClick('Delete')}>Delete</button>
                <button type="button" onClick={() => handleButtonClick('Save')}>Save</button>
                <button type="button" onClick={() => handleButtonClick('Cancel')}>Cancel</button>
              </td>
              </tr>
              </tbody>
              </table>
              </form>
            
        
         </div>   
    )}
    export default CustomerAddUpdateForm;