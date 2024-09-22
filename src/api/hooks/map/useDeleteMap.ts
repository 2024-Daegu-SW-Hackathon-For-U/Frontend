import { fetchInstance } from '@/api/instance';
import { useMutation } from '@tanstack/react-query';

const deleteMapPath = (mapId: string) => `/api/map/${mapId}`;

const deleteMap = async (mapId: string) => {
  const response = await fetchInstance.delete(deleteMapPath(mapId));
  return response.data;
};

export const useDeleteMap = () => {
  const mutation = useMutation<void, Error, string>({
    mutationFn: deleteMap,
  });

  return {
    mutate: mutation.mutate,
    isLoading: mutation.status === 'pending',
    isError: mutation.isError,
    error: mutation.error,
  };
};
