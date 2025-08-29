//2025.08.21 공용으로 사용되는 타입 관리 - 박민서

import type { ReviewCreateState } from "@/features/review/types";

export type InputItem = {
  label: string;
  key: string;
  type: string;
  required?: boolean;
};

export type ThemeState = {
  theme: "light" | "dark";
  changeTheme: () => void;
};

export type FormAction =
  | {
      type: "CHAGNE";
      payload: { key: string; value: string | File | null | number };
    }
  | { type: "CHANGE_LIST"; payload: { key: string; value: string } }
  | { type: "RESET" };

export type ModalProps = {
  title: string;
  content: string | React.ReactNode;
  btn1_name: string;
  btn1_onclick: () => void;
  btn1_style: "white" | "red" | "blue";
  btn2_name?: string;
  btn2_onclick?: () => void;
  btn2_style?: "white" | "red" | "blue";
  isOneBtn: boolean;
  isOpen: boolean;
  onClose: () => void;
  isNonBtn?: boolean;
};

export type AdminState = {
  token: string | null;
  isLogin: boolean;
  login: (token: string) => void;
  logout: () => void;
};
