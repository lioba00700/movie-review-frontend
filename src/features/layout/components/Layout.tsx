//2025.08.21 레이아웃 컴포넌트 - 박민서 
import type React from "react"
import MainHeader from "./MainHeader"
import {ToastContainer} from 'react-toastify'

const Layout = ({children}:{children: React.ReactNode}) => {
  return(
    <div className="dark:bg-black min-h-screen">
      <MainHeader />
      {children}
      <ToastContainer />
    </div>
  )
}

export default Layout