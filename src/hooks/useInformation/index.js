import { useCallback, useEffect, useState } from "react";
import { useServices } from "../../service/query";
import { useRouter } from "next/router";
import { sortRepositories } from "../../utils/utils";
import { toast } from "react-toastify";

export const useInformation = () => {
  const { getUser, getUserRepo } = useServices();

  const [userRepositories, setUserRepositories] = useState([]);
  const [originalRepositories, setOriginalRepositories] = useState([]);
  const [inputData, setInputData] = useState("");
  const [userData, setUserData] = useState([]);
  const [sortOrder, setSortOrder] = useState("desc");
  const { query, push } = useRouter();
  const { id } = query;

  const handleSubmit = (e) => {
    e.preventDefault();
    push(`/usersInformation/${inputData}`);
  };

  const fetchUserData = useCallback(async () => {
    try {
      const response = await getUser(id);
      setUserData(response);
    } catch (error) {
      setTimeout(() => {
        if (error) {
          toast.error("Error getting this user's details!");
        }
        push("/");
      }, 100);
    }
  }, [id, query]);

  const fetchUserRepos = useCallback(async () => {
    try {
      const response = await getUserRepo(id);
      setOriginalRepositories(response);
      sortRepositories(response, sortOrder);
    } catch (error) {
      console.error(error);
    }
  }, [id, sortOrder]);

  useEffect(() => {
    if (id && userData?.length === 0) {
      fetchUserData();
    }
    if (id && originalRepositories?.length === 0) {
      fetchUserRepos();
    }
  }, [id]);

  const toggleSortOrder = () => {
    setSortOrder((prevOrder) => (prevOrder === "desc" ? "asc" : "desc"));
  };

  useEffect(() => {
    if (originalRepositories?.length > 0) {
      const order = sortRepositories(originalRepositories, sortOrder);
      setUserRepositories(order);
    }
  }, [sortOrder, originalRepositories]);

  const handleRepositoryClick = (repositories) => {
    const repositorieFullName = repositories.full_name;
    push(`/repositoriesInformations/${repositorieFullName}`);
  };

  return {
    userRepositories,
    userData,
    sortOrder,
    inputData,
    setUserRepositories,
    setSortOrder,
    setInputData,
    handleRepositoryClick,
    toggleSortOrder,
    handleSubmit,
  };
};
