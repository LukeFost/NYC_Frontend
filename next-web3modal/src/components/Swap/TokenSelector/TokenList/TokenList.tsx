import { ISelectOther } from "../Interfaces/interfaces";
import { tokens, targetDomain } from "../../../../Recoil/atom";
import { TokenListItem } from "../TokenListItem/TokenListItem";
import { useRecoilState } from "recoil";
import { useNetwork } from "wagmi";

const TokenList = ({ selectedToken, onClick }: ISelectOther) => {
  const [theTokens, setTheTokens] = useRecoilState(tokens);
  const { chain } = useNetwork();
  return (
    <div className="flex flex-col gap-4">
      {theTokens.map((tokenVector, idx) =>
        tokenVector.token.name ? (
          <TokenListItem
            token={tokenVector.token}
            selected={tokenVector.token.name == selectedToken?.name}
            onClick={onClick}
            key={idx}
          />
        ) : null
      )}
    </div>
  );
};

export default TokenList;
