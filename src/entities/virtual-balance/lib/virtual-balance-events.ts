import { createEvent } from "effector/effector.umd";

export const changeVirtualBalanceByModifier = createEvent<number>();

export const setVirtualBalance = createEvent<number>();
