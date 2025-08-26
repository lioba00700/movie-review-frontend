//2025.08.25 리뷰 스키마 정의 - 박민서
import { z } from "zod";

export const Review = z.object({
  name: z.string().min(1),
  rating: z.number().min(0).max(5),
  review: z.string(),
});
