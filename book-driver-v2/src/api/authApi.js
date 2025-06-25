import apiClient from "./apiClient";

const userApi = {
  register: (payload) => apiClient.post("/auth/register", payload),
  loginDriver: (payload) => apiClient.post("/driver/login", payload),
};

export default userApi;
