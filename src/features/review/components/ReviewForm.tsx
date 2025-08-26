//2025.08.21
import { useEffect, useReducer } from "react";
import CustomButton from "@/common/components/CustomButton";
import CustomInput from "@/common/components/CustomInput";
import type { ReviewAction, ReviewCreateState } from "@review/types";
import RatingButton from "./RatingButton";
import { ReviewSchema } from "@/common/schema/review.schema";
import { getReviewDetail, postReview } from "../services/reviewAPI";

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

const ReviewForm = ({
  type,
  movieId,
  reviewId,
  closeModal,
  handleChange,
  onSubmit,
}: {
  type: "edit" | "create";
  movieId?: number;
  reviewId?: number;
  closeModal?: () => void;
  handleChange?: () => void;
  onSubmit?: (form: ReviewCreateState) => void;
}) => {
  const [form, dispatch] = useReducer(reviewReducer, reviewInitialForm);

  const handleSubmitReview = async () => {
    //입력값 확인
    //api 요청 에러처리
    try {
      ReviewSchema.parse(form);
      //리뷰 등록\
      if (type === "create" && movieId && handleChange) {
        const res = await postReview(movieId, form);
        if (res.pass) {
          dispatch({ type: "RESET" });
          handleChange();
        }
        //리뷰 수정
      } else if (type === "edit" && onSubmit && closeModal) {
        onSubmit(form);
        closeModal();
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (type == "create") return;
    const getReview = async () => {
      const res = await getReviewDetail(movieId as number, reviewId as number);
      console.log(res.data);
      if (res.pass) {
        Object.keys(form).map(key =>
          dispatch({ type: "CHAGNE", payload: { key, value: res.data[key] } }),
        );
      }
    };
    getReview();
  }, [movieId]);

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
