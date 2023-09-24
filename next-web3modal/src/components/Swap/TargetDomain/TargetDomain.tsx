"use client";
import { useRecoilState } from "recoil";
import { UniV3 } from "../../../Recoil/atom";

const CurrentTargetDomain = () => {
  const [currentUniV3, setCurrentUniV3] = useRecoilState(UniV3);

  const handleSelection = (selection: string) => {
    setCurrentUniV3(selection === "Scroll Sepolia");
  };

  return (
    <details className="dropdown mb-32">
      <summary className="m-1 btn">open or close</summary>
      <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
        <li>
          <a
            onClick={() => handleSelection("Scroll Sepolia")}
            className={currentUniV3 ? "bg-violet-200" : ""}
          >
            Scroll Sepolia
          </a>
        </li>
        <li>
          <a
            onClick={() => handleSelection("Gnosis Mainnet")}
            className={!currentUniV3 ? "bg-violet-200" : ""}
          >
            Gnosis Mainnet
          </a>
        </li>
      </ul>
    </details>
  );
};

export default CurrentTargetDomain;
