import { createStore } from "effector";
import { changeUserBalanceFx, setUserFx } from "../lib/userEffects";
export type User = {
  nickname: string;
  balance: number;
};
export const $user = createStore<User | null>(null)
  .on(setUserFx.doneData, (_, user) => user)
  .on(setUserFx.failData, (_, error) => {
    console.error(error);
    return null;
  })
  .on(changeUserBalanceFx.doneData, (_, user) => user)
  .on(changeUserBalanceFx.failData, (_, error) => {
    console.error(error);
    return null;
  });
