type CustomButton = {
  value: string,
  onClick: ()=>void,
  disabled?: boolean,
  style: string
}

const CustomButton = ({value, onClick, disabled, style}:CustomButton) => {
  return(
    <button 
      className={`${style} cursor-pointer p-[5px] rounded-md translate-all disabled:bg-gray-300 disabled:cursor-default`}
      disabled={disabled}
      onClick={onClick}>
        {value}
    </button>
  )
}

export default CustomButton