import { useEffect, useReducer, useState } from "react";
import CustomInput from "../../../common/components/CustomInput";
import type { MovieAction, MovieCreateState } from "../types";
import type { InputItem } from "../../../common/types";
import CustomButton from "../../../common/components/CustomButton";

const movieInputs:InputItem[] = [
  {label:'제목', key: 'title', type: 'text'},
  {label:'장르', key: 'genre', type: 'text'},
  {label:'개봉일', key: 'releaseAt', type: 'date'},
  {label:'감독', key: 'director', type: 'text'},
]

const movieInitialForm:MovieCreateState = {
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
    <div>
      {
        movieInputs.map((input)=>(
          <>
            <label>{input.label}</label>
            <CustomInput type={input.type} onChange={(e)=>dispatch({type:'CHAGNE', payload:{key: input.key, value: e.target.value}})} value={form[input.key as keyof MovieCreateState]}/>
          </>
        ))
      }
      <CustomButton value="등록" onClick={handleSubmitMovie} disabled={subDisabled}/>
    </div>
  )
}

export default MovieForm;