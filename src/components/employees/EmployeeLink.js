import React from 'react';
import { Link } from 'react-router-dom';
import './EmployeeList.css';

const EmployeeLink = (props) => {
  const employee = props.data;
  const employeeTitle = `${employee.name} ${employee.secondName} (${employee.profession})`;

  return (
    <Link
      to={employee.id}
      className="list-group-item list-group-item-action employee-link"
      aria-current="true"
    >
      {employeeTitle}
      <button className="btn btn-danger btn-sm remove-employee">Remove</button>
    </Link>
  );
};

export default EmployeeLink;
