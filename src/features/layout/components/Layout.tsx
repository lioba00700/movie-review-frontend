//2025.08.21 레이아웃 컴포넌트 - 박민서 
import type React from "react"
import MainHeader from "./MainHeader"
import useModal from "@/common/hooks/useModal"
import Modal from "@/common/components/Modal";

const Layout = ({children}:{children: React.ReactNode}) => {
  const {isOpen} = useModal();
  return(
    <div className="dark:bg-black min-h-screen">
      <MainHeader />
      {children}
      {
        isOpen && (
          <Modal />
        )
      }
    </div>
  )
}

export default Layout