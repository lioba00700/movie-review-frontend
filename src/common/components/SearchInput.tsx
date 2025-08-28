//2025.08.27 검색 박스 컴포넌트 - 박민서
import { useEffect, useState } from "react";
import CustomButton from "./CustomButton";

type SearchInput = {
  label: string;
  required?: boolean;
  type: string;
  value?: string;
  onChange: (keyword: string, id: number) => void;
  onSubmit: (keyword: string) => Promise<{ pass: boolean; data: any }>;
};

const SearchInput = ({
  label,
  required,
  value,
  onChange,
  onSubmit,
}: SearchInput) => {
  const [keyword, setKeyword] = useState<string>("");
  const [searchList, setSearchList] = useState<string[]>([]);
  const [openList, setOpenList] = useState<boolean>(false);

  const handleSubmitSearch = async () => {
    const res = await onSubmit(keyword);
    console.log(res.data);
    if (res.pass) {
      setSearchList(res.data);
      setOpenList(true);
    }
  };

  useEffect(() => {
    setKeyword(value as string);
  }, [value]);

  return (
    <div className="flex flex-col gap-[5px] mb-[5px] relative">
      <label className="font-semibold">
        {required && <span className="mr-[5px] text-red-600">*</span>}
        {label}
      </label>
      <div className="flex gap-[10px]">
        <input
          className="transition-all border-1 flex-1 border-gray-300 focus:border-blue-400 outline-none rounded-lg p-[8px] text-lg dark:border-gray-400"
          type={"text"}
          value={keyword}
          onChange={e => {
            setKeyword(e.target.value);
          }}
        />
        <CustomButton
          value="검색"
          onClick={handleSubmitSearch}
          style="bg-blue-600 text-white text-md font-bold p-[11px] w-40% h-full dark:disabled:bg-gray-500/50"
        />
      </div>
      {openList && (
        <ul className="absolute w-full rounded-lg p-[5px] top-[90px] bg-white dark:bg-black border-1 border-gray-200 dark:border-white">
          {searchList.map((search: any) => (
            <li
              className="hover:bg-gray-200 dark:hover:bg-white/30 p-[10px] rounded-lg"
              key={search.id}
              onClick={() => {
                onChange(search.name, search.id);
                setOpenList(false);
              }}
            >
              {search.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchInput;
