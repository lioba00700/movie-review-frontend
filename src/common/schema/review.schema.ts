//2025.08.25 리뷰 validation 스키마 정의 - 박민서
import { z } from "zod";

export const ReviewSchema = z.object({
  name: z.string().min(3),
  rating: z.number().min(0).max(5),
  review: z.string().min(1),
});
