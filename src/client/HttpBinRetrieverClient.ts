import gitHubChecker from "../middlewares/HttpBinRetriever.cjs";

const getGitHubChecker = async () => {
  const resp: string = await gitHubChecker();
  console.log(resp);
};
