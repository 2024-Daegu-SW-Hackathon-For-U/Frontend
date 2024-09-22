import Menu from './menu';
import MenuIcon from '@/assets/header/menu.svg';
import Login from '@/components/login';
import useDynamicNavigate from '@/hooks/DynamicNavigate';
import { RouterPath } from '@/routes/path';
import { Box, Image, Spinner, Text, useDisclosure } from '@chakra-ui/react';
import styled from '@emotion/styled';

const Header = () => {
  const { handleNavigation, isPending } = useDynamicNavigate();
  const {
    isOpen: isMenuOpen,
    onOpen: onMenuOpen,
    onClose: onMenuClose,
  } = useDisclosure();

  const {
    isOpen: isLoginOpen,
    onOpen: onLoginOpen,
    onClose: onLoginClose,
  } = useDisclosure();
  return (
    <HeaderLayout backgroundColor='color.primary'>
      <FlexBox onClick={() => handleNavigation(RouterPath.root)}>
        <Text textStyle='xlBold' color='color.white'>
          핫 인 대구
        </Text>
      </FlexBox>
      <FlexBox justifyContent='space-between' gap='1rem'>
        <Text textStyle='smBold' onClick={onLoginOpen} color='color.white'>
          로그인
        </Text>
        <FlexBox
          onClick={onMenuOpen}
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
      {isPending && <Spinner />}
      <Menu isOpen={isMenuOpen} onClose={onMenuClose} />
      <Login isOpen={isLoginOpen} onClose={onLoginClose} />
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
