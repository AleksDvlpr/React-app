import React from 'react';
import BackBtn from './BackBtn';

const EmployeeCreate = () => {
  return (
    <div className='container'>
      <h1>New employee</h1>
      <BackBtn/>
      <form>
        <div className='mb-3'>
          <label htmlFor='exampleInputEmail1' className='form-label'>Name</label>
          <input type='text' className='form-control' id='exampleInputEmail1' aria-describedby='emailHelp' />
          <div id='emailHelp' className='form-text'>We'll never share your email with anyone else.</div>
        </div>
        <div className='mb-3'>
          <label htmlFor='exampleInputPassword1' className='form-label'>Second name</label>
          <input type='password' className='form-control' id='exampleInputPassword1' />
        </div>
        <div className='mb-3'>
          <label htmlFor='flexRadioDefault1' className='form-label'>Gender</label>
          <div className="form-check">
            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
              <label className="form-check-label" htmlFor="flexRadioDefault1">
                Default radio
              </label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked/>
              <label className="form-check-label" htmlFor="flexRadioDefault2">
                Default checked radio
              </label>
          </div>
        </div>
        <div className='mb-3'>
          <label htmlFor='exampleInputPassword1' className='form-label'>Profession</label>
          <input type='password' className='form-control' id='exampleInputPassword1' />
        </div>
        <div className='mb-3'>
          <label htmlFor='exampleInputPassword1' className='form-label'>Age</label>
          <input type='password' className='form-control' id='exampleInputPassword1' />
        </div>
        <button type='submit' className='btn btn-primary'>Submit</button>
      </form>
    </div>
  );
};

export default EmployeeCreate;