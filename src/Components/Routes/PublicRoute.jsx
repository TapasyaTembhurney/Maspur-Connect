import { Navigate } from 'react-router-dom';
import { isLoggedIn } from './auth';

function PublicRoute({ children }) {
  return isLoggedIn() ? <Navigate to="/dashboard" replace /> : children;
}

export default PublicRoute;