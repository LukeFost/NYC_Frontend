"use client";
import { useRecoilState } from "recoil";
import { UniV3 } from "../../../Recoil/atom";

const ToggleV4 = () => {
  const [currentUniV3, setCurrentUniV3] = useRecoilState(UniV3);

  const handleToggle = () => {
    setCurrentUniV3((prevState) => !prevState);
  };

  return (
    <>
      <input
        type="checkbox"
        className="toggle"
        checked={currentUniV3}
        onChange={handleToggle}
      />
      {`T/F UNIV3 is active: ${currentUniV3}`}
    </>
  );
};

export default ToggleV4;
