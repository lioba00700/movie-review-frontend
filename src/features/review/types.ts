//2025.08.21 작성 - 박민서
//리뷰 관련 타입 선언

//서버에서 받는 리뷰
export interface Review {
  reviewId?: number;
  name: string;
  review: string;
  rating: number;
}

export interface ReviewListState {
  reviews: Review[] | [];
}

export type ReviewAction =
  | { type: "CHAGNE"; payload: { key: string; value: string | number } }
  | { type: "RESET" };

// 리뷰 등록에서 사용되는 타입
export type ReviewCreateState = {
  name: string;
  review: string;
  rating: number;
};
