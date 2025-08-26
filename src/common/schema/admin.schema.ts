//2025.08.25 관리자 등록 validation 스키마 정의 - 박민서
import { regex, z } from "zod";

export const Admin = z
  .object({
    username: z.string().min(4).max(20),
    password: z
      .string()
      .min(8)
      .max(16)
      .regex(/(?=.*[A-Za-z0-9])(?=.*[!@#$%^&*]).+$/),
    rePassword: z
      .string()
      .min(8)
      .max(16)
      .regex(/(?=.*[A-Za-z0-9])(?=.*[!@#$%^&*]).+$/),
  })
  .superRefine(({ password, rePassword }, ctx) => {
    if (password !== rePassword) {
      ctx.addIssue({
        code: "custom",
        path: ["password"],
        message: "비밀번호와 비밀번호 확인이 일치하지 않습니다.",
      });
    }
  });
