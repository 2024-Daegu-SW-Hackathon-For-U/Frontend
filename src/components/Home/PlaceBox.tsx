import styled from '@emotion/styled';

// 미디엄 사이즈 버튼
export const PlaceBoxM = ({ label }: { label: string }) => {
  return <SearchButtonComponent>{label}</SearchButtonComponent>;
};

// 라지 사이즈 버튼
export const PlaceBoxL = ({ label }: { label: string }) => {
  return <SearchButtonComponent2>{label}</SearchButtonComponent2>;
};

const SearchButtonComponent = styled.div`
  background-color: #fff;
  width: 150px;
  height: 80px;
  font-size: 14px;
  color: #606060;
  border-radius: 10px;
  border: none;
  cursor: pointer;
  font-weight: bold;
`;

const SearchButtonComponent2 = styled.div`
  background-color: #fff;
  width: 300px;
  height: 90px;
  font-size: 14px;
  color: #606060;
  border-radius: 10px;
  border: none;
  cursor: pointer;
  font-weight: bold;
`;
