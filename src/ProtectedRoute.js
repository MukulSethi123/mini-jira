import { Navigate } from "react-router-dom";

function ProtectedRoute({ Componenet, isAuthenticated, ...props }) {
  return (
    <>
      {isAuthenticated ? <Componenet {...props} /> : <Navigate to="/login" />}
    </>
  );
}

export default ProtectedRoute;
