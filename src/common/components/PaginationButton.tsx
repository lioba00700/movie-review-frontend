//2025.08.25 페이지네이션 버튼 - 박민서
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
  return (
    <div className="flex gap-[20px]">
      <CustomButton
        value=""
        icon="leftArrow"
        onClick={() => {}}
        style="flex hover:bg-gray-200 dark:hover:bg-white/10 min-w-[40px] h-[40px] items-center justify-center"
      />
      <div className="flex font-medium text-xl gap-[3px]">
        {Array.from({ length: Math.min(totalPage - currentPage, 8) }).map(
          (_, i) => (
            <CustomButton
              value={String(currentPage + i + 1)}
              onClick={() => handlePageNumber(currentPage + i)}
              style={`${currentPage == currentPage + i ? "bg-blue-600 hover:bg-blue-700 text-white" : "hover:bg-gray-200 dark:hover:bg-white/10"} flex  min-w-[40px] h-[40px] items-center justify-center`}
            />
          ),
        )}
      </div>
      <CustomButton
        value=""
        icon="rightArrow"
        onClick={() => {}}
        style="flex hover:bg-gray-200 dark:hover:bg-white/10 min-w-[40px] h-[40px] items-center justify-center"
      />
    </div>
  );
};

export default PaginationButton;
