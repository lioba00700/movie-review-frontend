import { create } from "zustand";
import type { ReviewListState } from "../types";

const useReviewListStore = create<ReviewListState>((set)=>({
    reviews: [],
}))

export default useReviewListStore