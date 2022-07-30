import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './LoginForm.css';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
  const [login, setLogin] = useState(null);
  const [password, setPassword] = useState(null);
  const [loginError, setLoginError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  const credentials = {
    login: 'admin',
    password: 'admin',
  };

  const navigate = useNavigate();

  let authAllowed = true;

  const onFormSubmit = (event) => {
    event.preventDefault();

    if (login !== credentials.login) {
      setLoginError(true);
      authAllowed = false;
    }
    if (password !== credentials.password) {
      setPasswordError(true);
      authAllowed = false;
    }

    if (authAllowed) {
      localStorage.setItem('loggedIn', 1);
      navigate('/employee');
    }
  };

  const onLoginChange = (event) => {
    setLoginError(false);
    setLogin(event.target.value);
  };

  const onPasswordChange = (event) => {
    setPasswordError(false);
    setPassword(event.target.value);
  };

  return (
    <div className="container col-sm-4 login-form">
      <div className="alert alert-success" role="alert">
        Login: admin <br />
        Password: admin
      </div>
      <form onSubmit={onFormSubmit}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Login:
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            onChange={onLoginChange}
          />
          {loginError ? (
            <div id="emailHelp" className="form-text text-danger">
              Please type correct a login
            </div>
          ) : null}
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            onChange={onPasswordChange}
          />
          {passwordError ? (
            <div id="emailHelp" className="form-text text-danger">
              Please type correct password
            </div>
          ) : null}
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
