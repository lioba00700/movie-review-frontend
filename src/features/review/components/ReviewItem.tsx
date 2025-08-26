//2025.08.26 API 연결 - 박민서
//2025.08.21 리뷰 목록 아이템
import CustomButton from "@/common/components/CustomButton";
import useModal from "@/common/hooks/useModal";
import RatingButton from "./RatingButton";
import type { Review } from "../types";

const ReviewItem = ({name, review, rating}: Review) => {
  const {handleModal} = useModal();

  return (
    <li className="border-1 border-gray-300 rounded-xl w-full p-[20px] relative">
      <p className="text-xl font-bold">{name}</p>
      <RatingButton rating={rating} disabled={true}/>
      <p className="mt-[15px]">{review}</p>
      <div className="absolute top-[20px] flex gap-[5px] right-[20px]">
        <CustomButton value="삭제" style="bg-red-600 text-white text-sm" onClick={()=>handleModal({type:'confirm', message: '정말 삭제하시겠습니까?', onSubmit: ()=>{}})} />
        <CustomButton value="수정" style="bg-blue-600 text-white text-sm" onClick={()=>handleModal({type:'editReview', message: '리뷰 수정', onSubmit: ()=>{}})} />
      </div>
    </li>
  )
}

export default ReviewItem;