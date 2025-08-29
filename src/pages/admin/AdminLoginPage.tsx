//2025.08.27 관리자 로그인 API 연결 - 박민서
//2025.08.25 관리자 로그인 화면 - 박민서
import CustomButton from "@/common/components/CustomButton";
import CustomInput from "@/common/components/CustomInput";
import useAdmin from "@/common/hooks/useAdmin";
import { Admin } from "@/common/schema/admin.schema";
import { loginAdmin } from "@/common/services/authAPI";
import type { FormAction } from "@/common/types";
import { useReducer, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

type LoginState = {
  username: string;
  password: string;
};

const loginInitialForm: LoginState = {
  username: "",
  password: "",
};

const LoginReducer = (state: LoginState, action: FormAction) => {
  switch (action.type) {
    case "CHAGNE":
      return {
        ...state,
        [action.payload.key]: action.payload.value,
      };
    case "RESET":
      return loginInitialForm;
    default:
      return state;
  }
};

const AdminLoginPage = () => {
  const navigate = useNavigate();
  const { login } = useAdmin();
  const [error, setError] = useState<boolean>(false);
  const [form, dispatch] = useReducer(LoginReducer, loginInitialForm);

  const handleSubmitLogin = async () => {
    try {
      const AdminLogin = Admin.pick({ username: true, password: true });
      AdminLogin.parse(form);
      const res = await loginAdmin(form);
      if (res.pass) {
        toast.success("로그인되었습니다.");
        dispatch({ type: "RESET" });
        login(res.data.accessToken);
        navigate("/");
      } else {
        toast.error("로그인에 실패했습니다.");
      }
    } catch (error) {
      toast.error("로그인에 실패했습니다.");
      setError(true);
      console.log(error);
    }
  };

  return (
    <div className="pt-[90px] pb-[100px] h-screen content-center p-[50px] m-auto w-lg dark:text-white">
      <h1 className="text-3xl font-bold mb-[60px]">관리자 로그인</h1>
      <div>
        <CustomInput
          label="ID"
          type="text"
          onChange={e =>
            dispatch({
              type: "CHAGNE",
              payload: { key: "username", value: e.target.value },
            })
          }
        />
        <p className="flex mt-[5px] h-[20px] text-xs text-red-600">
          {error &&
            Admin.shape.username.safeParse(form.username).error?.issues[0]
              .message}
        </p>
      </div>
      <div>
        <CustomInput
          label="비밀번호"
          type="password"
          onChange={e =>
            dispatch({
              type: "CHAGNE",
              payload: { key: "password", value: e.target.value },
            })
          }
        />
        <p className="flex mt-[5px] h-[20px] text-xs text-red-600">
          {error &&
            Admin.shape.password.safeParse(form.password).error?.issues[0]
              .message}
        </p>
      </div>
      <CustomButton
        value="로그인"
        style="mt-[50px] bg-blue-600 text-white text-md font-bold p-[8px] w-full dark:disabled:bg-gray-500/50"
        onClick={handleSubmitLogin}
      />
    </div>
  );
};

export default AdminLoginPage;
