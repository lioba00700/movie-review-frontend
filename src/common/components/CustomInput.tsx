type CustomInput = {
  type: string,
  value: string,
  onChange: (e:React.ChangeEvent<HTMLInputElement>) => void
}

const CustomInput = ({type, value, onChange}:CustomInput) => {
  return (
    <input type={type} value={value} onChange={onChange}/>
  )
}

export default CustomInput;