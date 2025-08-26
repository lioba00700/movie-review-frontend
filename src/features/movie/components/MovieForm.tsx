//2025.08.22 날짜 포맷 적용 및 필수 입력 표시 - 박민서
import { useEffect, useReducer, useState } from "react";
import CustomInput from "@/common/components/CustomInput";
import type { MovieCreateState } from "@movie/types";
import type { FormAction, InputItem } from "@/common/types";
import CustomButton from "@/common/components/CustomButton";
import { formatDate } from "@/common/utils";
import ImageUploader from "@/common/components/ImageUploader";
import { Movie } from "@/common/schema/movie.schema";
import { useNavigate } from "react-router-dom";

const movieInputs: InputItem[] = [
  { label: "제목", key: "movie_name", type: "text", required: true },
  { label: "장르", key: "movie_genre", type: "text", required: true },
  { label: "개봉일", key: "movie_date", type: "date", required: true },
  { label: "상영시간", key: "movie_time", type: "time", required: true },
  { label: "감독", key: "movie_director", type: "text", required: true },
  { label: "출연진", key: "movie_cast_list", type: "text", required: true },
  { label: "줄거리", key: "movie_description", type: "text", required: true },
];

const movieInitialForm: MovieCreateState = {
  movie_image: null,
  movie_name: "",
  movie_genre: "",
  movie_date: formatDate(new Date()),
  movie_time: "",
  movie_director: "",
  movie_cast_list: "",
  movie_description: "",
};

const movieReducer = (state: MovieCreateState, action: FormAction) => {
  switch (action.type) {
    case "CHAGNE":
      return {
        ...state,
        [action.payload.key]: action.payload.value,
      };
    case "RESET":
      return movieInitialForm;
  }
};

const MovieForm = ({onSubmit}: {onSubmit:()=>void}) => {
  const navigate = useNavigate();
  const [form, dispatch] = useReducer(movieReducer, movieInitialForm);
  const [subDisabled, setSubDisabled] = useState<boolean>(true);

  const handleSubmitMovie = async () => {
    //입력값 확인
    //api 요청 에러처리
    try{
      Movie.parse(form);
      const res = await onSubmit();
      if(res.pass){
        navigate('/');
      }

    }catch(error){
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
    <div className="w-full">
      <ImageUploader
        type="poster"
        label="포스터 이미지"
        required={true}
        value={form.movie_image}
        onChange={e =>
          dispatch({
            type: "CHAGNE",
            payload: { key: "movie_image", value: e.target.files?.[0] || null },
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
              input.key as Exclude<keyof MovieCreateState, typeof File | null>
            ] as string
          }
        />
      ))}
      <CustomButton
        value="등록"
        onClick={handleSubmitMovie}
        disabled={subDisabled}
        style="mt-[50px] bg-blue-600 text-white text-md font-bold p-[8px] w-[50%] dark:disabled:bg-gray-500/50 "
      />
    </div>
  );
};

export default MovieForm;
