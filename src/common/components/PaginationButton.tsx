//2025.08.25 페이지네이션 버튼 - 박민서
import { useEffect, useState } from "react";
import CustomButton from "./CustomButton";

const PaginationButton = ({
  currentPage,
  totalPage,
  handlePageNumber,
}: {
  currentPage: number;
  totalPage: number;
  handlePageNumber: (page: number) => void;
}) => {
  const [pageGroup, setPageGroup] = useState<number>(0);

  useEffect(() => {
    if (pageGroup!==0 && currentPage + 1 > pageGroup * 8) {
      setPageGroup(pageGroup + 1);
      console.log(pageGroup);
    }
  }, [currentPage]);

  console.log("현재페이지", currentPage);
  return (
    <div className="flex gap-[20px]">
      <CustomButton
        value=""
        icon="leftArrow"
        onClick={() => handlePageNumber(currentPage - 1)}
        disabled={currentPage < 1}
        style="flex hover:bg-gray-200 dark:hover:bg-white/10 min-w-[40px] h-[40px] items-center justify-center"
      />
      <div className="flex font-medium text-xl gap-[3px]">
        {Array.from({ length: Math.min(totalPage - currentPage, 8) }).map(
          (_, i) => {
            console.log(8 * pageGroup + i + 1, pageGroup);
            console.log("현재페이지", currentPage);
            return (
              <CustomButton
                key={i}
                value={String(8 * pageGroup + i + 1)}
                onClick={() => handlePageNumber(8 * pageGroup + i)}
                style={`${currentPage == 8 * pageGroup + i ? "bg-blue-600 hover:bg-blue-700 text-white" : "hover:bg-gray-200 dark:hover:bg-white/10"} flex  min-w-[40px] h-[40px] items-center justify-center`}
              />
            );
          },
        )}
      </div>
      <CustomButton
        value=""
        icon="rightArrow"
        onClick={() => handlePageNumber(currentPage + 1)}
        disabled={currentPage > totalPage - 1}
        style="flex hover:bg-gray-200 dark:hover:bg-white/10 min-w-[40px] h-[40px] items-center justify-center"
      />
    </div>
  );
};

export default PaginationButton;
