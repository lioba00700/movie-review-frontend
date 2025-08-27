//2025.08.26 react query 를 적용  - 박민서
//2025.08.25 관리자 영화 데이터 관리 화면 - 박민서
import CustomButton from "@/common/components/CustomButton";
import PaginationButton from "@/common/components/PaginationButton";
import useModal from "@/common/hooks/useModal";
import { getMovieList, patchMovie } from "@/features/movie/services/movieAPI";
import type { Movie } from "@/features/movie/types";
import { useQuery } from "@tanstack/react-query";
import { MdCreate } from "react-icons/md";
import { useNavigate } from "react-router-dom";

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
  const { handleModal } = useModal();

  const fetchMovies = async () => {
    const res = await getMovieList();
    if (res.pass) {
      return res.data;
    }
  };

  const { data, refetch } = useQuery({
    queryKey: ["movie_admin"],
    queryFn: () => fetchMovies(),
  });

  const handleSubmitDelete = async (id: number) => {
    const res = await patchMovie(id);
    if (res.pass) {
      refetch();
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
                  width = "flex-1";
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
          {data?.map((movie: Movie) => (
            <tr
              key={movie.movie_id}
              className="cursor-pointer hover:bg-gray-200 dark:hover:bg-white/10 group"
            >
              {tableHeader.map(header => {
                if (header.key === "delete") return;
                return (
                  <td className="text-left p-[15px] border-1 border-gray-300">
                    {movie[header.key as keyof Movie] as string}
                  </td>
                );
              })}
              <td className="p-[15px] border-1 border-gray-300">
                <CustomButton
                  value=""
                  icon="delete"
                  onClick={() =>
                    handleModal({
                      type: "confirm",
                      message: "정말 삭제하시겠습니까?",
                      onSubmit: () => handleSubmitDelete(movie.movie_id),
                    })
                  }
                  style="bg-red-600 text-white text-sm w-[30px] h-[30px] hover:bg-red-700"
                />
              </td>
              <div className="absolute hidden group-hover:flex p-[15px]">
                <MdCreate size={20} />
              </div>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td className="p-[15px] border-1 border-gray-300" colSpan={8}>
              <div className="flex justify-center">
                <PaginationButton currentPage={1} changePage={() => {}} />
              </div>
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

export default AdminMoviePage;
