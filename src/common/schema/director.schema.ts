//2025.08.25 감독 등록 validation 스키마 정의 - 박민서
import { z } from "zod";

export const Director = z.object({
  director_images: z.instanceof(File),
  name: z.string().min(1),
  birthDay: z.string().min(10),
});
