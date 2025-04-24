import { jwtDecode } from "jwt-decode";

// Função para decodificar o token JWT
export interface DecodedToken {
  exp: number;
  [key: string]: unknown;
}

// Validação do token JWT
export const isTokenValid = (token: string): boolean => {
  try {
    const { exp } = jwtDecode<DecodedToken>(token);
    return exp * 1000 > Date.now();
  } catch {
    return false;
  }
};
