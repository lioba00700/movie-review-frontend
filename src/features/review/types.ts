//2025.08.21 작성 - 박민서
//리뷰 관련 타입 선언

export interface Review {
  writer: string,
  detail: string,
  rating: number,
}

export interface ReviewListState {
  reviews: Review[] | [],
}

export type ReviewAction = 
  | {type: "CHAGNE", payload:{key:string, value: string | number}}
  | {type: "RESET"};

export type ReviewCreateState = {
  name: string,
  review: string,
  rating: number,
}