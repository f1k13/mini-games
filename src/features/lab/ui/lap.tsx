import { useStore } from "effector-react/compat";
import { BoardItem, generateData } from "../lib/generateData";
import styles from "./lap.module.css";
import {
  setBoard,
  transformBoard,
} from "@/widgets/game-board/model/boardEvents.ts";
import { $user } from "@/entities/user/model/user";
import { changeUserBalanceFx } from "@/entities/user/lib/userEffects";

import { changeVirtualBalanceByModifier } from "@/entities/virtual-balance/lib/virtual-balance-events";

import { setGameStateDefault } from "@/entities/game/lib/gameEvents";

const Lap = ({
  item,
  rate,
  setBombOpen,
}: {
  item: BoardItem;
  rate: number;
  setBombOpen: (value: boolean) => void;
}) => {
  const user = useStore($user);

  const handleClick = () => {
    if (user) {
      if (item.bomb) {
        setBoard(generateData());
        changeUserBalanceFx({
          nickname: String(user.nickname),
          balance: user.balance - rate,
        });
        setGameStateDefault();
        changeVirtualBalanceByModifier(0);
        setBombOpen(true);
      } else {
        changeVirtualBalanceByModifier(item.title);
      }
      transformBoard();
    }
  };
  if (!rate) return null;
  return (
    <div>
      <div onClick={handleClick} className={styles.root}>
        x{item.title}
      </div>
    </div>
  );
};

export default Lap;
