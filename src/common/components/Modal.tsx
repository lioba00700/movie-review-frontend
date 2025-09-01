//2025.08.29 모달 컴포넌트 zustand 관리에서 Props로 관리되도록 변경 - 박민서
//2025.08.26 영화 수정 기능 모달에서 제외 - 박민서
//2025.08.21 모달 컴포넌트 생성 - 박민서
import CustomButton from "./CustomButton";
import { MdClose } from "react-icons/md";
import type { ModalProps } from "../types";

const btnStyle = {
  white:
    "bg-white text-black border-gray-300 border-1 dark:bg-black dark:text-white",
  red: "bg-red-600 text-white",
  blue: "bg-blue-600 text-white",
};

const Modal = ({
  title,
  content,
  btn1_name,
  btn1_onclick,
  btn1_style,
  btn2_name,
  btn2_onclick,
  btn2_style,
  isOpen,
  onClose,
  isOneBtn = false,
  isNonBtn = false,
}: ModalProps) => {
  return (
    <div>
      {isOpen && (
        <>
          <div
            className="w-screen h-screen bg-black/70 fixed inset-0 z-4"
            onClick={onClose}
          ></div>
          <div className="flex flex-col bg-white text-black w-md h-fit min-h-[200px] m-auto fixed inset-0 rounded-lg z-6 p-[40px]">
            <button className="self-end cursor-pointer" onClick={onClose}>
              <MdClose size={30} />
            </button>
            <h3 className="text-center text-xl font-bold mb-[20px]">{title}</h3>
            <div>{content}</div>
            <div className="flex gap-[10px]">
              {!isNonBtn && (
                <>
                  <CustomButton
                    value={btn1_name}
                    onClick={btn1_onclick}
                    style={`${btnStyle[btn1_style]} text-md font-bold p-[5px] flex-1`}
                  />
                  {!isOneBtn && (
                    <CustomButton
                      value={btn2_name!}
                      onClick={btn2_onclick!}
                      style={`${btnStyle[btn2_style!]} text-md font-bold p-[5px] flex-1`}
                    />
                  )}
                </>
              )}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Modal;
