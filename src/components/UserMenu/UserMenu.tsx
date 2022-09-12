import { useLogOutMutation } from '../../redux/authApi';
import { useAuth } from '../../redux/useAuth';
import { setCredentials } from '../../redux/authSlice';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Nav, Navbar } from 'react-bootstrap';
import React from 'react';
import { toast } from 'react-toastify';

export const UserMenu: React.FC = () => {
  const [logOut] = useLogOutMutation();
  const auth = useAuth();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const nahdleOnClick = async () => {
    try {
      await logOut();
      dispatch(setCredentials({ user: null, token: null }));
      navigate('/login');
      toast.success(`You unlogged succes!`);
    } catch (err: any) {
      toast.error(`Something went wrong: ${err.status}`);
    }
  };

  return (
    <>
      <Navbar.Text>{auth?.user?.email}</Navbar.Text>
      <Nav.Link onClick={nahdleOnClick}>Log Out</Nav.Link>
    </>
  );
};
