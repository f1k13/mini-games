import { createEvent } from "effector";
import { BoardData } from "@/features/lab/lib/generateData.ts";

export const setBoard = createEvent<BoardData[]>();
export const transformBoard = createEvent<void>();
