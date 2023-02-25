interface TakePhoto {
  cameraMode: string;
  filter: string;
  burst: number;
}

interface Story {
  createStory(): void;
}

class Instagram implements TakePhoto {
  constructor(
    public cameraMode: string,
    public filter: string,
    public burst: number
  ) {}
}

class YouTube implements TakePhoto, Story {
  constructor(
    public cameraMode: string,
    public filter: string,
    public burst: number,
    public short: string
  ) {}

  createStory(): void {
    console.log("Story was created.");
  }
}

export const youTubeActionManager = (storyMessage: string): YouTube => {
  let youTubeAction: YouTube = {
    cameraMode: "on",
    filter: "not available",
    burst: 10,
    short: "available",
    createStory(): void {
      console.log(`${storyMessage}`);
    },
  };

  return youTubeAction;
};
