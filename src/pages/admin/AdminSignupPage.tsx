//2025.08.25 관리자 회원가입 화면 - 박민서
import CustomButton from "@/common/components/CustomButton";
import CustomInput from "@/common/components/CustomInput";
import { Admin } from "@/common/schema/admin.schema";
import { signupAdmin } from "@/common/services/authAPI";
import type { FormAction } from "@/common/types";
import { useReducer } from "react";
import { useNavigate } from "react-router-dom";

type SignupState = {
  username: string;
  password: string;
  rePassword: string;
};

const signupInitialForm: SignupState = {
  username: "",
  password: "",
  rePassword: ""
};

const SignupReducer = (state: SignupState, action: FormAction) => {
  switch (action.type) {
    case "CHAGNE":
      return {
        ...state,
        [action.payload.key]: action.payload.value,
      };
    case "RESET":
      return signupInitialForm;
    default:
      return state;
  }
};

const AdminSignupPage = () => {
  const navigate = useNavigate();
  const [form, dispatch] = useReducer(SignupReducer, signupInitialForm);

  const handleSubmitSignup = async () => {
    try {
      Admin.parse(form);
      const res = await signupAdmin({username: form.username, password:form.password});
      if (res.pass) {
        dispatch({ type: "RESET" });
        navigate("/admin/login");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="pt-[90px] pb-[100px] h-screen content-center p-[50px] m-auto w-lg dark:text-white">
      <h1 className="text-3xl font-bold mb-[60px]">관리자 가입</h1>
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
      <p className="flex mt-[5px] h-[20px] text-xs text-red-600">{Admin.shape.username.safeParse(form.username).error?.issues[0].message}</p>
              </div>
      <div>
      <CustomInput
        label="비밀번호"
        type="text"
        onChange={e =>
          dispatch({
            type: "CHAGNE",
            payload: { key: "password", value: e.target.value },
          })
        }
      />
      <p className="flex mt-[5px] h-[20px] text-xs text-red-600">{Admin.shape.password.safeParse(form.password).error?.issues[0].message}</p>
              </div>
              <div>
      <CustomInput
        label="비밀번호 확인"
        type="rePassword"
        onChange={e =>
          dispatch({
            type: "CHAGNE",
            payload: { key: "rePassword", value: e.target.value },
          })
        }
      />
      <p className="flex mt-[5px] h-[20px] text-xs text-red-600">{Admin.shape.rePassword.safeParse(form.rePassword).error?.issues[0].message}</p>
              </div>
      <p
        className="text-sm justify-self-end cursor-pointer p-[10px] hover:text-gray-500"
        onClick={() => navigate("/admin/login")}
      >
        로그인
      </p>
      <CustomButton
        value="가입"
        style="mt-[50px] bg-blue-600 text-white text-md font-bold p-[8px] w-full dark:disabled:bg-gray-500/50"
        onClick={handleSubmitSignup}
      />
    </div>
  );
};

export default AdminSignupPage;
