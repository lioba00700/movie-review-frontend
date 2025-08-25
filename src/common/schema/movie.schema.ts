//2025.08.25 영화 스키마 정의 - 박민서
import {z} from 'zod';

export const Movie = z.object({
    movie_image: z.instanceof(File),
    movie_name: z.string().min(1),
    movie_genre: z.string(),
    movie_date: z.string().min(10),
    movie_time: z.string(),
    movie_director: z.string(),
    movie_cast_list: z.string(),
    movie_description: z.string(),
})