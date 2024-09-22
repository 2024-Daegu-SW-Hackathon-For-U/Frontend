import { fetchInstance } from '@/api/instance';
import { useQuery } from '@tanstack/react-query';

type CommentItem = {
  id: number;
  content: string;
  memberId: number;
  placeId: number;
};

type GetCommentResponse = CommentItem[];

export const getCommentPath = (placeId: number, memberId: number) => {
  return `/api/comments/place/${placeId}/member/${memberId}`;
};

const getComment = async (
  placeId: number,
  memberId: number
): Promise<GetCommentResponse> => {
  const response = await fetchInstance.get(getCommentPath(placeId, memberId));
  return response.data;
};

type RequestParams = {
  placeId: number;
  memberId: number;
};

export const useGetComment = ({ placeId, memberId }: RequestParams) => {
  return useQuery<GetCommentResponse, Error>({
    queryKey: [getCommentPath(placeId, memberId)],
    queryFn: () => getComment(placeId, memberId),
  });
};
