import { useEffect } from 'react';

import { BackButtonPurple } from '@/components/Map/BackButton';
import styled from '@emotion/styled';

const CurationMap = () => {
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
    <>
      <Wrapper id='map'>
        <BackButtonsWrapper>
          <BackButtonPurple label='공부하기 좋은 카페' />
        </BackButtonsWrapper>
        <PlusButtonsWrapper></PlusButtonsWrapper>
      </Wrapper>
      <ListWrapper>
        <h1>List</h1>
      </ListWrapper>
    </>
  );
};

export default CurationMap;

const Wrapper = styled.div`
  width: 100%;
  height: 60vh;
  position: relative;
`;

const ListWrapper = styled.div``;

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
