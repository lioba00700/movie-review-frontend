//2025.08.22 이미지 업로더 - 박민서

import { useEffect, useRef, useState } from "react"

const ImageUploader = ({value, onChange}:{value: File | null, onChange: (e:React.ChangeEvent<HTMLInputElement>) => void}) => {
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
      <div 
        className="flex items-center justify-center bg-gray-300 outline-none aspect-[1/1.3] rounded-lg cursor-pointer dark:bg-gray-500/40 overflow-hidden mb-[15px]"
        onClick={()=>inputRef.current?.click()}>
        {
          image==='' ? <span>이미지를 선택해주세요.</span> : <img src={image} alt="poster-image" />
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