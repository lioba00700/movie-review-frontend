import MovieForm from "@movie/components/MovieForm";
import ReviewForm from "@review/components/ReviewForm";
import useModal from "@/common/hooks/useModal";
import CustomButton from "./CustomButton";

const Modal = () => {
  const {type, message, closeModal, onSubmit} = useModal();

  return (
    <div>
      <div 
        className="w-screen h-screen bg-black/70 fixed inset-0 z-4"
        onClick={closeModal}></div>
      <div className="flex flex-col bg-white w-md h-fit min-h-[200px] m-auto fixed inset-0 rounded-lg z-6 p-[40px]">
        <h3 className="text-center text-xl font-bold mb-[60px]">{message}</h3>
        {
          type==='editReview' ? (
            <ReviewForm type="edit" onSubmit={()=>{}}/>
          ) : type==='editMovie' ? (
            <MovieForm />
          ) : (
            <div className="flex gap-[10px]">
              <CustomButton value="아니오" onClick={closeModal} style="bg-blue-600 text-white text-md font-bold p-[5px] flex-1"/>
              <CustomButton value="예" onClick={onSubmit} style="bg-gray-200 text-black text-md font-bold p-[5px] flex-1"/>
            </div>
          )
        }
      </div>
    </div>
  )
}

export default Modal;