import {
  firstLetter,
  programmingLanguageStatusIcons,
} from "../../../utils/utils";
import { Tag } from "../../../components/Tag/Index";
import { useRepoInformation } from "../../../hooks/useRepoInformation";
import { IconGithub } from "../../../icons/iconGithub";
import { Card } from "../../../components/Card";

export default function repositoriesInformations() {
  const { repoInfo, listTags } = useRepoInformation();
  const language = repoInfo.language ? repoInfo.language : "n/a";
  return (
    <div className="bg-[#0d1117] min-h-screen w-full grid grid-cols-1 p-6">
      <div className=" text-[#c9d1d9] flex lg:justify-between items-center flex-wrap gap-6 h-1.5">
        <div className="flex justify-center items-center gap-3 flex-wrap">
          <div className="w-14 h-14">
            <img
              src={repoInfo?.owner?.avatar_url}
              alt=""
              className="rounded-full"
            />
          </div>
          <a
            className="text-2xl hover:text-[#4493f8] hover:cursor-pointer hover:underline"
            href={`/usersInformation/${repoInfo.owner?.login}`}
          >
            {repoInfo.owner?.login}
          </a>
          {"/"}
          <label className="text-2xl">{repoInfo?.name}</label>
          <div className="border border-[#30363d] rounded-3xl w-[50px] h-[25px] px-[7px] py-0 flex items-center justify-center">
            <p className="text-[#8d96a0] text-xs font-medium">
              {firstLetter(repoInfo?.visibility)}
            </p>
          </div>
        </div>
        <div className="flex justify-center items-center gap-3 flex-wrap">
          {listTags.map((i) => (
            <Tag icon={i.icon} text={i.text} number={i.number} />
          ))}
        </div>
      </div>
      <div className="flex justify-center h-1/2">
        <Card width={"1/2"}>
          <div className="w-full flex justify-center gap-4 flex-col items-center">
            <span>
              {repoInfo.description
                ? repoInfo.description
                : "There is no description for this repository"}
            </span>
            <div className="flex items-center gap-2">
              <span
                className={`w-3 h-3 rounded-full bg-[${
                  programmingLanguageStatusIcons[repoInfo.language] ?? "#8d96a0"
                }]`}
              />
              <div className="text-[#8d96a0]">{language}</div>
            </div>
            <button className="flex justify-center items-center gap-2 px-10 py-4 border rounded-lg active:scale-95">
              <IconGithub />
              <a href={repoInfo.html_url}>Access on GitHub</a>
            </button>
          </div>
        </Card>
      </div>
    </div>
  );
}
