//2025.08.21
import { useReducer } from "react";
import CustomButton from "@/common/components/CustomButton";
import CustomInput from "@/common/components/CustomInput";
import type { ReviewAction, ReviewCreateState } from "@review/types";
import RatingButton from "./RatingButton";
import { Review } from "@/common/schema/review.schema";
import { postReview } from "../services/reviewAPI";

const reviewInitialForm: ReviewCreateState = {
  name: "",
  rating: 0,
  review: "",
};

const reviewReducer = (state: ReviewCreateState, action: ReviewAction) => {
  switch (action.type) {
    case "CHAGNE":
      return {
        ...state,
        [action.payload.key]: action.payload.value,
      };
    case "RESET":
      return reviewInitialForm;
  }
};

const ReviewForm = ({ type, movieId }: { type: "edit" | "create", movieId: number }) => {
  const [form, dispatch] = useReducer(reviewReducer, reviewInitialForm);

  const handleSubmitReview = async () => {
    //입력값 확인
    //api 요청 에러처리
    try {
      Review.parse(form);
      const res = await postReview(movieId, form);
      if (res.pass) {
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div className="flex flex-col gap-[5px] mb-[5px]">
        <div className="flex flex-col gap-[5px] mb-[5px]">
          <RatingButton
            rating={form.rating}
            onClick={rating =>
              dispatch({
                type: "CHAGNE",
                payload: { key: "rating", value: rating },
              })
            }
          />
        </div>
        <CustomInput
          label="이름"
          type={"text"}
          onChange={e =>
            dispatch({
              type: "CHAGNE",
              payload: { key: "name", value: e.target.value },
            })
          }
          value={form["name"]}
        />
      </div>
      <div className="flex flex-col gap-[5px] mb-[5px]">
        <label className="font-semibold">내용</label>
        <textarea
          className="transition-all border-1 border-gray-300 focus:border-blue-400 outline-none rounded-lg p-[8px] text-lg"
          onChange={e =>
            dispatch({
              type: "CHAGNE",
              payload: { key: "review", value: e.target.value },
            })
          }
          value={form["review"]}
        />
      </div>
      <CustomButton
        value={type === "create" ? "등록" : "수정"}
        onClick={handleSubmitReview}
        style="mt-[40px] bg-blue-600 text-white text-md font-bold p-[8px] w-full"
      />
    </div>
  );
};

export default ReviewForm;
