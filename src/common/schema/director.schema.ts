//2025.08.27 에러 메시지 정의 - 박민서
//2025.08.25 감독 등록 validation 스키마 정의 - 박민서
import { z } from "zod";

export const Director = z.object({
  director_images: z.any().refine(file=>file instanceof File, {message: '이미지를 선택해주세요.'}),
  name: z.string().min(1, '이름을 입력해주세요.'),
  birthDay: z.string().min(10, '생년월일을 선택해주세요.'),
});
