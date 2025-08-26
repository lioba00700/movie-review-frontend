//2025.08.25 감독 등록 화면 - 박민서
import CustomButton from "@/common/components/CustomButton";
import CustomInput from "@/common/components/CustomInput";
import ImageUploader from "@/common/components/ImageUploader";
import { Director } from "@/common/schema/director.schema";
import type { FormAction, InputItem } from "@/common/types";
import { formatDate } from "@/common/utils";
import { useEffect, useReducer, useState } from "react";
import { useNavigate } from "react-router-dom";

const movieInputs: InputItem[] = [
  { label: "이름", key: "name", type: "text", required: true },
  { label: "생년월일", key: "birth", type: "date", required: true },
];

type directorState = {
  profile: File | null;
  name: string;
  birth: string;
};

const directorInitialForm: directorState = {
  profile: null,
  name: "",
  birth: formatDate(new Date()),
};

const directorReducer = (
  state: { profile: File | null; name: string; birth: string },
  action: FormAction,
) => {
  switch (action.type) {
    case "CHAGNE":
      return {
        ...state,
        [action.payload.key]: action.payload.value,
      };
    case "RESET":
      return directorInitialForm;
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
      const res = await postDirector();
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
      <ImageUploader
        type="profile"
        label="프로필 이미지"
        required={true}
        value={form.profile}
        onChange={e =>
          dispatch({
            type: "CHAGNE",
            payload: { key: "profile", value: e.target.files?.[0] || null },
          })
        }
      />
      {movieInputs.map(input => (
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
              input.key as Exclude<keyof directorState, typeof File | null>
            ] as string
          }
        />
      ))}
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
