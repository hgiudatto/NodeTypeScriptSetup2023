class Instagram {
    cameraMode;
    filter;
    burst;
    constructor(cameraMode, filter, burst) {
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.burst = burst;
    }
}
class YouTube {
    cameraMode;
    filter;
    burst;
    short;
    constructor(cameraMode, filter, burst, short) {
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.burst = burst;
        this.short = short;
    }
    createStory() {
        console.log("Story was created.");
    }
}
export const youTubeActionManager = (storyMessage) => {
    let youTubeAction = {
        cameraMode: "on",
        filter: "not available",
        burst: 10,
        short: "available",
        createStory() {
            console.log(`${storyMessage}`);
        },
    };
    return youTubeAction;
};
//# sourceMappingURL=second.js.map