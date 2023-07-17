const CommonButton = ({ btnText }: any) => {
  return (
    <button type="button" className="commonBtn text-xs">
      <span className="text">{btnText}</span>
    </button>
  );
};

export default CommonButton;
