import Cookies from "js-cookie";

const ProtectedRoute = (props) => {
  const jwtToken = Cookies.get("jwt_token");
  if (jwtToken === undefined) {
    return <RouterRedirect to="/login" />;
  }
  return <Route {...props} />;
};

export default ProtectedRoute;
