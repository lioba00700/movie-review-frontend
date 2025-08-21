export type InputItem = {
  label:string, 
  key:string, 
  type:string
}

export type ThemeState = {
  theme: 'light' | 'dark',
  changeTheme: () => void
}

export type ModalState = {
  modal: {
    isOpen: boolean,
    type: 'editReview' | 'confirm' | 'editMovie',
    message: string,
    onSubmit: ()=>void
  }
  handleModal: ({type, message, onSubmit}:{type:'editReview' | 'confirm' | 'editMovie', message:string, onSubmit:()=>void}) => void,
  closeModal: ()=> void
}