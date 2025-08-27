//2025.0827 영화 등록 폼 수정 (장르 체크박스, )
//2025.08.22 날짜 포맷 적용 및 필수 입력 표시 - 박민서
import { useEffect, useReducer, useState } from "react";
import CustomInput from "@/common/components/CustomInput";
import type { MovieCreateState } from "@movie/types";
import type { FormAction, InputItem } from "@/common/types";
import CustomButton from "@/common/components/CustomButton";
import { formatDate, formatTime } from "@/common/utils";
import ImageUploader from "@/common/components/ImageUploader";
import { Movie } from "@/common/schema/movie.schema";
import { useNavigate } from "react-router-dom";
import GenreSelect from "./GenreSelect";
import CastListInput from "./CastListInput";

const movieInputs: InputItem[] = [
  { label: "제목", key: "movie_name", type: "text", required: true },
  { label: "장르", key: "movie_genre", type: "text", required: true },
  { label: "개봉일", key: "movie_date", type: "date", required: true },
  { label: "상영시간", key: "movie_time", type: "time", required: true },
  { label: "감독", key: "movie_director", type: "text", required: true },
  { label: "출연진", key: "movie_cast_list", type: "text", required: true },
  {
    label: "줄거리",
    key: "movie_description",
    type: "textarea",
    required: true,
  },
];

const movieInitialForm: MovieCreateState = {
  movie_image: null,
  movie_name: "",
  movie_genre: [],
  movie_date: formatDate(new Date()),
  movie_time: "02:28:00",
  movie_director: "",
  movie_cast_list: [],
  movie_description: "",
};

const movieReducer = (state: MovieCreateState, action: FormAction) => {
  switch (action.type) {
    case "CHAGNE":
      const {key, value} = action.payload;
      return {
        ...state,
        [key]: key==='movie_time' ? formatTime(value as string) : value,
      };
    case "CHANGE_LIST":
      console.log(state.movie_cast_list);
      const listKey = action.payload.key as "movie_genre" | "movie_cast_list";
      return {
        ...state,
        [action.payload.key]: state[listKey].includes(action.payload.value)
          ? state[listKey].filter(item => item !== action.payload.value)
          : [...state[listKey], action.payload.value],
      };

    case "RESET":
      return movieInitialForm;
  }
};

const MovieForm = ({
  onSubmit,
}: {
  onSubmit: (form: MovieCreateState) => Promise<{ pass: boolean; data: any }>;
}) => {
  const navigate = useNavigate();
  const [form, dispatch] = useReducer(movieReducer, movieInitialForm);
  const [subDisabled, setSubDisabled] = useState<boolean>(true);

  const handleSubmitMovie = async () => {
    //입력값 확인
    //api 요청 에러처리
    try {
      Movie.parse(form);
      const res = await onSubmit(form);
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
      {movieInputs.map(input => {
        if (input.key === "movie_genre")
          return (
            <GenreSelect
              key={input.key}
              required={input.required}
              onChange={genre =>
                dispatch({
                  type: "CHANGE_LIST",
                  payload: { key: "movie_genre", value: genre },
                })
              }
            />
          );
        else if (input.key === "movie_cast_list")
          return (
            <CastListInput
              key={input.key}
              required={input.required}
              castList={form[input.key]}
              onChange={cast =>
                dispatch({
                  type: "CHANGE_LIST",
                  payload: { key: input.key, value: cast },
                })
              }
            />
          );
        else if (input.type === "textarea")
          return (
            <div className="flex flex-col gap-[5px] mb-[15px]" key={input.key}>
              <label className="font-semibold">
                {input.required && (
                  <span className="mr-[5px] text-red-600">*</span>
                )}
                {input.label}
              </label>
              <textarea
                className="transition-all border-1 border-gray-300 focus:border-blue-400 outline-none rounded-lg p-[8px] text-lg dark:border-gray-400"
                value={
                  form[
                    input.key as Exclude<
                      keyof MovieCreateState,
                      typeof File | null
                    >
                  ] as string
                }
                onChange={e =>
                  dispatch({
                    type: "CHAGNE",
                    payload: { key: input.key, value: e.target.value },
                  })
                }
              />
            </div>
          );
        return (
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
        );
      })}
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
