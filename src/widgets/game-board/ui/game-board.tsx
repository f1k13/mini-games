import { generateData } from "@/features/lab/lib/generateData";
import { Lap } from "@/features/lab/ui";
import { useStore } from "effector-react";
import { $board } from "@/widgets/game-board/model/board.ts";
import { setBoard } from "@/widgets/game-board/model/boardEvents.ts";
import { useEffect, useState } from "react";
import {
  changeVirtualBalanceByModifier,
  setVirtualBalance,
} from "@/entities/virtual-balance/lib/virtual-balance-events";
import { $virtualBalance } from "@/entities/virtual-balance/model/virtual-balance";
import { changeUserBalanceFx } from "@/entities/user/lib/userEffects";
import { $user } from "@/entities/user/model/user";
import { Modal } from "@/shared/ui/modal";
import { $game } from "@/entities/game/model/game";
import {
  setGameStateDefault,
  setGameStateInGame,
} from "@/entities/game/lib/gameEvents";

const GameBoard = () => {
  const data = useStore($board);
  const [value, setValue] = useState<string>("");
  const [isOpen, setIsOpen] = useState(false);
  const virtualBalance = useStore($virtualBalance);
  const gameState = useStore($game);

  
  const user = useStore($user);

  const setRate = (e) => {
    e.preventDefault();
    setValue(value);
    if (user) {
      if (Number(value) > user.balance) {
        setIsOpen(true);
        setValue("");
        setGameStateInGame();
      } else {
        setVirtualBalance(Number(value));
        
      }
    }
  };
  const takeRate = () => {
    if (user) {
      setBoard(generateData());
      changeUserBalanceFx({
        nickname: user.nickname,
        balance: virtualBalance + user.balance,
      });
      changeVirtualBalanceByModifier(0);
      setGameStateDefault();
    }
  };
  useEffect(() => {
    setBoard(generateData());
  }, []);
  return (
    <div className="flex flex-col">
      <div className="w-full p-20 flex justify-center flex-col-reverse items-center">
        {data.map((item) => (
          <div className="flex gap-20 mt-10" key={item.id}>
            {item.items.map((item) => (
              <Lap rate={Number(value)} item={item} key={item.id} />
            ))}
          </div>
        ))}
        <div className="flex items-center ">
          <div className="flex flex-col justify-between mr-20 h-full">
            <span className="text-1xl bg-secondary flex justify-center items-center px-2 py-2 rounded-xl ">
              Возможный выигрыш {virtualBalance}
            </span>
            <button
              disabled={gameState === "inGame"}
              onClick={takeRate}
              className="bg-secondary mt-5 p-2 rounded-xl text-main hover:bg-secondaryHover transition ease-in-out delay-250 text-color outline-none text-1xl"
            >
              Забрать ставку
            </button>
          </div>
          <form className="flex flex-col">
            <input
              disabled={gameState === "inGame"}
              value={value}
              onChange={(e) => setValue(e.target.value)}
              type="number"
              placeholder="Поставить ставку"
              className="bg-secondary p-2 rounded-xl text-main focus:bg-secondary border border-main transition ease-in-out delay-250 text-color outline-none text-1xl placeholder:text-main"
            />
            <button
              onClick={(e) => setRate(e)}
              className="bg-secondary mt-5 p-2 rounded-xl text-main hover:bg-secondaryHover transition ease-in-out delay-250 text-color outline-none text-1xl"
            >
              Сделать ставку
            </button>
          </form>
        </div>
      </div>
      {isOpen && <Modal setActive={setIsOpen}>Не хватает денег</Modal>}
    </div>
  );
};

export default GameBoard;
