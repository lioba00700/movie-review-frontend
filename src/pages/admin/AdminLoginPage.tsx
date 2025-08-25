//2025.08.25 관리자 로그인 화면 - 박민서
import CustomButton from "@/common/components/CustomButton";
import CustomInput from "@/common/components/CustomInput";
import { useNavigate } from "react-router-dom";

const AdminLoginPage = () => {
  const navigate = useNavigate();
  return (
    <div className="pt-[90px] pb-[100px] h-screen content-center p-[50px] m-auto w-lg dark:text-white">
      <h1 className="text-3xl font-bold mb-[60px]">관리자 로그인</h1>
      <CustomInput label="ID"/>
      <CustomInput label="비밀번호"/>
      <p className="text-sm justify-self-end cursor-pointer p-[10px] hover:text-gray-500" onClick={()=>navigate('/admin/signup')}>회원가입</p>
      <CustomButton value="로그인" style="mt-[50px] bg-blue-600 text-white text-md font-bold p-[8px] w-full dark:disabled:bg-gray-500/50"/>
    </div>
  );
};

export default AdminLoginPage;
