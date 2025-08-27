//2025.08.27 관리자 관련 API 요청 - 박민서
import { publicAxios } from "../publicAxios";

//관리자 회원가입
export const signupAdmin = async ({
  username,
  password,
}: {
  username: string;
  password: string;
}) => {
  try {
    const res = await publicAxios.post("/signup", {
      username,
      password,
      role: "ROLE_ADMIN",
    });
    return { pass: true, data: res.data };
  } catch (error) {
    return { pass: false, data: error };
  }
};

//관리자 로그인
export const loginAdmin = async ({
  username,
  password,
}: {
  username: string;
  password: string;
}) => {
  try {
    const res = await publicAxios.post("/login", {
      username,
      password,
    });
    return { pass: true, data: res.data };
  } catch (error) {
    return { pass: false, data: error };
  }
};

//관리자 토큰 갱신
export const tokenAdmin = async () => {
  try {
    const res = await publicAxios.post("/login/token");
    return { pass: true, data: res.data };
  } catch (error) {
    return { pass: false, data: error };
  }
};

//관리자 로그아웃
export const logoutAdmin = async ({
  refreshToken,
}: {
  refreshToken: string;
}) => {
  try {
    const res = await publicAxios.post("/logout", {
      refreshToken,
    });
    return { pass: true, data: res.data };
  } catch (error) {
    return { pass: false, data: error };
  }
};
