import { youTubeActionManager } from "./second";
const achilles = {
    dbId: 22,
    gitHubToken: "github",
    email: "achillesa@gmail.com",
    userId: 2211,
    startTrail: () => {
        return "trail started";
    },
    getCoupon: (name, off) => {
        return 10;
    },
};
achilles.email = "achilles_Illiade@gmail.com";
console.log(achilles.email);
const yogiBear = {
    name: "Yogi",
    food: "honey",
};
console.log(`Hi! it's ${yogiBear.name} and my favorite food is: ${yogiBear.food}`);
class Usuario {
    constructor(email, name) {
        this.email = email;
        this.name = name;
        this._courseCount = 1;
        this.city = "Buenos Aires";
    }
    deleteToken() {
        console.log("Token deleted.");
    }
    get AppleEmail() {
        return `apple${this.email}`;
    }
    get courseCount() {
        return this._courseCount;
    }
    set courseCount(courseNum) {
        if (courseNum <= 1) {
            throw new Error("Course count should be higher than 1.");
        }
        this._courseCount = courseNum;
    }
}
class UsuarioBeta extends Usuario {
    constructor() {
        super(...arguments);
        this.isFamily = true;
    }
    changeCourseCount() {
        this._courseCount = 5;
    }
}
const hector = new Usuario("hgiuda@gmail.com", "Hector");
console.log(hector);
const priamo = new Usuario("priamos@gmail.com", "Priamo");
priamo.email = "priamo-troy@gmail.com";
console.log(priamo);
let msg = "First You Tube video published OK";
const youTubeVideo = youTubeActionManager(msg);
youTubeVideo.createStory();
console.log(youTubeVideo);
