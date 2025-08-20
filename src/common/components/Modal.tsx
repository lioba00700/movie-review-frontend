type ModalType = "review" | "confirm"

const Modal = ({isOpen, type}:{isOpen:boolean,type:ModalType}) => {
  return (
    <div>
      {
        isOpen && (
          <div>
            <h3>{}</h3>
          </div>
        )
      }
    </div>
  )
}

export default Modal;