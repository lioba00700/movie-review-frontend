import CustomButton from "@/common/components/CustomButton";
import { Cast } from "@/common/schema/movie.schema";
import { useState } from "react";
import z from "zod";

const CastListInput = ({
  required,
  castList,
  onChange,
}: {
  required?: boolean;
  castList: string[];
  onChange: (cast: string) => void;
}) => {
  const [name, setName] = useState<string>("");
  const [error, setError] = useState<string>("");

  const handleSubmitAdd = () => {
    try {
      Cast.parse(name);
      setName("");
      setError("");
      onChange(name);
    } catch (error) {
      if(error instanceof z.ZodError){
        setError(error.issues[0].message);
      }
    }
  };

  return (
    <div className="flex flex-col">
      <label className="font-semibold mb-[10px]">
        {required && <span className="mr-[5px] text-red-600 ">*</span>}
        출연진
      </label>
      <div className="flex gap-[10px]">
        <input
          className="transition-all border-1 flex-1 border-gray-300 focus:border-blue-400 outline-none rounded-lg p-[8px] text-lg dark:border-gray-400"
          type="text"
          value={name}
          onChange={e => setName(e.target.value)}
        />
        <CustomButton
          value="추가"
          onClick={handleSubmitAdd}
          style="bg-blue-600 text-white text-md font-bold p-[11px] w-40% h-full dark:disabled:bg-gray-500/50"
        />
      </div>
      <p className="flex mt-[5px] h-[20px] text-xs text-red-600">{error}</p>
      <div className="flex flex-wrap gap-[5px]">
        {castList.map(cast => (
          <button key={cast} className="cursor-pointer p-[2px] bg-blue-500 text-sm text-white rounded-sm" onClick={() => onChange(cast)}>
            {cast}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CastListInput;
