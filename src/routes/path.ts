export const RouterPath = {
  root: '/',
  login: 'login',
  mypage: 'mypage',
  recommendMap: (id: string) => `recommend-map/${id}`,
  curationMap: (id: string) => `curation-map/${id}`,
  myMapSetting: 'mymap-setting',
  recommendAdd: (id: string) => `/recommend-map/${id}/add`,
  curationAdd: (id: string) => `/curation-map/${id}/add`,
  searchPlace: (keyword: string) => `/keyword/${keyword}`,
};
