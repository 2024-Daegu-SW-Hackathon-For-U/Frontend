import { useEffect } from 'react';

import { BackButtonWhite } from '@/components/Map/BackButton';
import { PlusButtton } from '@/components/Map/PlusButton';
import styled from '@emotion/styled';

const RecommandMap = () => {
  useEffect(() => {
    const container = document.getElementById('map');
    if (container) {
      const options = {
        center: new window.kakao.maps.LatLng(33.450701, 126.570667),
        level: 3,
      };
      return new window.kakao.maps.Map(container, options);
    } else {
      console.error('Map container not found');
    }
  }, []);

  return (
    <Wrapper id='map' style={{ width: '100%', height: '100vh' }}>
      <BackButtonsWrapper>
        <BackButtonWhite label='공부하기 좋은 카페' />
      </BackButtonsWrapper>
      <PlusButtonsWrapper>
        <PlusButtton label='장소 추천하기' />
      </PlusButtonsWrapper>
    </Wrapper>
  );
};

export default RecommandMap;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
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
