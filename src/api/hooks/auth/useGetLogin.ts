import { fetchInstance } from '@/api/instance';
import { useMutation } from '@tanstack/react-query';

export const getLoginPath = () => `/api/member/login`;

export const loginUser = async () => {
  const response = await fetchInstance.post(getLoginPath());
  return response.data;
};

export const useLogin = () => {
  return useMutation({
    mutationFn: () => loginUser(),
  });
};
