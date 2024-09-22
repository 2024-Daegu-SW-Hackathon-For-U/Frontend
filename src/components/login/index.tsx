import { Link } from 'react-router-dom';

import kakaoIcon from '@/assets/header/kakao_symbol.svg';
import { KAKAO_AUTH_URL } from '@/constants/URI';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Text,
  Box,
  Image,
} from '@chakra-ui/react';
import styled from '@emotion/styled';

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

const Login = ({ isOpen, onClose }: Props) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalLayout>
        <ModalCloseButton />
        <ModalBody>
          <Box
            mt={20}
            gap={2}
            display='flex'
            flexDirection='column'
            textAlign='center'
          >
            <TextItem mb={4} fontSize='3rem'>
              🔥
            </TextItem>
            <TextItem color='color.black' fontWeight='600'>
              로그인하고 Hot 한 장소를 이용해보세요.
            </TextItem>
            <TextItem color='color.black' fontWeight='600'>
              필요한 시간은 단, 10초!
            </TextItem>
          </Box>
        </ModalBody>

        <ModalFooter>
          <LoginButton to={KAKAO_AUTH_URL}>
            <Image src={kakaoIcon} alt='kakao' width='1.5rem' />
            <TextItem color='color.black' fontWeight='600'>
              카카오로 계속하기
            </TextItem>
          </LoginButton>
        </ModalFooter>
      </ModalLayout>
    </Modal>
  );
};
export default Login;

const ModalLayout = styled(ModalContent)`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 1.5rem;
  margin: 5rem 1rem;
`;

const LoginButton = styled(Link)`
  display: flex;
  justify-content: center;
  flex-direction: row;
  gap: 0.5rem;
  width: 18rem;
  background-color: #fee500;
  color: black;
  border-radius: 8px;
  padding: 1rem 1rem;
  margin-bottom: 1rem;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.25);
`;

const TextItem = styled(Text)`
  font-weight: 600;
`;
