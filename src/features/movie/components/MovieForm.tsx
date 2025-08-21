import { useEffect, useReducer, useState } from "react";
import CustomInput from "../../../common/components/CustomInput";
import type { MovieAction, MovieCreateState } from "../types";
import type { InputItem } from "../../../common/types";
import CustomButton from "../../../common/components/CustomButton";

const movieInputs:InputItem[] = [
  {label:'포스터', key: 'poster', type: 'file'},
  {label:'제목', key: 'title', type: 'text'},
  {label:'장르', key: 'genre', type: 'text'},
  {label:'개봉일', key: 'releaseAt', type: 'date'},
  {label:'감독', key: 'director', type: 'text'},
]

const movieInitialForm:MovieCreateState = {
  poster: null,
  title: '',
  genre: '',
  releaseAt: '2025-01-01',
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
    <div className="w-md">
      {
        movieInputs.map((input)=>(
          <div key={input.key} className="flex flex-col gap-[5px] mb-[15px]">
            <label className="font-semibold">{input.label}</label>
            <CustomInput type={input.type} onChange={(e)=>dispatch({type:'CHAGNE', payload:{key: input.key, value: input.type==='file' ? e.target.files?.[0] || null : e.target.value}})} {...(input.type!=='file' ? {value: form[input.key as Exclude<keyof MovieCreateState, typeof File | null>] as string} : null )} />
          </div>
        ))
      }
      <CustomButton value="등록" onClick={handleSubmitMovie} disabled={subDisabled} style="mt-[50px] bg-blue-600 text-white text-md font-bold p-[8px] w-[50%]"/>
    </div>
  )
}

export default MovieForm;