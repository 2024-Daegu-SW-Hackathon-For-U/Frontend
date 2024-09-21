import Add from '@/assets/map/Add.svg';
import { Image } from '@chakra-ui/react';
import styled from '@emotion/styled';

export const PlusButtton = ({ label }: { label: string }) => {
  return (
    <WrapperWhite>
      <TextWhite>{label}</TextWhite>
      <Image src={Add} />
    </WrapperWhite>
  );
};

const WrapperWhite = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 10px;
  background: #7b6fbd;
  padding: 15px;
  gap: 0.5em;
`;

const TextWhite = styled.text`
  font-size: 16px;
  font-weight: bold;
  color: #fff;
`;
