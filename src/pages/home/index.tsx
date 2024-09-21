import { SearchButtonL, SearchButtonM } from '@/components/Home/Buttons';
import { PlaceBoxL, PlaceBoxM } from '@/components/Home/PlaceBox';
import Search from '@/components/Home/Search';
import styled from '@emotion/styled';
import 'swiper/css';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';

const HomePage = () => {
  return (
    <Wrapper>
      <Search />
      <SearchButtonM label='내 주변 장소 찾기' />
      <HotPlaceWrapper>
        <SubTitle>요즘 뜨는 장소들</SubTitle>
        <SubDes>많은 사람들이 가는곳은 어딜까요!</SubDes>
        <Swiper spaceBetween={10} slidesPerView={2} style={{ width: '100%' }}>
          <SwiperSlide>
            <PlaceBoxM title='감래등' des1='맛이 좋아요' des2='자리가 넓어요' />
          </SwiperSlide>
          <SwiperSlide>
            <PlaceBoxM title='감래등' des1='맛이 좋아요' des2='자리가 넓어요' />
          </SwiperSlide>
          <SwiperSlide>
            <PlaceBoxM title='감래등' des1='맛이 좋아요' des2='자리가 넓어요' />
          </SwiperSlide>
          <SwiperSlide>
            <PlaceBoxM title='감래등' des1='맛이 좋아요' des2='자리가 넓어요' />
          </SwiperSlide>
          <SwiperSlide>
            <PlaceBoxM title='감래등' des1='맛이 좋아요' des2='자리가 넓어요' />
          </SwiperSlide>
          <SwiperSlide>
            <PlaceBoxM title='감래등' des1='맛이 좋아요' des2='자리가 넓어요' />
          </SwiperSlide>
        </Swiper>
      </HotPlaceWrapper>
      <CurationWrapper>
        <SubTitle>큐레이션 지도</SubTitle>
        <SubDes>다양한 사람들의 픽을 한눈에!</SubDes>
        <BoxWrapper>
          <PlaceBoxL
            icon='🐖'
            title='돈가스를 좋아해서'
            des1='돈고수'
            des2='5개장소'
          />
          <PlaceBoxL
            icon='🐖'
            title='돈가스를 좋아해서'
            des1='돈고수'
            des2='5개장소'
          />
          <PlaceBoxL
            icon='🐖'
            title='돈가스를 좋아해서'
            des1='돈고수'
            des2='5개장소'
          />
          <PlaceBoxL
            icon='🐖'
            title='돈가스를 좋아해서'
            des1='돈고수'
            des2='5개장소'
          />
          <SearchButtonL label='큐레이션 지도 전체 보기' />
        </BoxWrapper>
      </CurationWrapper>
      <CurationWrapper>
        <SubTitle color='black'>추천 테마 지도</SubTitle>
        <SubDes color='black'>테마별로 원하는 장소를 찾아보아요!</SubDes>
        <BoxWrapper>
          <PlaceBoxL icon='☕️' title='공부하기 좋은 카페' des2='5개장소' />
          <PlaceBoxL icon='☕️' title='공부하기 좋은 카페' des2='5개장소' />
          <PlaceBoxL icon='☕️' title='공부하기 좋은 카페' des2='5개장소' />{' '}
          <PlaceBoxL icon='☕️' title='공부하기 좋은 카페' des2='5개장소' />
          <SearchButtonL label='큐레이션 지도 전체 보기' />
        </BoxWrapper>
      </CurationWrapper>
    </Wrapper>
  );
};

export default HomePage;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 25px;
  width: 100%;
  background-image: linear-gradient(to top, white 70%, #7b6fbd 70%);
  padding: 40px 20px;
`;

const HotPlaceWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 95%;
`;

const CurationWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 90%;
`;

const SubTitle = styled.text`
  font-size: 18px;
  font-weight: bold;
  color: ${(props) => props.color || '#fff'};
`;

const SubDes = styled.text`
  font-size: 14px;
  color: ${(props) => props.color || '#fff'};
`;

const BoxWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  width: 90%;
  margin: 0 auto;
`;
