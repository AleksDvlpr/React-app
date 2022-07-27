import React from 'react';
import { Link } from 'react-router-dom';
import './EmployeeList.css';
import EmployeeLink from './EmployeeLink';
import TotalEmployees from './TotalEmployees';

const EmployeeList = () => {
  return (
    <div className='container employee'>
      <h1>Employees</h1>
      <div className="top-side">
        <Link to='/employee/create' className='btn btn-success'>Create employee</Link>
        <TotalEmployees />
      </div>
      <div className='list-group'>
        <EmployeeLink />
        <a href='#' className='list-group-item list-group-item-action active' aria-current='true'>
          The current link item
        </a>
        <a href='#' className='list-group-item list-group-item-action'>A second link item</a>
        <a href='#' className='list-group-item list-group-item-action'>A third link item</a>
        <a href='#' className='list-group-item list-group-item-action'>A fourth link item</a>
        <a href='#' className='list-group-item list-group-item-action disabled' tabIndex='-1' aria-disabled='true'>A
          disabled link item</a>
      </div>
    </div>
  );
};

export default EmployeeList;