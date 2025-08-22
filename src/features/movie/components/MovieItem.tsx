//2025.08.22 영화 목록 아이템 - 박민서
import { useNavigate } from "react-router-dom"
import type { Movie } from "@movie/types";
import CustomButton from "@/common/components/CustomButton";
import useModal from "@/common/hooks/useModal";

const MovieItem = ({title, genre, releaseAt, director}:Movie) => {
  const navigate = useNavigate();
  const {handleModal} = useModal();

  return (
    <li 
      className="bg-white dark:bg-gray-500/40 dark:border-none min-w-[250px] transition-all cursor-pointer rounded-xl hover:shadow-2xl overflow-hidden border-1 border-gray-200">
      <div 
        className="w-full bg-gray-300 dark:bg-white/20  aspect-[1/1.3]"
        onClick={()=>navigate(`/detail/${title.replace(" ","")}`)}>
          movie poster
      </div>
      <div className="p-[20px]">
        <h4 className="text-xl font-bold mb-[10px]">{title}</h4>  
        <p>장르: {genre}</p>
        <p>개봉일: {releaseAt}</p>
        <p>감독: {director}</p>
        <div className="flex gap-[10px] mt-[30px] justify-end">
          <CustomButton value="삭제" onClick={()=>handleModal({type:'confirm', message: '정말 삭제하시겠습니까?', onSubmit: ()=>{}})} style="bg-red-600 text-white text-sm"/>  
          <CustomButton value="수정" onClick={()=>handleModal({type:'editMovie', message: '영화 수정', onSubmit: ()=>{}})} style="bg-blue-600 text-white text-sm"/>  
        </div>
      </div>
    </li>
  )
}

export default MovieItem;