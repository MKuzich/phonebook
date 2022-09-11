import { Navigate } from 'react-router-dom';
import { useAuth } from '../redux/useAuth';
import React from 'react';

interface IProps {
  children: React.ReactNode;
  redirectPath?: string;
}

const PrivateRoute: React.FC<IProps> = ({
  children,
  redirectPath = '/login',
}): any => {
  const auth = useAuth();

  if (!auth.user) {
    return <Navigate to={redirectPath} replace />;
  }
  return children;
};

export default PrivateRoute;
