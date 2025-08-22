import useModalStore from "@/common/store/useModalStore"

const useModal = () => {
  const type = useModalStore((state)=>state.modal.type);
  const message = useModalStore((state)=>state.modal.message);
  const isOpen = useModalStore((state)=>state.modal.isOpen);
  const onSubmit = useModalStore((state)=>state.modal.onSubmit);
  const handleModal = useModalStore((state)=>state.handleModal);
  const closeModal = useModalStore((state)=>state.closeModal);

  return {type, message, isOpen, onSubmit, handleModal, closeModal}
}

export default useModal;