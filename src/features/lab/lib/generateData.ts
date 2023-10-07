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
  const bombCounts = [1, 2, 3, 4, 4];

  for (let lineId = 2; lineId <= 6; lineId++) {
    const lineArr = [];
    const bombCount = bombCounts[lineId - 2];

    // Создаем массив индексов, представляющий местоположение бомб
    const bombIndexes = [1, 2, 3, 4, 4];
    while (bombIndexes.length < bombCount) {
      const randomIndex = Math.floor(Math.random() * 5);
      if (!bombIndexes.includes(randomIndex)) {
        bombIndexes.push(randomIndex);
      }
    }

    // Создаем строку с бомбами на случайных местах
    for (let itemId = 0; itemId < 5; itemId++) {
      const bomb = bombIndexes.includes(itemId);
      const item = { id: itemId, title: lineId, bomb: bomb };
      lineArr.push(item);
    }

    const line = { id: lineId, modifier: lineId, items: lineArr };
    data.push(line);
  }

  console.log(data);
  return data;
};
