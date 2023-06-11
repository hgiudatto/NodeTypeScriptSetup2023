import fetch from "node-fetch";
import {
  ApiResponse,
  Character,
  CharacterFilter,
  Info,
  getCharacters,
} from "rickmortyapi";

interface RickMorty {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: [Object];
  location: [Object];
  image: string;
  episode: string;
  url: string;
  created: string;
}

interface GitHubRepo {
  id: number;
  node_id: string;
  name: string;
  full_name: string;
  private: boolean;
  owner: Owner;
  html_url: string;
  description: string;
  fork: boolean;
  url: string;
  forks_url: string;
  keys_url: string;
  collaborators_url: string;
  teams_url: string;
  hooks_url: string;
  issue_events_url: string;
  events_url: string;
  assignees_url: string;
  branches_url: string;
  tags_url: string;
  blobs_url: string;
  git_tags_url: string;
  git_refs_url: string;
  trees_url: string;
  statuses_url: string;
  languages_url: string;
  stargazers_url: string;
  contributors_url: string;
  subscribers_url: string;
  subscription_url: string;
  commits_url: string;
  git_commits_url: string;
  comments_url: string;
  issue_comment_url: string;
  contents_url: string;
  compare_url: string;
  merges_url: string;
  archive_url: string;
  downloads_url: string;
  issues_url: string;
  pulls_url: string;
  milestones_url: string;
  notifications_url: string;
  labels_url: string;
  releases_url: string;
  deployments_url: string;
  created_at: string;
  updated_at: string;
  pushed_at: string;
  git_url: string;
  ssh_url: string;
  clone_url: string;
  svn_url: string;
  homepage: null;
  size: number;
  stargazers_count: number;
  watchers_count: number;
  language: null;
  has_issues: boolean;
  has_projects: boolean;
  has_downloads: boolean;
  has_wiki: boolean;
  has_pages: boolean;
  has_discussions: boolean;
  forks_count: number;
  mirror_url: null;
  archived: boolean;
  disabled: boolean;
  open_issues_count: number;
  license: null;
  allow_forking: boolean;
  is_template: boolean;
  web_commit_signoff_required: boolean;
  topics: any[];
  visibility: string;
  forks: number;
  open_issues: number;
  watchers: number;
  default_branch: string;
}

interface Owner {
  login: string;
  id: number;
  node_id: string;
  avatar_url: string;
  gravatar_id: string;
  url: string;
  html_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  starred_url: string;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  events_url: string;
  received_events_url: string;
  type: string;
  site_admin: boolean;
}

const rmName: CharacterFilter = { name: "" };
rmName.name = "Crocubot";

const getRMCharacters = await getCharacters(rmName);

console.log(getRMCharacters.status);

if (getRMCharacters.data.results != undefined) {
  console.log(
    "Name: ",
    getRMCharacters.data.results?.map((rm) => {
      if (rm.name) {
        console.log(
          `Character name: ${rm.name ? rm.name : ""}, gender: ${
            rm.gender ? rm.gender : ""
          }, created: ${rm.created ? rm.created : ""}`
        );
      }
    })
  );
}

// const rickMortyCharacter = fetch("https://rickandmortyapi.com/api/character").then(resp => console.log(resp.json())).then((data: <CharacterInfo>[]) => data.results[0].)

/* fetch("https://api.github.com/users/hgiudatto/repos?per_page=100")
  .then((resp) => resp.json())
  .then((data) => console.log(data)); */

const thisRepo = "https://api.github.com/users/hgiudatto/repos";
const filterTS =
  "https://api.github.com/search/repositories?q=api+language:TypeScript";

const getRepo = async (): Promise<GitHubRepo[] | undefined> => {
  try {
    const myRepos = await fetch(filterTS);
    const reposSize = await myRepos.size;
    console.log("Total repos whose language is TypeScript: ", reposSize);

    const data: GitHubRepo[] = (await myRepos.json()) as GitHubRepo[];
    // console.log(`data: `, data);

    return await data;
  } catch (err) {
    console.error(err);
  }
};

const getFirstRepo = async (): Promise<GitHubRepo[] | undefined> =>
  new Promise(async (resolve, reject) => {
    try {
      resolve(await getRepo());
    } catch (error) {
      reject(error);
    }
  });

(async () => {
  try {
    let repos: GitHubRepo[] | undefined = [];
    repos = await getFirstRepo();
    console.log(repos);
    repos?.filter((repo) => repo?.language === "TypeScript");
  } catch (error) {
    console.log(`Oops there was an error: ${error}`);
  }
})();
