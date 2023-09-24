import { FaCheck } from "react-icons/fa";
import { IPoolListItem } from "../Interfaces/interfaces";

export function PoolListItem({
  pool,
  selected = false,
  onClick,
}: IPoolListItem) {
  return (
    <>
      <button
        className={`flex justify-between px-2 items-center hover:bg-slate-50 ${
          selected ? "opacity-40" : ""
        }`}
        onClick={() => onClick(pool)}
      >
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 rounded-full bg-slate-500" />
          <div className="flex flex-col items-start">
            <div className="text-lg text-slate-900">{pool.name}</div>
            <div className="text-slate-400">{pool.symbol}</div>
          </div>
        </div>
        <div>{selected && <FaCheck className="text-rose-500" />}</div>
      </button>
    </>
  );
}
