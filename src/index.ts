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
  email: string;
  name: string;
  city: string;

  constructor(email: string, name: string) {
    this.city = "";
    this.email = email;
    this.name = name;
  }
}

const hector = new Usuario("hgiuda@gmail.com", "Hector");
hector.city = "Buenos Aires";
console.log(hector);

const priamo = new Usuario("priamos@gmail.com", "Priamo");
priamo.email = "priamo-troy@gmail.com";
priamo.city = "Troy";
console.log(priamo);
