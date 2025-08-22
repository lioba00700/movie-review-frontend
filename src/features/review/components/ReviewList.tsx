import { useEffect } from "react";
import ReviewItem from "./ReviewItem";
import ReviewForm from "./ReviewForm";
import { useInView } from "react-intersection-observer";
import { useInfiniteQuery } from "@tanstack/react-query";
import React from "react";
import SkeletonReviewList from "./SkeletonReviewList";

const ReviewList = () => {
  const {ref, inView} = useInView();

  const fetchReview =  async (pageParam:number) => {
    //무한 스크롤 구현 위한 mock 함수
    const pageSize = 5;
    await new Promise((resolve)=>setTimeout(resolve, 500));
    
    //페이지 크기만큼 예시 데이터 불러옴
    const reviews = Array.from({length: pageSize}).map((_, index) => ({
      id: pageParam*pageSize + index,
      writer: `작성자${pageParam*pageSize + index}`
    }))

    return {
      reviews,
      nextCursor: pageParam<7 ? pageParam + 1 : undefined
    }
  }

  const {
    data,
    error,   
    isLoading, 
    isFetchingNextPage,
    hasNextPage,
    fetchNextPage,
  } = useInfiniteQuery({
    queryKey: ['movies'],
    queryFn: ({pageParam})=>fetchReview(pageParam),
    initialPageParam: 1,
    getNextPageParam:(lastPage) => lastPage.nextCursor,
  });

  useEffect(()=>{
    if(inView && !isFetchingNextPage && hasNextPage){
      fetchNextPage();
    }
  },[inView, isFetchingNextPage, hasNextPage]);

  return (
    <div>
      <h3 className="text-2xl font-bold mb-[20px]">리뷰</h3>
      <div className="w-md mb-[30px]">
        <ReviewForm type="create" onSubmit={()=>{}}/>
      </div>
      {
        isLoading && <SkeletonReviewList />
      }
      <ul className="flex flex-col gap-[20px] w-[60%] min-w-xl">
        {
          data?.pages.map((group,i)=>(
            <React.Fragment key={i}>
              {
                group.reviews?.map((review)=>(
                  <ReviewItem key={review.id}/>
                ))
              }
            </React.Fragment>
          ))
        }
      </ul>
      {
        isFetchingNextPage ? (
          <SkeletonReviewList />
        ) : (
          <div ref={ref}></div>
        )
      }
    </div>
  )
}

export default ReviewList;