import React from 'react';
import {Link} from 'react-router-dom';
import './EmployeeList.css';

const EmployeeLink = () => {
  return (
    <Link to="#" className="list-group-item list-group-item-action employee-link" aria-current="true">The current link item
      <button className="btn btn-danger btn-sm remove-employee">Remove</button>
    </Link>
  );
}

export default EmployeeLink;