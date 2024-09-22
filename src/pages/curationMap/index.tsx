/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect } from 'react';

import { BackButtonPurple } from '@/components/Map/BackButton';
import { MapListBox } from '@/components/Map/MapListBox';
import { List } from '@chakra-ui/react';
import styled from '@emotion/styled';

const CurationMap = () => {
  useEffect(() => {
    const container = document.getElementById('map');
    if (container) {
      const options = {
        center: new window.kakao.maps.LatLng(33.450701, 126.570667),
        level: 3,
      };
      const map = new window.kakao.maps.Map(container, options);

      let positions = [
        {
          content: '<div>카카오</div>',
          latlng: new window.kakao.maps.LatLng(33.450705, 126.570677),
        },
        {
          content: '<div>생태연못</div>',
          latlng: new window.kakao.maps.LatLng(33.450936, 126.569477),
        },
        {
          content: '<div>텃밭</div>',
          latlng: new window.kakao.maps.LatLng(33.450879, 126.56994),
        },
        {
          content: '<div>근린공원</div>',
          latlng: new window.kakao.maps.LatLng(33.451393, 126.570738),
        },
      ];

      for (var i = 0; i < positions.length; i++) {
        // 마커를 생성합니다
        let marker = new window.kakao.maps.Marker({
          map: map,
          position: positions[i].latlng,
        });

        // 마커에 표시할 인포윈도우를 생성합니다
        let infowindow = new window.kakao.maps.InfoWindow({
          content: positions[i].content, // 인포윈도우에 표시할 내용
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
  }, []);

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
        <BackButtonsWrapper>
          <BackButtonPurple label='공부하기 좋은 카페' />
        </BackButtonsWrapper>
        <PlusButtonsWrapper></PlusButtonsWrapper>
      </Wrapper>
      <ListWrapper>
        <MapListBox
          title='돈가스 반상'
          address='대구광역시 북구 산격동'
          des='안심 돈가스가 맛있는 집'
        />
        <MapListBox
          title='돈가스 반상'
          address='대구광역시 북구 산격동'
          des='안심 돈가스가 맛있는 집'
        />
        <MapListBox
          title='돈가스 반상'
          address='대구광역시 북구 산격동'
          des='안심 돈가스가 맛있는 집'
        />
        <MapListBox
          title='돈가스 반상'
          address='대구광역시 북구 산격동'
          des='안심 돈가스가 맛있는 집'
        />
        <MapListBox
          title='돈가스 반상'
          address='대구광역시 북구 산격동'
          des='안심 돈가스가 맛있는 집'
        />
        <MapListBox
          title='돈가스 반상'
          address='대구광역시 북구 산격동'
          des='안심 돈가스가 맛있는 집'
        />
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
  bottom: 0; /* 하단에 고정 */

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
