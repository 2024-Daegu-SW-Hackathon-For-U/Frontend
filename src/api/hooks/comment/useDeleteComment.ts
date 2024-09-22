import { fetchInstance } from '@/api/instance';
import { useMutation } from '@tanstack/react-query';

const deleteCommentPath = (id: number) => `/api/comments/${id}`;

const deleteComment = async (id: string) => {
  const response = await fetchInstance.delete(deleteCommentPath(Number(id)));
  return response.data;
};

export const useDeleteComment = () => {
  const mutation = useMutation<void, Error, string>({
    mutationFn: deleteComment,
  });

  return {
    mutate: mutation.mutate,
    isLoading: mutation.status === 'pending',
    isError: mutation.isError,
    error: mutation.error,
  };
};
