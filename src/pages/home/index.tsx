import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

//import { useGetMap } from '@/api/hooks/map/useGetMap';
import { SearchButtonL, SearchButtonM } from '@/components/Home/Buttons';
import { PlaceBoxL, PlaceBoxM } from '@/components/Home/PlaceBox';
import Search from '@/components/Home/Search';
import { Text } from '@chakra-ui/react';
import styled from '@emotion/styled';
import 'swiper/css';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';

const HomePage = () => {
  const navigate = useNavigate();
  const [keyword, setKeyword] = useState('');

  // 요즘 뜨는 장소들에 대한 목데이터
  const hotPlaces = [
    { id: 1, title: '감래등', des1: '맛이 좋아요', des2: '자리가 넓어요' },
    { id: 2, title: '카페 라떼', des1: '커피 맛있어요', des2: '조용해요' },
    {
      id: 3,
      title: '피자하우스',
      des1: '치즈가 맛있어요',
      des2: '가족모임에 좋아요',
    },
    { id: 4, title: '바다횟집', des1: '신선한 회', des2: '뷰가 좋아요' },
    { id: 5, title: '나무 그늘', des1: '힐링 되는 곳', des2: '자연이 좋아요' },
    { id: 6, title: '영화관', des1: '최신 영화 상영', des2: '편안한 좌석' },
  ];

  const curationPlaces = [
    {
      id: 1,
      icon: '🐖',
      title: '돈가스를 좋아해서',
      des1: '돈고수',
      des2: '5개장소',
    },
    {
      id: 2,
      icon: '🍣',
      title: '초밥의 매력',
      des1: '스시 마스터',
      des2: '3개장소',
    },
    {
      id: 3,
      icon: '🍕',
      title: '피자 애호가',
      des1: '피자 전문가',
      des2: '4개장소',
    },
    { id: 4, icon: '🍔', title: '햄버거 팬', des1: '버거킹', des2: '2개장소' },
  ];

  const themePlaces = [
    { id: 1, icon: '☕️', title: '공부하기 좋은 카페', des2: '5개장소' },
    { id: 2, icon: '🍰', title: '디저트 카페', des2: '6개장소' },
    { id: 3, icon: '🍷', title: '와인 바', des2: '3개장소' },
    { id: 4, icon: '🥗', title: '건강식 전문점', des2: '4개장소' },
  ];

  const searchPlace = () => {
    if (!keyword) {
      alert('검색어를 입력하세요');
      return;
    }
    navigate(`/keyword/${keyword}`);
  };

  const handleCurationClick = (id: number) => {
    navigate(`/curation-map/${id}`);
  };

  const handleThemeClick = (id: number) => {
    navigate(`/recommend-map/${id}`);
  };

  return (
    <Wrapper>
      <Search keyword={keyword} setKeyword={setKeyword} />
      <SearchButtonM label='장소 검색' onClick={searchPlace} />

      <HotPlaceWrapper>
        <SubTitle>요즘 뜨는 장소들</SubTitle>
        <SubDes>많은 사람들이 가는곳은 어딜까요!</SubDes>
        <Swiper spaceBetween={10} slidesPerView={2} style={{ width: '100%' }}>
          {hotPlaces.map((place) => (
            <SwiperSlide key={place.id}>
              <PlaceBoxM
                title={place.title}
                des1={place.des1}
                des2={place.des2}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </HotPlaceWrapper>

      <CurationWrapper>
        <SubTitle>큐레이션 지도</SubTitle>
        <SubDes>다양한 사람들의 픽을 한눈에!</SubDes>
        <BoxWrapper>
          {curationPlaces.map((place) => (
            <PlaceBoxL
              key={place.id}
              icon={place.icon}
              title={place.title}
              des1={place.des1}
              des2={place.des2}
              onClick={() => handleCurationClick(place.id)} // 클릭 시 큐레이션 지도 이동
            />
          ))}
          <SearchButtonL label='큐레이션 지도 전체 보기' />
        </BoxWrapper>
      </CurationWrapper>

      <CurationWrapper>
        <SubTitle color='black'>추천 테마 지도</SubTitle>
        <SubDes color='black'>테마별로 원하는 장소를 찾아보아요!</SubDes>
        <BoxWrapper>
          {themePlaces.map((place) => (
            <PlaceBoxL
              key={place.id}
              icon={place.icon}
              title={place.title}
              des2={place.des2}
              onClick={() => handleThemeClick(place.id)} // 클릭 시 추천 테마 지도 이동
            />
          ))}
          <SearchButtonL label='추천 테마 지도 전체 보기' />
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
  background-image: linear-gradient(to top, white 65%, #7b6fbd 65%);
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

const SubTitle = styled(Text)`
  font-size: 18px;
  font-weight: bold;
  color: ${(props) => props.color || '#fff'};
`;

const SubDes = styled(Text)`
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
