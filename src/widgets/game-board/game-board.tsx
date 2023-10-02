import { generateData } from "@/features/lab/lib/generateData";
import Lab from "@/features/lab/ui/lab";

const gameBoard = () => {
  return (
    <div className="w-full border-2 border-blue-100 rounded-lg h-screen p-20 flex justify-center flex-col-reverse items-center shadow-outline">
      {generateData().map((item) => (
        <div className="flex gap-20 mt-10" key={item.id}>
          {item.items.map((item) => (
            <Lab item={item} key={item.id} />
          ))}
        </div>
      ))}
    </div>
  );
};

export default gameBoard;
