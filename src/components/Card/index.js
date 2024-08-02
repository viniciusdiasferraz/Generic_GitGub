export const Card = ({ children, width }) => {
  return (
    <div
      className={`border border-[#30363d] text-[#c9d1d9] p-4 rounded-lg shadow-lg flex flex-col justify-evenly items-start w-${width}`}
    >
      {children}
    </div>
  );
};
