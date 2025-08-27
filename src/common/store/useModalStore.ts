//2025.08.21 모달 상태 관리 로직 - 박민서
import { create } from "zustand";
import type { ModalState } from "@/common/types";

const useModalStore = create<ModalState>(set => ({
  modal: {
    isOpen: false,
    type: "confirm",
    message: "",
    onSubmit: () => {},
    movieId: null,
    reviewId: null,
  },
  handleModal: ({ type, message, onSubmit, movieId, reviewId }) =>
    set(state => ({
      modal: {
        ...state.modal,
        isOpen: true,
        type,
        message,
        onSubmit,
        movieId,
        reviewId,
      },
    })),
  closeModal: () =>
    set(state => ({
      modal: {
        ...state.modal,
        isOpen: false,
        movieId: null,
        reviewId: null,
      },
    })),
}));

export default useModalStore;
