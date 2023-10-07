import { api } from "@/shared/api/api";
import { createEffect } from "effector/effector.mjs";


export const setUserFx = createEffect(async (nickname: string) => {
  const { data } = await api.post("/users/login", { nickname });
  return data;
});
