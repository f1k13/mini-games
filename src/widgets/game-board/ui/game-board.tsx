import { generateData } from "@/features/lab/lib/generateData";
import { Lap } from "@/features/lab/ui";
import { useStore } from "effector-react";
import { $board } from "@/widgets/game-board/model/board.ts";
import { setBoard } from "@/widgets/game-board/model/boardEvents.ts";
import { useEffect } from "react";

const GameBoard = () => {
  const data = useStore($board);
  useEffect(() => {
    setBoard(generateData());
  },[]);
  return (
    <div className="flex flex-col">
      <div className="w-full p-20 flex justify-center flex-col-reverse items-center">
        {data.map((item) => (
          <div className="flex gap-20 mt-10" key={item.id}>
            {item.items.map((item) => (
              <Lap item={item} key={item.id} />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default GameBoard;
