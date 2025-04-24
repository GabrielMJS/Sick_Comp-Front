import axios, {
  AxiosError,
  AxiosInstance,
  InternalAxiosRequestConfig,
} from "axios";
import { isTokenValid } from "./token";

interface InternalAxiosRequestConfigWithRetry
  extends InternalAxiosRequestConfig {
  _retry?: boolean;
}

const API_BASE_URL = process.env.REACT_APP_API_URL;

/**
 * Configuração do Axios para chamadas à API, incluindo interceptores para
 * autenticação.
 */
const api: AxiosInstance = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Adicionar Token de Acesso no Header
api.interceptors.request.use(
  (
    config: InternalAxiosRequestConfigWithRetry
  ): InternalAxiosRequestConfigWithRetry => {
    const token = localStorage.getItem("access_token");
    if (token && isTokenValid(token)) {
      config.headers = config.headers || {};
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => Promise.reject(error)
);

// Interceptar Respostas de Erro 401 (Não Autorizado) e Tentar Reautenticar
// e Repetir a Requisição
api.interceptors.response.use(
  (response) => response,
  async (error: AxiosError) => {
    const originalRequest = error.config as InternalAxiosRequestConfigWithRetry;

    if (error.response?.status !== 401 || originalRequest._retry) {
      return Promise.reject(error);
    }

    originalRequest._retry = true;
    const refreshToken = localStorage.getItem("refresh_token");

    if (!refreshToken) {
      window.location.href = "/login";
      return Promise.reject(error);
    }

    try {
      const { data } = await axios.post<{
        accessToken: string;
        refreshToken: string;
      }>(`${API_BASE_URL}/auth/refresh`, { refreshToken });

      const { accessToken: newToken, refreshToken: newRefreshToken } = data;

      localStorage.setItem("access_token", newToken);
      localStorage.setItem("refresh_token", newRefreshToken);

      originalRequest.headers = originalRequest.headers || {};
      originalRequest.headers.Authorization = `Bearer ${newToken}`;

      return axios.request(originalRequest);
    } catch {
      localStorage.removeItem("access_token");
      localStorage.removeItem("refresh_token");
      window.location.href = "/login";

      return Promise.reject(error);
    }
  }
);

export default api;
