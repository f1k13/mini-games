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
  // Generate lines
  for (let lineId = 2; lineId <= 6; lineId++) {
    const lineArr = [];

    for (let itemId = 0; itemId < 5; itemId++) {
      const randomNumber = Math.random();
      const randomBomb = lineId / 5;

      const isBomb = randomNumber <= randomBomb ? true : false;
      const item = { id: itemId, title: lineId, bomb: isBomb };
      lineArr.push(item);
    }

    const line = { id: lineId, modifier: lineId, items: lineArr };
    data.push(line);
  }

  return data;
};
