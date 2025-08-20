type CustomButton = {
  value: string,
  onClick: ()=>void,
  disabled: boolean
}

const CustomButton = ({value, onClick, disabled}:CustomButton) => {
  return(
    <button 
      className=""
      disabled={disabled}
      onClick={onClick}>
        {value}
    </button>
  )
}

export default CustomButton