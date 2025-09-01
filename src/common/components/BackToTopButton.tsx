//2025.08.25 최상단 이동 버튼 - 박민서
import { useEffect, useState } from "react";
import { MdArrowUpward } from "react-icons/md";

const BackToTopButton = () => {
    const [scrolled, setScrolled] = useState<boolean>(false);

    const backToTop = () => {
        window.scrollTo(0,0);
    }

    useEffect(()=>{
        const handleScroll = () => {
            const scrollY = window.scrollY;
            if(scrollY > 0){
                setScrolled(true);
            }
            else{
                setScrolled(false);
            }
        }

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    },[window.scrollY]);

    return (
        <>
        {
            scrolled && (
                <button className="cursor-pointer border-1 rounded-full bg-white dark:bg-black border-gray-300 hover:bg-gray-100 dark:hover:bg-white/10 fixed bottom-[30px] right-[30px] p-[15px]" onClick={backToTop}>
                    <MdArrowUpward size={30}/>
                </button>
            )
        }
        </>
    )
}

export default BackToTopButton;