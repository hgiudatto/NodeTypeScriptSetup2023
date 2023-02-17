import fs from "fs";
import { User } from "./model/types";

const hector: User = {
  dbId: 22,
  gitHubToken: "github",
  email: "hectorh@gmail.com",
  userId: 2211,
  startTrail: () => {
    return "trail started";
  },
  getCoupon: (name: "hector10", off: 10) => {
    return 10;
  },
};

hector.email = "hector_Illiade@gmail.com";

console.log(hector.email);
