//2025.08.27 에러 메시지 정의 - 박민서
//2025.08.25 리뷰 validation 스키마 정의 - 박민서
import { z } from "zod";

export const ReviewSchema = z.object({
  name: z.string().min(3, '이름은 3자 이상이어야 합니다.'),
  rating: z.number().min(0).max(5),
  review: z.string().min(1, '리뷰를 작성해주세요.'),
});
