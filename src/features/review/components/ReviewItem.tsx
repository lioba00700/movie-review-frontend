import CustomButton from "@/common/components/CustomButton";
import useModal from "@/common/hooks/useModal";
import RatingButton from "./RatingButton";

const ReviewItem = () => {
  const {handleModal} = useModal();

  return (
    <li className="border-1 border-gray-300 rounded-xl w-full p-[20px] relative">
      <p className="text-xl font-bold">이름</p>
      <RatingButton rating={3} disabled={true}/>
      <p className="mt-[15px]">ddd</p>
      <div className="absolute top-[20px] flex gap-[5px] right-[20px]">
        <CustomButton value="삭제" style="bg-red-600 text-white text-sm" onClick={()=>handleModal({type:'confirm', message: '정말 삭제하시겠습니까?', onSubmit: ()=>{}})} />
        <CustomButton value="수정" style="bg-blue-600 text-white text-sm" onClick={()=>handleModal({type:'editReview', message: '리뷰 수정', onSubmit: ()=>{}})} />
      </div>
    </li>
  )
}

export default ReviewItem;