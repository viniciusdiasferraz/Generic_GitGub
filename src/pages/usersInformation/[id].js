import { useRouter } from "next/router";
import { Card } from "../../components/Card";
import { Tag } from "../../components/Tag/Index";
import { useInformation } from "../../hooks/useInformation";
import { IconGroup } from "../../icons/iconGroup";
import { IconStar } from "../../icons/iconStart";

import { firstLetter, programmingLanguageStatusIcons } from "../../utils/utils";

export default function UsersInformation() {
  const {
    userRepositories,
    userData,
    sortOrder,
    handleRepositoryClick,
    toggleSortOrder,
  } = useInformation();

  const { push } = useRouter();

  return (
    <div className="bg-[#0d1117] min-h-screen p-4">
      <div
        className="w-[3.2rem] cursor-pointer"
        onClick={() => {
          push("/");
        }}
      >
        <Tag text={"Back"} />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 ">
        <div className="flex items-center justify-center flex-col w-full gap-6 h-[70vh] lg:h-[90vh]">
          <div className="flex items-center justify-center flex-col gap-2 w-[50%] lg:items-start">
            <img
              alt={userData?.name}
              src={userData?.avatar_url}
              className="rounded-full max-w-xs"
            />
            <p className="text-white font-semibold text-2xl">
              {" "}
              {userData?.name}
            </p>
            <p className="text-[#8d96a0] "> {userData?.login}</p>
          </div>
          <div className="flex items-center justify-center flex-col gap-2 w-[50%] lg:items-start">
            <p className="text-white font-semibold">
              {userData?.bio ? userData?.bio : "There is no bio description"}
            </p>
            <button
              onClick={toggleSortOrder}
              className="mb-2 mt-2 text-white bg-[#30363d] p-2 hover:opacity-90 rounded-xl transition-all"
            >
              Ordenar repositórios por estrelas (
              {sortOrder === "desc" ? "Decrescente" : "Crescente"})
            </button>
            <div className="flex items-center w-full gap-1 justify-center lg:justify-start">
              <IconGroup />
              <p className="text-[#8d96a0] ">
                {userData?.followers}{" "}
                <span className="text-white">followers</span>
              </p>
              <span className="text-white">-</span>
              <p className="text-[#8d96a0]">
                {userData?.following}{" "}
                <span className="text-white">following</span>
              </p>
            </div>
            <p className="text-white">
              E-mail: {userData?.email ? userData?.email : "não existe e-mail"}
            </p>
          </div>
        </div>

        <div className="flex items-center justify-center flex-col w-full h-[90vh]">
          <p className="text-white text-2xl">Repositories</p>
          <div className="h-[75%] overflow-x-hidden overflow-y-scroll scrollbar-thin scrollbar-thumb-[#30363d] scrollbar-track-transparent p-2 min-w-[80%]">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
              {userRepositories.map((repositories) => {
                const language = repositories.language
                  ? repositories.language
                  : "n/a";
                const color =
                  programmingLanguageStatusIcons[repositories.language] ??
                  "#8d96a0";
                return (
                  <Card>
                    <div className="flex justify-between w-full">
                      <a
                        className="text-white"
                        key={repositories.id}
                        onClick={() => handleRepositoryClick(repositories)}
                      >
                        <span className="text-[#4493f8] hover:cursor-pointer hover:underline">
                          {repositories.name}
                        </span>
                      </a>

                      <div className="border border-[#30363d] rounded-3xl w-[50px] h-[25px] px-[7px] py-0 flex items-center justify-center">
                        <p className="text-[#8d96a0] text-xs font-medium">
                          {firstLetter(repositories.visibility)}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <span
                        className="w-3 h-3 rounded-full"
                        style={{ backgroundColor: color }}
                      />
                      <div className="text-[#8d96a0]">{language}</div>
                      <IconStar />
                      <span className="text-[#8d96a0]">
                        {repositories.stargazers_count}
                      </span>
                    </div>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
