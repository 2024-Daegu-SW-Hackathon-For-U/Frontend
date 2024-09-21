import {
  Box,
  Divider,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerOverlay,
  Text,
} from '@chakra-ui/react';
import styled from '@emotion/styled';

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

const Menu = ({ isOpen, onClose }: Props) => {
  return (
    <Drawer isOpen={isOpen} placement='right' onClose={onClose}>
      <DrawerOverlay />
      <DrawerContent color='color.black' backgroundColor='#f8f8f8'>
        <DrawerCloseButton />
        <BodyBox>
          <Box>
            <Text textStyle='md'>🏠 홈으로</Text>
          </Box>
          <Box>
            <Text textStyle='md'>🗺️ 지도 찾기</Text>
          </Box>
          <Divider borderColor='gray.300' />
          <Box>
            <Text textStyle='md'>💼 나의 지도 관리</Text>
          </Box>
          <Box>
            <Text textStyle='md'>🔧 내 정보 변경</Text>
          </Box>
        </BodyBox>
      </DrawerContent>
    </Drawer>
  );
};

export default Menu;

const BodyBox = styled(DrawerBody)`
  display: flex;

  flex-direction: column;
  gap: 1.5rem;
  margin: 5rem 0;
`;
