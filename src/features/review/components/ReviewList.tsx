//2025.08.26 API 연결 - 박민서
//2025.08.22 스켈레톤 UI 적용 - 박민서
//2025.08.21 리뷰 목록 컴포넌트 - 박민서
import { useEffect } from "react";
import ReviewItem from "./ReviewItem";
import ReviewForm from "./ReviewForm";
import { useInView } from "react-intersection-observer";
import { useInfiniteQuery } from "@tanstack/react-query";
import React from "react";
import SkeletonReviewList from "./SkeletonReviewList";
import { getReviewList } from "../services/reviewAPI";
import type { Review } from "../types";

const ReviewList = ({ movieId }: { movieId: number }) => {
  const { ref, inView } = useInView();

  const handleChange = () => {
    refetch();
  };

  const fetchReview = async () => {
    const res = await getReviewList(movieId);
    if (res.pass) {
      const reviews = res.data;

      return {
        reviews,
        nextCursor: undefined,
      };
    }

    return {
      reviews: [],
      nextCusor: undefined,
    };
  };

  const {
    data,
    isLoading,
    isFetchingNextPage,
    hasNextPage,
    refetch,
    fetchNextPage,
  } = useInfiniteQuery({
    queryKey: ["reviews"],
    queryFn: () => fetchReview(),
    initialPageParam: 1,
    getNextPageParam: lastPage => lastPage.nextCursor,
  });

  useEffect(() => {
    if (inView && !isFetchingNextPage && hasNextPage) {
      fetchNextPage();
    }
  }, [inView, isFetchingNextPage, hasNextPage]);

  return (
    <div className="mt-[100px]">
      <h3 className="text-2xl font-bold mb-[20px]">리뷰</h3>
      <div className="w-md mb-[30px]">
        <ReviewForm
          type="create"
          movieId={movieId}
          handleChange={handleChange}
        />
      </div>
      {isLoading && <SkeletonReviewList />}
      <ul className="flex flex-col gap-[20px] w-[60%] min-w-xl">
        {data?.pages.map((group, i) => (
          <React.Fragment key={i}>
            {group.reviews?.map((review: Review) => (
              <ReviewItem
                key={review.reviewId}
                reviewId={review.reviewId}
                name={review.name}
                review={review.review}
                rating={review.rating}
                handleChange={handleChange}
              />
            ))}
          </React.Fragment>
        ))}
      </ul>
      {isFetchingNextPage ? <SkeletonReviewList /> : <div ref={ref}></div>}
    </div>
  );
};

export default ReviewList;
