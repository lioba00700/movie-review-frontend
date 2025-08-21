import { useReducer } from "react";
import CustomButton from "../../../common/components/CustomButton";
import CustomInput from "../../../common/components/CustomInput";
import type { InputItem } from "../../../common/types";
import type { ReviewAction, ReviewCreateState } from "../types";

const reivewInputs:InputItem[] = [
  {label:'이름', key: 'writer', type: 'file'},
  {label:'별점', key: 'rating', type: 'text'},
  {label:'내용', key: 'detail', type: 'text'},
]

const reviewInitialForm:ReviewCreateState = {
  writer: '',
  rating: 0,
  detail: '',
}

const reviewReducer = (state:ReviewCreateState, action:ReviewAction) => {
  switch(action.type){
    case 'CHAGNE': 
      return {
        ...state,
        [action.payload.key]:action.payload.value
      }
    case 'RESET':
      return reviewInitialForm;
  }
}

const ReviewForm = ({onSubmit, type}:{type: 'edit' | 'create',onSubmit:()=>void}) => {
  const [form, dispatch] = useReducer(reviewReducer, reviewInitialForm);

  const handleSubmitReview = () => {
    //입력값 확인
    //api 요청 에러처리
    onSubmit()
    console.log('api 요청');
  }
  
  return (
    <div>
      <div className="flex flex-col gap-[5px] mb-[15px]">
        <label className="font-semibold">이름</label>
        <CustomInput type={'text'} onChange={(e)=>dispatch({type:'CHAGNE', payload:{key: 'writer', value: e.target.value}})} value={form['writer']}/>
      </div>
      <div className="flex flex-col gap-[5px] mb-[15px]">
        
      </div>
      <div className="flex flex-col gap-[5px] mb-[15px]">
        <label className="font-semibold">내용</label>
        <textarea 
          className="transition-all border-1 border-gray-300 focus:border-blue-400 outline-none rounded-lg p-[8px] text-lg"
          onChange={(e)=>dispatch({type:'CHAGNE', payload:{key: 'detail', value: e.target.value}})} 
          value={form['detail']}/>
      </div>
      <CustomButton value={type==='create' ? '등록' : '수정'} onClick={handleSubmitReview} style="mt-[50px] bg-blue-600 text-white text-md font-bold p-[8px] w-full"/>
    </div>
  )
}

export default ReviewForm;