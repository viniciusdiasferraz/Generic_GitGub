import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useServices } from "../../service/query";
import { toast } from "react-toastify";
import { IconEyes } from "../../icons/iconEyes";
import { IconFork } from "../../icons/iconFork";
import { IconStar } from "../../icons/iconStart";

export const useRepoInformation = () => {
  const [repoInfo, setRepoInfo] = useState([]);
  const { query } = useRouter();
  const { user, id } = query;
  const { getUserInfo } = useServices();

  const repositories = async () => {
    try {
      const response = await getUserInfo(user, id);
      setRepoInfo(response);
    } catch (error) {
      toast.error("Erro ao obter os detalhes deste repositório!");
    }
  };

  useEffect(() => {
    if (id && repoInfo.length === 0) {
      repositories();
    }
  }, [repoInfo, id]);

  const listTags = [
    {
      text: "Watch",
      number: repoInfo.subscribers_count,
      icon: <IconEyes />,
    },
    {
      text: "Fork",
      number: repoInfo.forks,
      icon: <IconFork />,
    },
    {
      text: "Star",
      number: repoInfo.stargazers_count,
      icon: <IconStar />,
    },
  ];

  return {
    listTags,
    repoInfo,
  };
};
