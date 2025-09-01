//2025.08.27 에러 메시지 정의 - 박민서
//2025.08.25 관리자 등록 validation 스키마 정의 - 박민서
import { z } from "zod";

export const Admin = z
  .object({
    username: z.string().min(4, '4자 이상이어야 합니다.').max(20, '20자 이하여야 합니다.'),
    password: z
      .string()
      .min(8, '8자 이상이어야 합니다.')
      .max(16, '16자 이하여야 합니다. ')
      .regex(/(?=.*[A-Za-z0-9])(?=.*[!@#$%^&*]).+$/, '영문자, 숫자, 특수문자 조합을 입력해야 합니다.'),
    rePassword: z
      .string()
      .min(8, '8자 이상이어야 합니다.')
      .max(16, '16자 이하여야 합니다. ')
      .regex(/(?=.*[A-Za-z0-9])(?=.*[!@#$%^&*]).+$/, '영문자, 숫자, 특수문자 조합을 입력해야 합니다.'),
  })
  .superRefine(({ password, rePassword }, ctx) => {
    if (password !== rePassword) {
      ctx.addIssue({
        code: "custom",
        path: ["form"],
        message: "비밀번호와 비밀번호 확인이 일치하지 않습니다.",
      });
    }
  });
