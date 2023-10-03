import { generateData } from ".";
import { BoardData } from "./generateData";
export const rowAnimation = () => {
  const data: BoardData[] = generateData();
  let changeData: BoardData[] = [];

  const sliceRow = (changeData = data.slice(1));
  console.log(sliceRow.map((item) => item.items.map((item) => item)));
  changeData.push(sliceRow);

  return changeData;
};
