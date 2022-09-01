import { Navigate } from 'react-router-dom';
import { useAuth } from 'redux/useAuth';

export default function PrivateRoute({ children, redirectPath = '/login' }) {
  const auth = useAuth();

  if (!auth.user) {
    return <Navigate to={redirectPath} replace />;
  }
  return children;
}
