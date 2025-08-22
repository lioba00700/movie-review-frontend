//2025.08.22 날짜 포맷 적용 및 필수 입력 표시 - 박민서
import { useEffect, useReducer, useState } from "react";
import CustomInput from "@/common/components/CustomInput";
import type { MovieAction, MovieCreateState } from "@movie/types";
import type { InputItem } from "@/common/types";
import CustomButton from "@/common/components/CustomButton";
import { FormatDate } from "@/common/utils";

const movieInputs:InputItem[] = [
  {label:'포스터', key: 'poster', type: 'file', required:true},
  {label:'제목', key: 'title', type: 'text',required:true},
  {label:'장르', key: 'genre', type: 'text',required:true},
  {label:'개봉일', key: 'releaseAt', type: 'date', required:true},
  {label:'감독', key: 'director', type: 'text', required:true},
]

const movieInitialForm:MovieCreateState = {
  poster: null,
  title: '',
  genre: '',
  releaseAt: FormatDate(new Date()),
  director: ''
}

const movieReducer = (state:MovieCreateState, action:MovieAction) => {
  switch(action.type){
    case 'CHAGNE': 
      return {
        ...state,
        [action.payload.key]:action.payload.value
      }
    case 'RESET':
      return movieInitialForm;
  }
}

const MovieForm = () => {
  const [form, dispatch] = useReducer(movieReducer, movieInitialForm);
  const [subDisabled, setSubDisabled]  = useState<boolean>(true);

  const handleSubmitMovie = () => {
    //입력값 확인
    //api 요청 에러처리
    console.log('api 요청');
  }

  useEffect(()=>{
    if(Object.values(form).some(value=>value==="")){
      setSubDisabled(true);
      return;
    }
    setSubDisabled(false);
    return;
  },[form])

  return (
    <div className="w-full">
      {
        movieInputs.map((input)=>(
          <CustomInput 
            key={input.key} 
            label={input.label} 
            required={input.required}
            type={input.type} 
            onChange={(e)=>dispatch({type:'CHAGNE', payload:{key: input.key, value: input.type==='file' ? e.target.files?.[0] || null : e.target.value}})} 
            {...(input.type!=='file' ? {value: form[input.key as Exclude<keyof MovieCreateState, typeof File | null>] as string} : null )} />
        ))
      }
      <CustomButton value="등록" onClick={handleSubmitMovie} disabled={subDisabled} style="mt-[50px] bg-blue-600 text-white text-md font-bold p-[8px] w-[50%] dark:disabled:bg-gray-500/50 "/>
    </div>
  )
}

export default MovieForm;