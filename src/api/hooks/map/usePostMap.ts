import { fetchInstance } from '@/api/instance';
import { useMutation } from '@tanstack/react-query';

type postMapRequest = {
  name: string;
  type: 'SHARE' | 'CURATION';
};

const postMapPath = () => '/api/map';

const PostMap = async (data: postMapRequest) => {
  await fetchInstance.post(postMapPath(), data);
};

export const usePostMap = () => {
  const mutation = useMutation<void, Error, postMapRequest>({
    mutationFn: PostMap,
  });

  return {
    mutate: mutation.mutate,
    isLoading: mutation.status === 'pending',
    isError: mutation.isError,
    error: mutation.error,
  };
};
