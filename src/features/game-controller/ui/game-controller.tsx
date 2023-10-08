import { $game } from "@/entities/game/model/game";
import { $virtualBalance } from "@/entities/virtual-balance/model/virtual-balance";
import { useStore } from "effector-react";

const GameController = ({
  takeRate,
  setRate,
  value,
  setValue
}: {
  takeRate: () => void;
  setRate: (e: React.FormEvent<HTMLFormElement>) => void;
  value: string;
  setValue: (value: string) => void;
}) => {
  const gameState = useStore($game);
  const virtualBalance = useStore($virtualBalance);
  return (
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
  );
};

export default GameController;
