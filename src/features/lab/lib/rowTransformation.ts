import { BoardData } from "./generateData";

export const rowTransformation = (data: BoardData[]) => {
  const [sliceRow, ...remainingRows] = data;
  const newRow = {
    ...sliceRow,
    modifier: sliceRow.modifier + 1,
    items: sliceRow.items.map((item) => ({
      ...item,
      title: item.title + 1,
      bomb: Number(item.bomb) + 1 === 2 ? true : false,
    })),
  };

  const transformedRows = remainingRows.map((item) => ({
    ...item,
    modifier: item.modifier + 1,
    items: item.items.map((subItem) => ({
      ...subItem,
      title: subItem.title + 1,
    })),
  }));

  return [newRow, ...transformedRows];
};
