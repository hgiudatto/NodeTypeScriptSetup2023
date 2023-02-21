import fs from "fs";
import { User, Animal, Bear } from "./model/types";

const achilles: User = {
  dbId: 22,
  gitHubToken: "github",
  email: "achillesa@gmail.com",
  userId: 2211,
  startTrail: () => {
    return "trail started";
  },
  getCoupon: (name: "achilles10", off: 10) => {
    return 10;
  },
};

achilles.email = "achilles_Illiade@gmail.com";

console.log(achilles.email);

const yogiBear: Bear = {
  name: "Yogi",
  food: "honey",
};

console.log(
  `Hi! it's ${yogiBear.name} and my favorite food is: ${yogiBear.food}`
);

class Usuario {
  protected _courseCount = 1;
  readonly city: string = "Buenos Aires";

  constructor(public email: string, public name: string) {}

  private deleteToken() {
    console.log("Token deleted.");
  }

  get AppleEmail(): string {
    return `apple${this.email}`;
  }

  get courseCount(): number {
    return this._courseCount;
  }

  set courseCount(courseNum: number) {
    if (courseNum <= 1) {
      throw new Error("Course count should be higher than 1.");
    }
    this._courseCount = courseNum;
  }
}

class UsuarioBeta extends Usuario {
  isFamily: boolean = true;
  changeCourseCount() {
    this._courseCount = 5;
  }
}

const hector = new Usuario("hgiuda@gmail.com", "Hector");
console.log(hector);

const priamo = new Usuario("priamos@gmail.com", "Priamo");
priamo.email = "priamo-troy@gmail.com";
console.log(priamo);
