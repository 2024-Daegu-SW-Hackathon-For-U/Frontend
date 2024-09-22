import { fetchInstance } from '@/api/instance';
import { useQuery } from '@tanstack/react-query';

type ShareType = 'SHARE' | 'CURATION' | '';

type MapItem = {
  id: number;
  name: string;
};

type getMapResponse = MapItem[];

const getMapPath = () => '/api/map';

const GetMapQueryKey = [getMapPath()];

const getMap = async (type: ShareType): Promise<getMapResponse> => {
  const response = await fetchInstance.get<getMapResponse>(getMapPath(), {
    params: {
      type,
    },
  });
  return response.data;
};

export const useGetMap = (type: ShareType) => {
  return useQuery<getMapResponse, Error>({
    queryKey: [GetMapQueryKey, type],
    queryFn: () => getMap(type),
  });
};
