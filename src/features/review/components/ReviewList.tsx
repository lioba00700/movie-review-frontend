import { useState } from "react";
import CustomButton from "../../../common/components/CustomButton";
import ReviewItem from "./ReviewItem";
import ReviewForm from "./ReviewForm";

const ReviewList = () => {
  const [writeReview, setWriteReview] = useState<boolean>(false);

  const createReview = () => {
    setWriteReview(false);
  }

  return (
    <div>
      <div className="flex justify-between mb-[50px]">
        <h3 className="text-2xl font-bold ">리뷰</h3>
        <CustomButton value="리뷰 작성하기" style="bg-blue-600 text-white text-md font-bold p-[8px] w-fit h-fit" onClick={()=>setWriteReview((prev)=>!prev)}/>
      </div>
      {
        writeReview && (
          <div className="w-md mb-[30px]">
            <ReviewForm type="create" onSubmit={()=>createReview()}/>
          </div>
        )
      }
      <ul className="flex flex-col gap-[20px] w-[60%] min-w-xl">
        <ReviewItem />
        <ReviewItem />
        <ReviewItem />
        <ReviewItem />
        <ReviewItem />
      </ul>
    </div>
  )
}

export default ReviewList;