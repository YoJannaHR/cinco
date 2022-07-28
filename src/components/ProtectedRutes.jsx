import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux/es/exports";
const ProtectedRutes = () => {

const user = useSelector(state => state.user)
// const navigate = UseNavigate();
  if (user) {
    return <Outlet />;
  } else {
    return <Navigate to="/" />;
  }
};

export default ProtectedRutes;
