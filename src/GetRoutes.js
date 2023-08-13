import { useRoutes } from "react-router-dom";
import Login from "./components/LoginPage/Login";
import App from "./App";
import { useSelector } from "react-redux";
import ProtectedRoute from "./ProtectedRoute";

function GetRoutes() {
  const authToken = useSelector((state) => state.user.authToken);
  const isAuthenticated = authToken ? true : false;
  const routes = useRoutes([
    {
      path: "/",
      element: (
        <ProtectedRoute isAuthenticated={isAuthenticated} Componenet={App} />
      ),
      canActivate: isAuthenticated,
    },
    {
      path: "/login",
      element: <Login />,
    },
  ]);
  return <>{routes}</>;
}

export default GetRoutes;
