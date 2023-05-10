import fetch from "node-fetch";

const gitHubChecker = async (): Promise<string> => {
  const response = await fetch("https://github.com/");
  const body = await response.text();
  return body;
};

export default gitHubChecker;
