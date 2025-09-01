//2025.08.25 Not Found 화면 - 박민서

import CustomButton from "@/common/components/CustomButton";
import { useNavigate } from "react-router-dom";

const NotFoundPage = () => {
  const navigate = useNavigate();

    return (
        <div className="flex h-screen w-full dark:text-white">
            <div className="m-auto">
                <h1 className="text-8xl font-bold mb-[15px]">404</h1>
                <p className="text-xl">페이지를 찾을 수 없습니다.</p>
                <div className="mt-[30px] mb-[40px] text-gray-500">
                    <p>존재하지 않거나 사용할 수 없는 페이지입니다.</p>
                    <p>입력하신 주소가 정확한지 확인해주세요</p>
                </div>
                <CustomButton value="이전 페이지로 이동하기" onClick={()=>navigate(-1)} style="bg-blue-600 text-white text-sm"/>
            </div>
        </div>
    )
}

export default NotFoundPage;