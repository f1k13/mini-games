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
import {
  setGameStateDefault,
  setGameStateInGame,
} from "@/entities/game/lib/gameEvents";
import { GameController } from "@/features/game-controller";

const GameBoard = () => {
  const data = useStore($board);
  const user = useStore($user);
  const virtualBalance = useStore($virtualBalance);
  const [value, setValue] = useState<string>("");
  const [isOpen, setIsOpen] = useState(false);
  const [bombOpen, setBombOpen] = useState(false);

  const setRate = (e: React.FormEvent<HTMLFormElement>) => {
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
              <Lap setBombOpen={setBombOpen} rate={Number(value)} item={item} key={item.id} />
            ))}
          </div>
        ))}
        <GameController
          value={value}
          setValue={setValue}
          takeRate={takeRate}
          setRate={setRate}
        />
      </div>
      {isOpen && <Modal setActive={setIsOpen}>Не хватает денег</Modal>}
      {bombOpen && <Modal setActive={setBombOpen}>Вы проиграли</Modal>}
    </div>
  );
};

export default GameBoard;
