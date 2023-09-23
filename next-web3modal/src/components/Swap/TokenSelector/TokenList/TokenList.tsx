import { ISelectOther } from "../Interfaces/interfaces";
import { tokens } from "../Interfaces/interfaces";
import { TokenListItem } from "../TokenListItem/TokenListItem";

const TokenList = ({ selectedToken, onClick }: ISelectOther) => {
  return (
    <div className="flex flex-col gap-4">
      {tokens.map((token, idx) => (
        <TokenListItem
          token={token}
          selected={token.id == selectedToken?.id}
          onClick={onClick}
          key={idx}
        />
      ))}
    </div>
  );
};

export default TokenList;
