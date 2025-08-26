//2025.08.22 이미지 업로더 - 박민서
import { MdCreate } from "react-icons/md";
import { useEffect, useRef, useState } from "react"

const ImageUploader = ({value, onChange, type, label, required}:{value: File | null, onChange: (e:React.ChangeEvent<HTMLInputElement>) => void, type: 'poster' | 'profile', label:string, required:boolean}) => {
  const [image, setImage] = useState<string>('');

  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(()=>{
    if(value){
      const image = URL.createObjectURL(value);
      setImage(image);
    }

    return () => {
      URL.revokeObjectURL(image);
      setImage('');
    }
  },[value])

  return(
    <>
      <label className="font-semibold">
        {required && <span className="mr-[5px] text-red-600">*</span> } 
        {label}
      </label>
      <div 
        className={`${type==='poster' ? "aspect-[1/1.4]" : "aspect-[1/1]"} flex transition-all items-center justify-center bg-gray-300 hover:bg-gray-400 outline-none  rounded-lg cursor-pointer dark:bg-gray-500/40 overflow-hidden mb-[15px] group relative`}
        onClick={()=>inputRef.current?.click()}>
        {
          image==='' 
          ? <span>이미지를 선택해주세요.</span> 
          : (
            <>
              {
                <div className="absolute text-white w-full h-full hidden group-hover:flex bg-black/50 items-center justify-center select-none">
                  <MdCreate color="white" size={20}/>
                  <p>이미지 변경</p>
                </div>
              }
              <img className="w-full" src={image} alt="poster-image" />
            </>
          )
        }
      </div>
      <input
          className="hidden w-full transition-all border-1 border-gray-300 focus:border-blue-400 outline-none rounded-lg p-[8px] text-lg dark:border-gray-400" 
          type="file" 
          ref={inputRef}
          onChange={onChange}
          accept='image/jpg, image/png, image/jpeg' />
    </>
  )
}

export default ImageUploader