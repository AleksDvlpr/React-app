import React from 'react';
import BackBtn from './BackBtn';

const EmployeeDetail = () => {
  return (
    <div className='container'>
      <h1>Detail employee</h1>
      <BackBtn/>
      <table className='table'>
        <thead>
        <tr>
          <th scope='col'>#</th>
          <th scope='col'>Field</th>
          <th scope='col'>Item</th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <th scope='row'>1</th>
          <td>Name</td>
          <td>Otto</td>
        </tr>
        <tr>
          <th scope='row'>2</th>
          <td>Second name</td>
          <td>Thornton</td>
        </tr>
        <tr>
          <th scope='row'>3</th>
          <td>Gender</td>
          <td>@twitter</td>
        </tr>
        <tr>
          <th scope='row'>4</th>
          <td>Age</td>
          <td>@twitter</td>
        </tr>
        <tr>
          <th scope='row'>5</th>
          <td>Profession</td>
          <td>@twitter</td>
        </tr>
        </tbody>
      </table>
    </div>
  );
};

export default EmployeeDetail;