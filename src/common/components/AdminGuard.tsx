import { Outlet, useNavigate } from "react-router-dom";
import useAdmin from "../hooks/useAdmin"
import { useEffect } from "react";

const AdminGuard = () => {
    const isLogin = useAdmin().isLogin;
    const navigate = useNavigate();
    useEffect(() => {
        if (!isLogin) {
          navigate("/admin/login");
        }
      }, [isLogin, navigate]);
    
      return isLogin ? <Outlet /> : null;
}

export default AdminGuard;