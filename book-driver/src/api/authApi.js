import apiClient from "./apiClient";

const userApi = {
  register: (payload) => apiClient.post("/auth/register", payload),
};

export default userApi;
