import { Navigate } from 'react-router-dom';
import { isLoggedIn } from './auth';

function PrivateRoute({ children }) {
  return isLoggedIn() ? children : <Navigate to="/login" replace />;
}

export default PrivateRoute;