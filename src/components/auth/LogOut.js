import React from 'react';
import './LogOut.css';
import { useSelector, useDispatch } from 'react-redux';
import { setLoggedIn } from '../../features/user/userSlice';
import { useNavigate } from 'react-router-dom';

const LogOut = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const loggedIn = useSelector((state) => state.user.loggedIn);

  const logOut = (event) => {
    event.preventDefault();
    dispatch(setLoggedIn(false));
    navigate('/');
  };

  return loggedIn ? (
    <a href="logout" onClick={logOut} className="log-out link-success">
      Sign out
    </a>
  ) : null;
};

export default LogOut;
