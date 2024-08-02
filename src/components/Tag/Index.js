export const Tag = ({ text, number, icon }) => {
  return (
    <div className="h-8 flex items-center justify-between py-0 px-3 gap-1 bg-[#21262d] rounded-md border-[#c9d1d9] border-spacing-[1px] shadow-md text-[#8d96a0] font-medium text-sm">
      {icon}
      {text}
      <div className="bg-[#30363d] py-0 px-[6px] rounded-full">{number}</div>
    </div>
  );
};
