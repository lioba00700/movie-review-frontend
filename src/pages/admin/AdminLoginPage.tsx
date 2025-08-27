//2025.08.27 관리자 로그인 API 연결 - 박민서
//2025.08.25 관리자 로그인 화면 - 박민서
import CustomButton from "@/common/components/CustomButton";
import CustomInput from "@/common/components/CustomInput";
import { Admin } from "@/common/schema/admin.schema";
import { loginAdmin } from "@/common/services/AuthAPI";
import type { FormAction } from "@/common/types";
import { useReducer } from "react";
import { useNavigate } from "react-router-dom";

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
  const [form, dispatch] = useReducer(LoginReducer, loginInitialForm);

  const handleSubmitLogin = async () => {
    //입력값 확인
    //api 요청 에러처리
    try {
      Admin.parse(form);
      const res = await loginAdmin(form);
      if (res.pass) {
        dispatch({ type: "RESET" });
        navigate("/");
      }
      //리뷰 수정
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="pt-[90px] pb-[100px] h-screen content-center p-[50px] m-auto w-lg dark:text-white">
      <h1 className="text-3xl font-bold mb-[60px]">관리자 로그인</h1>
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
      <p
        className="text-sm justify-self-end cursor-pointer p-[10px] hover:text-gray-500"
        onClick={() => navigate("/admin/signup")}
      >
        회원가입
      </p>
      <CustomButton
        value="로그인"
        style="mt-[50px] bg-blue-600 text-white text-md font-bold p-[8px] w-full dark:disabled:bg-gray-500/50"
        onClick={handleSubmitLogin}
      />
    </div>
  );
};

export default AdminLoginPage;
