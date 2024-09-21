import Menu from './menu';
import MenuIcon from '@/assets/header/menu.svg';
import { Box, Image, Text, useDisclosure } from '@chakra-ui/react';
import styled from '@emotion/styled';

const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <HeaderLayout backgroundColor='color.primary'>
      <FlexBox>
        <Text textStyle='xlBold' color='color.white'>
          핫 인 대구
        </Text>
      </FlexBox>
      <FlexBox justifyContent='space-between' gap='1rem'>
        <Text textStyle='smBold' color='color.white'>
          지도 찾기
        </Text>
        <Text textStyle='smBold' color='color.white'>
          로그인
        </Text>
        <FlexBox
          onClick={onOpen}
          backgroundColor='color.white'
          paddingY='0.5rem'
          paddingX='0.75rem'
          borderTopLeftRadius={8}
          borderBottomLeftRadius={8}
          boxShadow='0px 4px 4px rgba(0, 0, 0, 0.25)'
        >
          <Image width='1.5rem' src={MenuIcon} alt='menu' />
        </FlexBox>
      </FlexBox>
      <Menu isOpen={isOpen} onClose={onClose} />
    </HeaderLayout>
  );
};

export default Header;

const HeaderLayout = styled(Box)`
  display: flex;
  text-align: center;
  align-items: center;
  // Top, Right, Bottom, Left
  padding: 20px 0 20px 30px;
  justify-content: space-between;
`;

const FlexBox = styled(Box)`
  display: flex;
  align-items: center;
  text-align: center;
`;
