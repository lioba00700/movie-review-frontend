//2025.08.26 API 연결 - 박민서
//2025.08.21 리뷰 목록 아이템
import CustomButton from "@/common/components/CustomButton";
import useModal from "@/common/hooks/useModal";
import RatingButton from "./RatingButton";
import type { Review, ReviewCreateState } from "../types";
import { patchReview, putReview } from "../services/reviewAPI";
import { useParams } from "react-router-dom";

type ReviewItem = Review & {
  handleChange: () => void;
};

const ReviewItem = ({
  name,
  review,
  rating,
  reviewId,
  handleChange,
}: ReviewItem) => {
  const { movieId } = useParams();
  const { handleModal } = useModal();

  const handleSubmitDelete = async () => {
    if (!movieId && !reviewId) return;
    const res = await patchReview(Number(movieId), reviewId as number);
    if (res.pass) {
      handleChange();
    }
  };

  const handleSubmitEdit = async (form: ReviewCreateState) => {
    console.log()
    if (!movieId && !reviewId) return;
    const res = await putReview(Number(movieId), reviewId as number, form);
    if (res.pass) {
      handleChange();
    }
  };

  return (
    <li className="border-1 border-gray-300 rounded-xl w-full p-[20px] relative cursor-pointer" onClick={()=>handleModal({type:'reviewDetail', movieId:Number(movieId), reviewId, message: '리뷰 상세'})}>
      <p className="text-xl font-bold">{name}</p>
      <RatingButton rating={rating} disabled={true} />
      <p className="mt-[15px]">{review}</p>
      <div className="absolute top-[20px] flex gap-[5px] right-[20px]">
        <CustomButton
          value="삭제"
          style="bg-red-600 text-white text-sm"
          onClick={() =>
            handleModal({
              type: "confirm",
              message: "정말 삭제하시겠습니까?",
              onSubmit: () => handleSubmitDelete(),
            })
          }
        />
        <CustomButton
          value="수정"
          style="bg-blue-600 text-white text-sm"
          onClick={() =>
            handleModal({
              type: "editReview",
              message: "리뷰 수정",
              onSubmit: form => handleSubmitEdit(form!),
              movieId: Number(movieId),
              reviewId,
            })
          }
        />
      </div>
    </li>
  );
};

export default ReviewItem;
