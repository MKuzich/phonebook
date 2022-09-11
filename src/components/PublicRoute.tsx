import { Navigate } from 'react-router-dom';
import { useAuth } from '../redux/useAuth';
import React from 'react';

interface IProps {
  children: React.ReactNode;
  redirectPath?: string;
  restricted: boolean;
}

const PublicRoute: React.FC<IProps> = ({
  children,
  redirectPath = '/',
  restricted = false,
}: any) => {
  const auth = useAuth();
  const shouldRedirect = auth.user && restricted;

  if (shouldRedirect) {
    return <Navigate to={redirectPath} />;
  }
  return children;
};

export default PublicRoute;
