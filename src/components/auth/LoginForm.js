import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './LoginForm.css';


const LoginForm = () => {
  return (
    <div className='container col-sm-4 login-form'>
      <div className="alert alert-success" role="alert">
        Login: admin <br/>
        Password: admin
      </div>
      <form>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">Login</label>
          <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
          <input type="password" className="form-control" id="exampleInputPassword1"/>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>  
  )
}

export default LoginForm;