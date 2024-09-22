import { fetchInstance } from '@/api/instance';
import { useQuery } from '@tanstack/react-query';

type PlaceItem = {
  id: number;
  name: string;
  address: string;
  latitude: number;
  longitude: number;
};

type getPlaceResponse = PlaceItem[];

export const getPlacePath = (mapId: number) => {
  return `/api/map/${mapId}/place`;
};

export const useGetPlace = (mapId: number, share: string, curation: string) => {
  const GetPlaceQueryKey = [getPlacePath(mapId), share, curation];

  const getPlace = async (): Promise<getPlaceResponse> => {
    const response = await fetchInstance.get<getPlaceResponse>(
      getPlacePath(mapId),
      {
        params: {
          share,
          curation,
        },
      }
    );
    return response.data;
  };

  return useQuery<getPlaceResponse, Error>({
    queryKey: GetPlaceQueryKey,
    queryFn: getPlace,
  });
};
