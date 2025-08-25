//2025.08.25 관리자 영화 데이터 관리 화면 - 박민서
import CustomButton from "@/common/components/CustomButton";
import PaginationButton from "@/common/components/PaginationButton";
import { useNavigate } from "react-router-dom";

const mockData: Record<string, string | number>[] = [
  {
    id: 1,
    title: "asdf",
    detail: "adsf",
    genre: "rew",
    director: "asdf",
    case: "asdf",
    releaseAt: "asdf",
    runningTime: "asdf",
  },
  {
    id: 2,
    title: "asdf",
    detail: "adsf",
    genre: "rew",
    director: "asdf",
    case: "asdf",
    releaseAt: "asdf",
    runningTime: "asdf",
  },
  {
    id: 3,
    title: "asdf",
    detail: "adsf",
    genre: "rew",
    director: "asdf",
    case: "asdf",
    releaseAt: "asdf",
    runningTime: "asdf",
  },
  {
    id: 4,
    title: "asdf",
    detail: "adsf",
    genre: "rew",
    director: "asdf",
    case: "asdf",
    releaseAt: "asdf",
    runningTime: "asdf",
  },
  {
    id: 5,
    title: "asdf",
    detail: "adsf",
    genre: "rew",
    director: "asdf",
    case: "asdf",
    releaseAt: "asdf",
    runningTime: "asdf",
  },
  {
    id: 6,
    title: "asdf",
    detail: "adsf",
    genre: "rew",
    director: "asdf",
    case: "asdf",
    releaseAt: "asdf",
    runningTime: "asdf",
  },
  {
    id: 7,
    title: "asdf",
    detail: "adsf",
    genre: "rew",
    director: "asdf",
    case: "asdf",
    releaseAt: "asdf",
    runningTime: "asdf",
  },
  {
    id: 8,
    title: "asdf",
    detail: "adsf",
    genre: "rew",
    director: "asdf",
    case: "asdf",
    releaseAt: "asdf",
    runningTime: "asdf",
  },
  {
    id: 9,
    title: "asdf",
    detail: "adsf",
    genre: "rew",
    director: "asdf",
    case: "asdf",
    releaseAt: "asdf",
    runningTime: "asdf",
  },
  {
    id: 10,
    title: "asdf",
    detail: "adsf",
    genre: "rew",
    director: "asdf",
    case: "asdf",
    releaseAt: "asdf",
    runningTime: "asdf",
  },
];

const tableHeader = [
  { key: "title", name: "제목" },
  { key: "detail", name: "설명" },
  { key: "genre", name: "장르" },
  { key: "director", name: "감독" },
  { key: "cast", name: "출연진" },
  { key: "releaseAt", name: "개봉일" },
  { key: "runningTime", name: "상영시간" },
  { key: "delete", name: "" },
];

const AdminMoviePage = () => {
  const navigate = useNavigate();

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
          onClick={() => navigate('/add')}
          style="bg-blue-600 text-white p-[8px] dark:disabled:bg-gray-500/50 hover:bg-blue-700"
        />
      </div>
      <table className="w-full rounded-xl border-collapse mt-[30px]">
        <thead>
          <tr>
            {tableHeader.map(header => {
              let width = "";
              switch (header.key) {
                case "title":
                case "detail":
                  width = "w-1/4";
                  break;
                case "delete":
                  width = "w-[50px]";
                  break;
                default:
                  width = "w-1/11";
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
          {mockData.map(row => (
            <tr
              key={row.id}
              className="cursor-pointer hover:bg-gray-200 dark:hover:bg-white/10"
            >
              {Object.keys(row).map(key => {
                if (key == "id") return;
                return (
                  <td className="text-left p-[15px] border-1 border-gray-300">
                    {row[key]}
                  </td>
                );
              })}
              <td className="p-[15px] border-1 border-gray-300">
                <CustomButton
                  value=""
                  icon="delete"
                  onClick={() => {}}
                  style="bg-red-600 text-white text-sm w-[30px] h-[30px] hover:bg-red-700"
                />
              </td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td
              className="p-[15px] border-1 border-gray-300"
              colSpan={8}
            >
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
