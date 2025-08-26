//2025.08.26 영화 수정 기능 모달에서 제외 - 박민서
//2025.08.21 모달 컴포넌트 생성 - 박민서
import useModal from "@/common/hooks/useModal";
import CustomButton from "./CustomButton";
import ReviewForm from "@/features/review/components/ReviewForm";

const Modal = () => {
  const { type, message, id, reviewId, closeModal, onSubmit } = useModal();

  return (
    <div>
      <div
        className="w-screen h-screen bg-black/70 fixed inset-0 z-4"
        onClick={closeModal}
      ></div>
      <div className="flex flex-col bg-white w-md h-fit min-h-[200px] m-auto fixed inset-0 rounded-lg z-6 p-[40px]">
        <h3 className="text-center text-xl font-bold mb-[60px]">{message}</h3>
        {type === "editReview" ? (
          <ReviewForm
            type="edit"
            movieId={id as number}
            reviewId={reviewId as number}
            onSubmit={onSubmit}
            closeModal={closeModal}
          />
        ) : (
          <div className="flex gap-[10px]">
            <CustomButton
              value="아니오"
              onClick={closeModal}
              style="bg-blue-600 text-white text-md font-bold p-[5px] flex-1"
            />
            <CustomButton
              value="예"
              onClick={() => {
                onSubmit();
                closeModal();
              }}
              style="bg-gray-200 text-black text-md font-bold p-[5px] flex-1"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Modal;
