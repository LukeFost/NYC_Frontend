interface SBinterface {
  onClick: () => void;
}

const SwapButton = ({ onClick }: SBinterface) => {
  return <input onClick={onClick} className="btn btn-primary" />;
};

export default SwapButton;
