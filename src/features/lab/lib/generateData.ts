export type BoardItem = {
  id: number;
  title: number;
  bomb: boolean;
};

export type BoardData = {
  id: number;
  modifier: number;
  items: BoardItem[];
};

export const generateData = () => {
  const data: BoardData[] = [];
  for (let lineId = 2; lineId <= 6; lineId++) {
    const lineArr = [];

    for (let itemId = 0; itemId < 5; itemId++) { 
      let isBomb;

      if (Math.random() > 0.5) {
        isBomb = true;
      } else {
        isBomb = false;
      }
      const item = { id: itemId, title: lineId, bomb: isBomb };
      lineArr.push(item);
    }
    const line = { id: lineId, modifier: lineId, items: lineArr };
    data.push(line);
  }
  console.log(data);
  return data;
};
