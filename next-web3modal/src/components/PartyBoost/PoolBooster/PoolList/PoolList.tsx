import { ISelectOther } from "../Interfaces/interfaces";
import { pools } from "../../../../Recoil/atom";
import { PoolListItem } from "../PoolListItem/PoolListItem";
import { useRecoilState } from "recoil";
import { useNetwork } from "wagmi";

const PoolList = ({ selectedPool, onClick }: ISelectOther) => {
  const [thePools, setThePools] = useRecoilState(pools);
  const { chain } = useNetwork();
  return (
    <div className="flex flex-col gap-4">
      {thePools
        .filter((poolVector) => poolVector.protocol === chain?.name)
        .map((poolVector, idx) =>
          poolVector.pool.name ? (
            <PoolListItem
              pool={poolVector.pool}
              selected={poolVector.pool.name == selectedPool?.name}
              onClick={onClick}
              key={idx}
            />
          ) : null
        )}
    </div>
  );
};

export default PoolList;
