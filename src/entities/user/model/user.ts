import { createStore } from "effector";
import { setUserFx } from "../lib/userEffects";
type User = { nickname: string; balance: number };
export const $user = createStore<User | null>(null)
  .on(setUserFx.doneData, (_, user) => user)
  .on(setUserFx.failData, (_, error) => {
    console.error(error);
    return null;
});
