import { api } from "@/shared/api/api";
import { createEffect } from "effector/effector.mjs";
import { User } from "../model/user";

export const setUserFx = createEffect(async (nickname: string) => {
  const { data } = await api.post("/users/login", { nickname });
  return data;
});

export const changeUserBalanceFx = createEffect(
  async ({ balance, nickname }: User) => {
    const { data } = await api.post("/users/balance", { nickname, balance });
    return data;
  }
);
