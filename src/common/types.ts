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
  | { type: "CHAGNE"; payload: { key: string; value: string | File | null } }
  | { type: "CHANGE_GENRE"; genre: string}
  | { type: "RESET" };

export type ModalState = {
  modal: {
    isOpen: boolean;
    type: "confirm" | "reviewDetail" | "editReview";
    message: string;
    onSubmit: () => void;
    movieId?: number | null;
    reviewId?: number | null;
  };
  handleModal: ({
    type,
    message,
    onSubmit,
    movieId,
    reviewId,
  }: {
    type: "confirm" | "reviewDetail" | "editReview";
    message: string;
    onSubmit: (form?: ReviewCreateState) => void;
    movieId?: number | null;
    reviewId?: number | null;
  }) => void;
  closeModal: () => void;
};
