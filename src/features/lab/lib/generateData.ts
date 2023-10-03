export type BoardItem = {
  id: number;
  title: string;
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

    // Generate items in a line
    for (let itemId = 0; itemId < 5; itemId++) {
      const isBomb = itemId > 3;
      const item = { id: itemId, title: lineId, bomb: isBomb };
      lineArr.push(item);
    }

    // Create line object
    const line = { id: lineId, modifier: lineId, items: lineArr };
    data.push(line);
  }

  return data;
};
