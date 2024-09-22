/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import { BackButtonPurple } from '@/components/Map/BackButton';
import { MapListBox } from '@/components/Map/MapListBox';
import { List } from '@chakra-ui/react';
import styled from '@emotion/styled';

const CurationMap = () => {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const numericId = id ? parseInt(id, 10) : 0;

  const goBack = () => {
    navigate(-1);
  };

  useEffect(() => {
    const container = document.getElementById('map');
    if (container) {
      const options = {
        center: new window.kakao.maps.LatLng(33.450701, 126.570667),
        level: 3,
      };
      const map = new window.kakao.maps.Map(container, options);

      const positions = getPositions(numericId);

      for (let i = 0; i < positions.length; i++) {
        const marker = new window.kakao.maps.Marker({
          map: map,
          position: positions[i].latlng,
        });

        const infowindow = new window.kakao.maps.InfoWindow({
          content: positions[i].content,
        });

        window.kakao.maps.event.addListener(
          marker,
          'mouseover',
          makeOverListener(map, marker, infowindow)
        );
        window.kakao.maps.event.addListener(
          marker,
          'mouseout',
          makeOutListener(infowindow)
        );
      }
    } else {
      console.error('Map container not found');
    }
  }, [id]);

  const getPositions = (id: number) => {
    switch (id) {
      case 1:
        return [
          {
            content: '<div>돈가스 집 1</div>',
            latlng: new window.kakao.maps.LatLng(33.450705, 126.570677),
          },
          {
            content: '<div>돈가스 집 2</div>',
            latlng: new window.kakao.maps.LatLng(33.450936, 126.569477),
          },
          {
            content: '<div>돈가스 집 3</div>',
            latlng: new window.kakao.maps.LatLng(33.450879, 126.56994),
          },
          {
            content: '<div>돈가스 집 4</div>',
            latlng: new window.kakao.maps.LatLng(33.451393, 126.570738),
          },
        ];
      case 2:
        return [
          {
            content: '<div>초밥 집 1</div>',
            latlng: new window.kakao.maps.LatLng(33.450705, 126.570677),
          },
          {
            content: '<div>초밥 집 2</div>',
            latlng: new window.kakao.maps.LatLng(33.450936, 126.569477),
          },
          {
            content: '<div>초밥 집 3</div>',
            latlng: new window.kakao.maps.LatLng(33.450879, 126.56994),
          },
          {
            content: '<div>초밥 집 4</div>',
            latlng: new window.kakao.maps.LatLng(33.451393, 126.570738),
          },
        ];
      case 3:
        return [
          {
            content: '<div>피자 집 1</div>',
            latlng: new window.kakao.maps.LatLng(33.450705, 126.570677),
          },
          {
            content: '<div>피자 집 2</div>',
            latlng: new window.kakao.maps.LatLng(33.450936, 126.569477),
          },
          {
            content: '<div>피자 집 3</div>',
            latlng: new window.kakao.maps.LatLng(33.450879, 126.56994),
          },
          {
            content: '<div>피자 집 4</div>',
            latlng: new window.kakao.maps.LatLng(33.451393, 126.570738),
          },
        ];
      case 4:
        return [
          {
            content: '<div>햄버거 집 1</div>',
            latlng: new window.kakao.maps.LatLng(33.450705, 126.570677),
          },
          {
            content: '<div>햄버거 집 2</div>',
            latlng: new window.kakao.maps.LatLng(33.450936, 126.569477),
          },
          {
            content: '<div>햄버거 집 3</div>',
            latlng: new window.kakao.maps.LatLng(33.450879, 126.56994),
          },
          {
            content: '<div>햄버거 집 4</div>',
            latlng: new window.kakao.maps.LatLng(33.451393, 126.570738),
          },
        ];
      default:
        return [];
    }
  };

  const getPlaces = (id: number) => {
    switch (id) {
      case 1:
        return [
          {
            title: '돈가스 집 1',
            address: '대구광역시 1',
            des: '돈가스 맛집 1',
          },
          {
            title: '돈가스 집 2',
            address: '대구광역시 2',
            des: '돈가스 맛집 2',
          },
          {
            title: '돈가스 집 3',
            address: '대구광역시 3',
            des: '돈가스 맛집 3',
          },
          {
            title: '돈가스 집 4',
            address: '대구광역시 4',
            des: '돈가스 맛집 4',
          },
          {
            title: '돈가스 집 5',
            address: '대구광역시 5',
            des: '돈가스 맛집 5',
          },
        ];
      case 2:
        return [
          { title: '초밥 집 1', address: '대구광역시 1', des: '초밥 맛집 1' },
          { title: '초밥 집 2', address: '대구광역시 2', des: '초밥 맛집 2' },
          { title: '초밥 집 3', address: '대구광역시 3', des: '초밥 맛집 3' },
          { title: '초밥 집 4', address: '대구광역시 4', des: '초밥 맛집 4' },
          { title: '초밥 집 5', address: '대구광역시 5', des: '초밥 맛집 5' },
        ];
      case 3:
        return [
          { title: '피자 집 1', address: '대구광역시 1', des: '피자 맛집 1' },
          { title: '피자 집 2', address: '대구광역시 2', des: '피자 맛집 2' },
          { title: '피자 집 3', address: '대구광역시 3', des: '피자 맛집 3' },
          { title: '피자 집 4', address: '대구광역시 4', des: '피자 맛집 4' },
          { title: '피자 집 5', address: '대구광역시 5', des: '피자 맛집 5' },
        ];
      case 4:
        return [
          {
            title: '햄버거 집 1',
            address: '대구광역시 1',
            des: '햄버거 맛집 1',
          },
          {
            title: '햄버거 집 2',
            address: '대구광역시 2',
            des: '햄버거 맛집 2',
          },
          {
            title: '햄버거 집 3',
            address: '대구광역시 3',
            des: '햄버거 맛집 3',
          },
          {
            title: '햄버거 집 4',
            address: '대구광역시 4',
            des: '햄버거 맛집 4',
          },
          {
            title: '햄버거 집 5',
            address: '대구광역시 5',
            des: '햄버거 맛집 5',
          },
        ];
      default:
        return [];
    }
  };

  // 인포윈도우를 표시하는 클로저를 만드는 함수입니다
  function makeOverListener(map: any, marker: any, infowindow: any) {
    return function () {
      infowindow.open(map, marker);
    };
  }

  // 인포윈도우를 닫는 클로저를 만드는 함수입니다
  function makeOutListener(infowindow: any) {
    return function () {
      infowindow.close();
    };
  }

  return (
    <MapWrapper>
      <Wrapper id='map'>
        <BackButtonsWrapper onClick={goBack}>
          <BackButtonPurple label='공부하기 좋은 카페' />
        </BackButtonsWrapper>
        <PlusButtonsWrapper></PlusButtonsWrapper>
      </Wrapper>
      <ListWrapper>
        {getPlaces(numericId).map((place, index) => (
          <MapListBox
            key={index}
            title={place.title}
            address={place.address}
            des={place.des}
          />
        ))}
      </ListWrapper>
    </MapWrapper>
  );
};

export default CurationMap;

const MapWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
`;

const ListWrapper = styled(List)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  padding: 20px;
  align-items: center;
  margin: 10px;
  height: 40vh;
  overflow-y: auto;
  width: 100%;
  background-color: transparent;
  border-radius: 10px;

  z-index: 100;
  position: absolute;
  bottom: 0;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const BackButtonsWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  top: 6%;
  z-index: 100;
  position: absolute;
`;

const PlusButtonsWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  top: 90%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 100;
  position: absolute;
`;
