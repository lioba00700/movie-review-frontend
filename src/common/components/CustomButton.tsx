//2025.08.25 아이콘 표시 상태 관리 - 박민서
//2025.08.20 커스텀 버튼 - 박민서
import type { ReactNode } from "react";
import {
  MdDeleteOutline,
  MdOutlineAddCircle,
  MdOutlineArrowForwardIos,
  MdOutlineArrowBackIosNew,
} from "react-icons/md";

type CustomButton = {
  value: string;
  icon?: string;
  onClick: () => void;
  disabled?: boolean;
  style: string;
};

const buttonIcons: Record<string, ReactNode> = {
  delete: <MdDeleteOutline size={20} />,
  add: <MdOutlineAddCircle size={25} />,
  leftArrow: <MdOutlineArrowBackIosNew size={20} />,
  rightArrow: <MdOutlineArrowForwardIos size={20} />,
};

const CustomButton = ({
  value,
  icon,
  onClick,
  disabled,
  style,
}: CustomButton) => {
  return (
    <button
      className={`${style} flex gap-[10px] items-center justify-center cursor-pointer p-[5px] rounded-md translate-all disabled:bg-gray-300 disabled:cursor-default`}
      disabled={disabled}
      onClick={onClick}
    >
      {value}
      {icon && buttonIcons[icon]}
    </button>
  );
};

export default CustomButton;
