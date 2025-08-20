import CustomInput from "../../../common/components/CustomInput";

const ReviewForm = () => {
  return (
    <div>
      <CustomInput type="text" value="" onChange={()=>console.log('asd')}/>
    </div>
  )
}

export default ReviewForm;