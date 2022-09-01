import { Navigate } from 'react-router-dom';
import { useAuth } from 'redux/useAuth';

export default function PublicRoute({
  children,
  redirectPath = '/',
  restricted = false,
}) {
  const auth = useAuth();
  const shouldRedirect = auth.user && restricted;

  if (shouldRedirect) {
    return <Navigate to={redirectPath} />;
  }
  return children;
}
