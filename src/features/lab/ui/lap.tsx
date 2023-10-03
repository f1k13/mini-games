import { rowAnimation } from "../lib";
import { BoardItem } from "../lib/generateData";
import styles from "./lap.module.css";
const Lap = ({ item }: { item: BoardItem }) => {
  // useEffect(() => {
  //   rowAnimation();
  // });
  const setPosition = () => {
    console.log(rowAnimation());
  };

  return (
    <div onClick={() => setPosition()} className={styles.root}>
      {item.title}
    </div>
  );
};

export default Lap;
