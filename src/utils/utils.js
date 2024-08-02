export function firstLetter(string) {
  return string?.charAt(0).toUpperCase() + string?.slice(1);
}

export const sortRepositories = (repos, order) => {
  const sortedData = [...repos].sort((a, b) => {
    if (order === "desc") {
      return b.stargazers_count - a.stargazers_count;
    } else {
      return a.stargazers_count - b.stargazers_count;
    }
  });
  return sortedData;
};

export const programmingLanguageStatusIcons = {
  JavaScript: "#f1e05a",
  TypeScript: "#3178c6",
  PHP: "#4F5D95",
  HTML: "#e34c26",
  Vue: "#41b883",
  CSS: "#563d7c",
};
