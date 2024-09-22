import { Button } from '@chakra-ui/react';
import styled from '@emotion/styled';

export const SearchButtonM = ({
  label,
  onClick,
}: {
  label: string;
  onClick?: () => void;
}) => {
  return (
    <SearchButtonComponent onClick={onClick}>{label}</SearchButtonComponent>
  );
};

// 라지 사이즈 버튼
export const SearchButtonL = ({
  label,
  onClick,
}: {
  label: string;
  onClick?: () => void;
}) => {
  return (
    <SearchButtonComponent2 onClick={onClick}>{label}</SearchButtonComponent2>
  );
};

const SearchButtonComponent = styled(Button)`
  background-color: #59beeb;
  max-width: 220px;
  width: 90%;
  height: 40px;
  font-size: 18px;
  color: white;
  border-radius: 10px;
  border: none;
  cursor: pointer;
  font-weight: bold;
`;

const SearchButtonComponent2 = styled(Button)`
  background-color: #59beeb;
  max-width: 340px;
  width: 100%;
  height: 40px;
  font-size: 18px;
  color: white;
  border-radius: 10px;
  border: none;
  cursor: pointer;
  font-weight: bold;
`;
