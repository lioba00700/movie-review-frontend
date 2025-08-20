export interface Review {
  writer: string,
  detail: string,
  rating: string,
}

export interface ReviewListState {
  reviews: Review[] | [],
}

export type ReviewAction = 
  | {type: "CHAGNE", payload:{key:string, value: string}}
  | {type: "RESET"};

export type ReviewCreateState = {
  writer: string,
  detail: string,
  rating: string,
}