import { createStore } from "effector";
import { BoardData } from "@/features/lab/lib/generateData.ts";
import {
  setBoard,
  transformBoard,
} from "@/widgets/game-board/model/boardEvents.ts";
import { rowTransformation } from "@/features/lab/lib";

export const $board = createStore<BoardData[]>([])
  .on(setBoard, (_, board) => board)
  .on(transformBoard, (state) => rowTransformation(state));
