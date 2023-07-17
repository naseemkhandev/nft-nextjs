const CommonTitle = ({ title }: any) => {
  return (
    <div className="relative w-fit">
      <div className="absolute top-1/2 -translate-y-1/2 left-0 w-[3.3rem] h-[3.3rem] bg-gradient-to-b from-[#6147F8] to-[#BC5EFF] rounded-full -z-10"></div>
      <h2 className="capitalize text-xl sm:text-2xl font-[500] text-center ml-5">
        {title}
      </h2>
    </div>
  );
};

export default CommonTitle;
