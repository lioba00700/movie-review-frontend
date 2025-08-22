//2025.08.22 label 추가 및 필수 입력 표시, 이미지 파일 등록 로직 분리 (ImageUploader) - 박민서

type CustomInput = {
  label: string,
  required?:boolean,
  type: string,
  value?: string,
  onChange: (e:React.ChangeEvent<HTMLInputElement>) => void
}

const CustomInput = ({label, required, type, value, onChange}:CustomInput) => {
  return (
    <div className="flex flex-col gap-[5px] mb-[15px]">
      <label className="font-semibold">
        {label}
        {required && <span className="ml-[5px] text-red-600">*</span> } 
      </label>
      <input
        className="transition-all border-1 border-gray-300 focus:border-blue-400 outline-none rounded-lg p-[8px] text-lg dark:border-gray-400" 
        type={type} 
        value={value} 
        onChange={onChange}
        {...(type==='file' ? {accept: 'image/jpg, image/png, image/jpeg'} : null)} />
    </div>
  )
}

export default CustomInput;