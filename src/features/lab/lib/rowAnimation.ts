import { generateData } from ".";
import { BoardData } from "./generateData";
export const rowAnimation = () => {
  const data: BoardData[] = generateData();
  let changeData: BoardData[] = [];

  for (let i = 0; i <= 1; i++) {
    changeData = data.slice(1, data.length - 1);
    console.log(
      changeData.map((item) => item.items.map((item) => (item.id += 1)))
    );
    // const lineArr = [];
    // const item = {
    //   id: i++,
    //   title: `x${++i}`,
    //   bomb: i > 3 ? true : false,
    // };
    // lineArr.push(item);
    // const line = { id: i, modifier: i, items: lineArr };
    // changeData.push(line);
  }
  return changeData;
};
