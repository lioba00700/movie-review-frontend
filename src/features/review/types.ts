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
  writer: string,
  detail: string,
  rating: number,
}