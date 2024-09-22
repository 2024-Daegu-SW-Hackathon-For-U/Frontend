export const RouterPath = {
  root: '/',
  login: '/login',
  mypage: '/mypage',
  recommendMap: '/recommend-map',
  curationMap: '/curation-map',
  myMapSetting: 'mymap-setting',
  recommendAdd: '/recommend-map/add',
  curationAdd: '/curation-map/add',
  searchPlace: (keyword: string) => `/keyword/${keyword}`, // 함수를 사용하여 동적으로 생성
};
