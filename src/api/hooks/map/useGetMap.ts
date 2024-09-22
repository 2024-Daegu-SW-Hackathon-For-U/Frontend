import { fetchInstance } from '@/api/instance';
import { useQuery } from '@tanstack/react-query';

type MapItem = {
  id: number;
  name: string;
  count: number;
};

type getMapResponse = MapItem[];

const getMapPath = () => '/api/map';

const GetMapQueryKey = [getMapPath()];

const getMap = async (
  share: string,
  curation: string
): Promise<getMapResponse> => {
  const response = await fetchInstance.get<getMapResponse>(getMapPath(), {
    params: {
      share,
      curation,
    },
  });
  return response.data;
};

export const useGetMap = (share: string, curation: string) => {
  return useQuery<getMapResponse, Error>({
    queryKey: [GetMapQueryKey, share, curation],
    queryFn: () => getMap(share, curation),
  });
};
