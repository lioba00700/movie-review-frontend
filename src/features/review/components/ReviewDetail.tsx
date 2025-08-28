import { useEffect, useState } from "react";
import { getReviewDetail } from "../services/reviewAPI";
import type { Review } from "../types";
import RatingButton from "./RatingButton";

const ReviewDetail = ({reviewId, movieId}:{reviewId:number, movieId:number}) => {
  const [review, setReview] = useState<Review>();
    useEffect(()=>{
      const getReview = async () => {
        const res = await getReviewDetail(movieId, reviewId);
        if(res.pass){
          setReview(res.data);
        }
      }
      getReview();
    },[movieId, reviewId])
    return (
        <div>
            <p className="text-xl font-bold">{review?.name}</p>
            <RatingButton rating={Number(review?.rating)} disabled={true} />
            <p className="mt-[15px]">{review?.review}</p>
          </div>
    )
}

export default ReviewDetail;