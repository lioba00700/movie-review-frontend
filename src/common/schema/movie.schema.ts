//2025.08.27 에러 메시지 정의 - 박민서
//2025.08.25 영화 validation 스키마 정의 - 박민서
import { z } from "zod";

export const MovieSchema = z.object({
  movie_image: z.any().refine(file=>file instanceof File, {message: '이미지를 선택해주세요.'}),
  movie_name: z.string().min(1, '제목을 입력해주세요.'),
  movie_genre: z.string().array().min(1, '1개 이상의 장르를 선택해주세요.'),
  movie_date: z.string().min(10, '개봉일을 선택해주세요.'),
  movie_time: z.string().min(8, '시:분:초 헝식으로 입력해주세요.'),
  movie_director: z.string().min(1, '감독을 선택해주세요.'),
  movie_cast_list: z.string().array().min(1, '1명 이상의 출연진을 입력하세요.').max(3, '3명 이하의 출연진을 입력하세요.'),
  movie_description: z.string('설명을 입력하세요.'),
});

export const Cast = z
  .string()
  .min(1, '출연진 이름을 입력해주세요.')
  .regex(/(?=.*[A-Za-z가-힣])/, '영문자와 한글만 입력 가능합니다.');
