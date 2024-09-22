import { fetchInstance } from '@/api/instance';
import { useMutation } from '@tanstack/react-query';

type KakaoResponseData = {
  tokenType: string;
  token: string;
};
export const getKakaoLoginpath = () => `/oauth/kakao/login`;

export const kakaoLoginUser = async (): Promise<KakaoResponseData> => {
  const response =
    await fetchInstance.get<KakaoResponseData>(getKakaoLoginpath());
  console.log(response);
  return response.data;
};

export const useKakaoCallback = async (
  code: string
): Promise<KakaoResponseData> => {
  const response = await fetchInstance.get<KakaoResponseData>(
    `/oauth/kakao/callback?code=${code}`
  );
  return response.data;
};

export const useKakaoLogin = () => {
  return useMutation({
    mutationFn: kakaoLoginUser,
  });
};

export const useKakaoCallbackMutation = () => {
  return useMutation({
    mutationFn: useKakaoCallback,
  });
};
