import ArrowBackBlack from '@/assets/map/ArrowBackBlack.svg';
import ArrowBackWhite from '@/assets/map/ArrowBackWhite.svg';
import { Image, Text } from '@chakra-ui/react';
import styled from '@emotion/styled';

export const BackButtonWhite = ({ label }: { label: string }) => {
  return (
    <WrapperWhite>
      <Image src={ArrowBackBlack} />
      <TextBlack>{label}</TextBlack>
    </WrapperWhite>
  );
};

export const BackButtonPurple = ({ label }: { label: string }) => {
  return (
    <WrapperPurple>
      <Image src={ArrowBackWhite} />
      <TextWhite>{label}</TextWhite>
    </WrapperPurple>
  );
};

const WrapperWhite = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 0px 10px 10px 0px;
  background: #f9f9fb;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  padding: 15px;
  cursor: pointer;
`;

const WrapperPurple = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 0px 10px 10px 0px;
  background: #7b6fbd;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  padding: 15px;
  cursor: pointer;
`;

const TextBlack = styled(Text)`
  font-size: 16px;
  color: #606060;
`;

const TextWhite = styled(Text)`
  font-size: 16px;
  color: #fff;
`;
