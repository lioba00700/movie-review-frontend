type CustomInput = {
  type: string,
  value?: string,
  onChange: (e:React.ChangeEvent<HTMLInputElement>) => void
}

const CustomInput = ({type, value, onChange}:CustomInput) => {
  return (
    <input
      className="transition-all border-1 border-gray-300 focus:border-blue-400 outline-none rounded-lg p-[8px] text-lg" 
      type={type} 
      value={value} 
      onChange={onChange}
      {...(type==='file' ? {accept: 'image/jpg, image/png, image/jpeg'} : null)} />
  )
}

export default CustomInput;