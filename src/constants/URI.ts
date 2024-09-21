export const BASE_URL = import.meta.env.VITE_APP_BASE_URL;

export const MAP_API_KEY = import.meta.env.VITE_APP_MAP_API_KEY;

export const KAKAO_REST_API_KEY = import.meta.env.VITE_APP_KAKAO_AUTH_CLIENT_ID;
export const REDIRECT_URI = import.meta.env.VITE_APP_KAKAO_AUTH_REDIRECT_URI;

export const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${KAKAO_REST_API_KEY}&redirect_uri=${REDIRECT_URI}`;
