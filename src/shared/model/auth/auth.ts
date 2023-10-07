import { setUserFx } from "@/entities/user/lib/userEffects";
import { createStore } from "effector";

export const $isAuth = createStore<boolean>(false).on(
  setUserFx.doneData,
  () => true
);
