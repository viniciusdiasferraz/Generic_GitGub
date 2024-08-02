import { api, ApiError } from "./api";

export const useServices = () => {
  const getUser = async (id) => {
    try {
      const { data } = await api.get(`/users/${id}`);
      return data;
    } catch (error) {
      throw new ApiError("Error getting this user's details!", error.response);
    }
  };

  const getUserRepo = async (id) => {
    try {
      const { data } = await api.get(`/users/${id}/repos`);
      return data;
    } catch (error) {
      throw new ApiError(
        "Error getting details of this repository!",
        error.response
      );
    }
  };

  const getUserInfo = async (user, id) => {
    try {
      const { data } = await api.get(`/repos/${user}/${id}`);
      return data;
    } catch (error) {
      throw new ApiError("Error getting this user's details!", error.response);
    }
  };
  return { getUser, getUserRepo, getUserInfo };
};
