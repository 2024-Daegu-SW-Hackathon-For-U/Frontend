const routes = {
  root: '/',
  login: '/login',
  mypage: '/mypage',
  recommendMap: (id: string) => `/recommend-map/${id}`,
  curationMap: (id: string) => `/curation-map/${id}`,
  myMapSetting: '/my-map-setting',
  recommendAdd: (id: string) => `/recommend-map/${id}/add`,
  curationAdd: (id: string) => `/curation-map/${id}/add`,
  searchPlace: (keyword: string) => `/search-place?keyword=${keyword}`,
  kakaoCallback: '/kakao/callback', // 여기에 추가
};
