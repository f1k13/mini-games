import { createStore } from "effector";
import { setGameStateDefault, setGameStateInGame } from "../lib/gameEvents";

export const $game = createStore<"inGame" | "default">("default")
  .on(setGameStateDefault, () => "default")
  .on(setGameStateInGame, () => "inGame");
