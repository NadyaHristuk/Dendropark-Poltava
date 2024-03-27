import axios from "axios";

const api = axios.create({
  baseURL: "/api",
  // baseURL: 'https://dendropark-poltava-back-ix1i.onrender.com/api',
});

export const token = {
  set(token) {
    api.defaults.headers.common.Authorization = `Bearer ${token}`;
    localStorage.setItem("token", token);
  },
  unset() {
    delete api.defaults.headers.common.Authorization;
    localStorage.removeItem("token");
  },
};

export const apiCall = async (path, method = "get", body) => {
  try {
    const authToken = localStorage.getItem("token");
    if (authToken && method !== "get") {
      token.set(authToken);
    }
    const response = await api[method](path, body);
    if (path === "/auth/login" && response) token.set(response.data.token);
    if (path === "/auth/logout" && response) token.unset();
    return response.data;
  } catch (error) {
    throw new Error(error.response ? error.response.data : error.message);
  }
};

export const login = (credentials) =>
  apiCall("/auth/login", "post", credentials);

export const logout = (email) => apiCall("/auth/logout", "post", { email });

export const getCurrentUser = () => apiCall("/auth/current");

export default api;
