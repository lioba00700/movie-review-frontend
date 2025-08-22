//2025.08.22 이미지 업로더 - 박민서

import { useEffect, useState } from "react"

const ImageUploader = ({value, onChange}:{value: File | null, onChange: (e:React.ChangeEvent<HTMLInputElement>) => void}) => {
  const [image, setImage] = useState<string>('');

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
      <img className="w-[500px] bg-gray-300 outline-none aspect-[1/1.3]" src={image} />
      <input
          className="transition-all  border-1 border-gray-300 focus:border-blue-400 outline-none rounded-lg p-[8px] text-lg dark:border-gray-400" 
          type="file" 
          onChange={onChange}
          accept='image/jpg, image/png, image/jpeg' />
    </>
  )
}

export default ImageUploader