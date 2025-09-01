//2025.08.26 react query 를 적용  - 박민서
//2025.08.25 관리자 영화 데이터 관리 화면 - 박민서
import CustomButton from "@/common/components/CustomButton";
import Modal from "@/common/components/Modal";
import PaginationButton from "@/common/components/PaginationButton";
import { getMovieList, patchMovie } from "@/features/movie/services/movieAPI";
import type { Movie } from "@/features/movie/types";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { MdCreate } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const tableHeader = [
  { key: "movie_id", name: "ID" },
  { key: "movie_name", name: "제목" },
  { key: "movie_genre", name: "장르" },
  { key: "movie_director", name: "감독" },
  { key: "movie_date", name: "개봉일" },
  { key: "delete", name: "" },
];

const AdminMoviePage = () => {
  const navigate = useNavigate();
  const [selectedPage, setSelectedPage] = useState<number>(0);
  const [selectedRow, setSelectedRow] = useState<number | null>(null);
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);

  const fetchMovies = async (pageParam: number) => {
    const res = await getMovieList(pageParam);
    if (res.pass) {
      return res.data;
    } else {
      console.log(res.data);
    }
  };

  const handlePageNumber = (pageParam: number) => {
    console.log(pageParam);
    setSelectedPage(pageParam);
  };

  const { data, refetch } = useQuery({
    queryKey: ["movie_admin", selectedPage],
    queryFn: () => fetchMovies(selectedPage),
  });

  const handleSubmitDelete = async () => {
    const res = await patchMovie(selectedRow as number);
    setSelectedRow(null);
    if (res.pass) {
      toast.success("삭제되었습니다.");
      refetch();
    } else {
      toast.error("삭제에 실패했습니다.");
    }
  };
  console.log(data);

  return (
    <div className="pt-[90px] p-[50px] dark:text-white dark:bg-black">
      <h1 className="text-2xl font-bold mb-[30px] dark:text-white">
        영화 관리
      </h1>
      <div className="flex items-center gap-[20px] justify-self-end">
        <p className="text-lg font-semibold"></p>
        <CustomButton
          value="새 영화 등록"
          icon="add"
          onClick={() => navigate("/add")}
          style="bg-blue-600 text-white p-[8px] dark:disabled:bg-gray-500/50 hover:bg-blue-700"
        />
      </div>
      <table className="w-full rounded-xl border-collapse mt-[30px]">
        <thead>
          <tr>
            {tableHeader.map(header => {
              let width = "";
              switch (header.key) {
                case "movie_name":
                  width = "w-1/4";
                  break;
                case "delete":
                  width = "w-[50px]";
                  break;
                default:
                  width = "w-1/5";
              }
              return (
                <th
                  className={`${width} text-left p-[15px] border-1 border-gray-300`}
                  key={header.key}
                >
                  {header.name}
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody>
          {data?.content.map((movie: Movie) => (
            <tr
              key={movie.movie_id}
              className="cursor-pointer hover:bg-gray-200 dark:hover:bg-white/10 group"
            >
              {tableHeader.map(header => {
                if (header.key === "delete") return;
                return (
                  <td
                    key={header.key}
                    className="text-left p-[15px] border-1 border-gray-300"
                    onClick={() => navigate(`/edit/${movie.movie_id}`)}
                  >
                    {movie[header.key as keyof Movie] as string}
                  </td>
                );
              })}
              <td className="p-[15px] border-1 border-gray-300">
                <CustomButton
                  value=""
                  icon="delete"
                  onClick={() => {
                    setIsOpenModal(true);
                    setSelectedRow(movie.movie_id);
                  }}
                  style="bg-red-600 text-white text-sm w-[30px] h-[30px] hover:bg-red-700"
                />
              </td>
              <td className="relative flex content-center">
                <div className="absolute hidden group-hover:flex p-[18px] pr-0">
                  <MdCreate size={20} />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td className="p-[15px] border-1 border-gray-300" colSpan={8}>
              <div className="flex justify-center">
                <PaginationButton
                  currentPage={data?.number}
                  totalPage={data?.totalPages}
                  handlePageNumber={handlePageNumber}
                />
              </div>
            </td>
          </tr>
        </tfoot>
      </table>
      <Modal
        title="영화 삭제"
        content={
          <p className="text-center mb-[30px]">
            해당 작업은 되돌릴 수 없습니다.
          </p>
        }
        btn1_name="취소"
        btn1_onclick={() => setIsOpenModal(false)}
        btn1_style="white"
        btn2_name="삭제"
        btn2_onclick={handleSubmitDelete}
        btn2_style="red"
        isOpen={isOpenModal}
        onClose={() => setIsOpenModal(false)}
        isOneBtn={false}
      />
    </div>
  );
};

export default AdminMoviePage;
