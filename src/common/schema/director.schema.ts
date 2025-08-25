//2025.08.25 감독 스키마 정의 - 박민서
import {z} from 'zod';

export const Director = z.object({
    profile: z.instanceof(File),
    name: z.string().min(1),
    birth: z.string().min(10)
})