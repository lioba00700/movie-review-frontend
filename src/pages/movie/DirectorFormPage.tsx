//2025.08.25 감독 등록 화면 - 박민서
import CustomButton from "@/common/components/CustomButton";
import CustomInput from "@/common/components/CustomInput";
import ImageUploader from "@/common/components/ImageUploader";
import { Director } from "@/common/schema/director.schema";
import type { FormAction, InputItem } from "@/common/types";
import { formatDate } from "@/common/utils";
import { postDirector } from "@/features/movie/services/directorAPI";
import type { DirectorState } from "@/features/movie/types";
import { useEffect, useReducer, useState } from "react";
import { useNavigate } from "react-router-dom";

const movieInputs: InputItem[] = [
  { label: "이름", key: "name", type: "text", required: true },
  { label: "생년월일", key: "birthDay", type: "date", required: true },
];

const directorInitialForm: DirectorState = {
  director_images: null,
  name: "",
  birthDay: formatDate(new Date()),
};

const directorReducer = (state: DirectorState, action: FormAction) => {
  switch (action.type) {
    case "CHAGNE":
      return {
        ...state,
        [action.payload.key]: action.payload.value,
      };
    case "RESET":
      return directorInitialForm;
    default:
      return state;
  }
};

const DirectorFormPage = () => {
  const navigate = useNavigate();
  const [form, dispatch] = useReducer(directorReducer, directorInitialForm);
  const [subDisabled, setSubDisabled] = useState<boolean>(true);

  const handleSubmitDirector = async () => {
    //입력값 확인
    //api 요청 에러처리
    try {
      Director.parse(form);
      const res = await postDirector(form);
      if (res.pass) {
        navigate("/");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (Object.values(form).some(value => value === "")) {
      setSubDisabled(true);
      return;
    }
    setSubDisabled(false);
    return;
  }, [form]);

  return (
    <div className="pt-[90px] h-full p-[50px] w-md dark:text-white">
      <h1 className="text-2xl font-bold mb-[30px]">감독 등록</h1>
      <div className="flex flex-col gap-[10px]">

<div>
      <ImageUploader
        type="profile"
        label="프로필 이미지"
        required={true}
        value={form.director_images}
        onChange={e =>
          dispatch({
            type: "CHAGNE",
            payload: {
              key: "director_images",
              value: e.target.files?.[0] || null,
            },
          })
        }
      />
      <p className="flex mt-[5px] h-[20px] text-xs text-red-600">{Director.shape.director_images.safeParse(form.director_images).error?.issues[0].message}</p>
      </div>
      {movieInputs.map(input => {
        const schema = Director.shape[input.key as keyof typeof Director.shape];
        const error = schema.safeParse(form[input.key as keyof DirectorState]).error?.issues[0].message || null;
        return (
          <div>
            <CustomInput
              key={input.key}
              label={input.label}
              required={input.required}
              type={input.type}
              onChange={e =>
                dispatch({
                  type: "CHAGNE",
                  payload: { key: input.key, value: e.target.value },
                })
              }
              value={
                form[
                  input.key as Exclude<keyof DirectorState, typeof File | null>
                ] as string
              }
            />
            <p className="flex mt-[5px] h-[20px] text-xs text-red-600">{error}</p>
          </div>
      )})}
      </div>
      <CustomButton
        value="등록"
        onClick={handleSubmitDirector}
        disabled={subDisabled}
        style="mt-[50px] bg-blue-600 text-white text-md font-bold p-[8px] w-[50%] dark:disabled:bg-gray-500/50 "
      />
    </div>
  );
};

export default DirectorFormPage;
