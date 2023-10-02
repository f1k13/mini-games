const Lab = ({
  item,
}: {
  item: { title: string; id: number; bomb: boolean };
}) => {
  return (
    <div className="w-20 h-20 rounded-full bg-cyan-300  text-slate-700 text-lg flex justify-center items-center">
      {item.title}
    </div>
  );
};

export default Lab;
