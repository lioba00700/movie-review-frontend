//2025.08.21 Zustand 모달 상태값 관리 - 박민서
import useModalStore from "@/common/store/useModalStore";

const useModal = () => {
  const type = useModalStore(state => state.modal.type);
  const message = useModalStore(state => state.modal.message);
  const isOpen = useModalStore(state => state.modal.isOpen);
  const id = useModalStore(state => state.modal.movieId);
  const reviewId = useModalStore(state => state.modal.reviewId);
  const onSubmit = useModalStore(state => state.modal.onSubmit);
  const handleModal = useModalStore(state => state.handleModal);
  const closeModal = useModalStore(state => state.closeModal);

  return {
    type,
    message,
    isOpen,
    id,
    reviewId,
    onSubmit,
    handleModal,
    closeModal,
  };
};

export default useModal;
