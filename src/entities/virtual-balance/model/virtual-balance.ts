import { createStore } from "effector/compat";
import {
  changeVirtualBalanceByModifier,
  setVirtualBalance,
} from "../lib/virtual-balance-events";

export const $virtualBalance = createStore<number>(0)
  .on(changeVirtualBalanceByModifier, (state, value) => state * value)
  .on(setVirtualBalance, (_, value) => value);
