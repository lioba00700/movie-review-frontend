import useAdminStore from "../store/useAdminStore";

const useAdmin = () => {
  const isLogin = useAdminStore(state => state.isLogin);
  const login = useAdminStore(state => state.login);
  const logout = useAdminStore(state => state.logout);

  return { isLogin, login, logout };
};

export default useAdmin;
