import useAdminStore from "../store/useAdminStore";

const useAdmin = () => {
  const token = useAdminStore(state => state.token);
  const login = useAdminStore(state => state.login);
  const logout = useAdminStore(state => state.logout);

  return { token, login, logout };
};

export default useAdmin;
