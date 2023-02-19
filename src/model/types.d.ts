import { type } from "os";

export interface User {
  readonly dbId: number;
  email: string;
  userId: number;
  googleId?: string;
  startTrail(): string;
  getCoupon(couponName: string, value: number): number;
}

export interface User {
  gitHubToken: string;
}

export type Animal = {
  name: string;
};

export type Bear = Animal & {
  food: "honey" | "hazelnuts";
};
