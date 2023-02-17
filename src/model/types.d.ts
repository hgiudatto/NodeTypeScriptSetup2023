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
