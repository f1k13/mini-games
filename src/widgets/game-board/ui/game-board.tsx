import { generateData } from "@/features/lab/lib/generateData";
import { Lap } from "@/features/lab/ui";

import { useCallback } from "react";

const GameBoard = () => {
  const data = useCallback(() => generateData(), []);
  return (
    <div className="w-full p-20 flex justify-center flex-col-reverse items-center">
      {data().map((item) => (
        <div className="flex gap-20 mt-10" key={item.id}>
          {item.items.map((item) => (
            <Lap item={item} key={item.id} />
          ))}
        </div>
      ))}
    </div>
  );
};

export default GameBoard;
