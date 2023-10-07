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

function getRandomBombPosition(length: number) {
  const uniqueNumbers = new Set();
  while (uniqueNumbers.size < length) {
    const randomNum = Math.floor(Math.random() * 5);
    uniqueNumbers.add(randomNum);
  }
  return Array.from(uniqueNumbers);
}

export const generateData = () => {
  const data: BoardData[] = [];
  for (let lineId = 2; lineId <= 6; lineId++) {
    const lineArr = [];
    const bombCount = lineId > 5 ? 4 : lineId - 1;
    const bombs: number[] = getRandomBombPosition(bombCount) as number[];
    for (let itemId = 0; itemId < 5; itemId++) {
      const item = { id: itemId, title: lineId, bomb: bombs.includes(itemId) };
      lineArr.push(item);
    }
    const line = { id: lineId, modifier: lineId, items: lineArr };
    data.push(line);
  }
  return data;
};
