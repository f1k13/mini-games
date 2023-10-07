import { BoardItem } from "../lib/generateData";
import styles from "./lap.module.css";
import { transformBoard } from "@/widgets/game-board/model/boardEvents.ts";
const Lap = ({ item }: { item: BoardItem }) => {
  const handleClick = () => {
    transformBoard();
  };

  return (
    <div onClick={handleClick} className={styles.root}>
      x{item.title}
      {item.bomb ? "💣" : ""}
    </div>
  );
};

export default Lap;
