import { Box, Button, Text } from '@chakra-ui/react';
import styled from '@emotion/styled';

const MyPage = () => {
  return (
    <MyPageLayout backgroundColor='color.primary'>
      <FlexBox marginTop={7} justifyContent='space-between' gap='5rem'>
        <FlexBox justifyContent='space-between' gap='0.5rem'>
          <Text textStyle='mdBold' color='color.white'>
            마이페이지
          </Text>
          <Text color='color.white'>
            닉네임과 소개글을 수정하고 저장해보세요!
          </Text>
        </FlexBox>
        <Box
          display='flex'
          flexDirection='column'
          alignItems='start'
          justifyContent='space-between'
          gap='1rem'
        >
          <Text textStyle='smBold'>닉네임</Text>
          <InputItem />

          <Text textStyle='smBold'>한 줄 소개</Text>
          <InputItem />
        </Box>
      </FlexBox>
      <FlexBox justifyContent='space-between' gap='0.5rem' marginY={5}>
        <Text textStyle='mdBold' color='color.white'>
          나를 소개할 수 있는 글을 작성해보아요!
        </Text>
      </FlexBox>
      <ButtonItem
        marginY={10}
        textStyle='mdBold'
        backgroundColor='color.secondary'
        color='color.white'
      >
        저장하기
      </ButtonItem>
    </MyPageLayout>
  );
};

export default MyPage;

const FlexBox = styled(Box)`
  display: flex;
  text-align: center;
  align-items: center;
  flex-direction: column;
`;

const MyPageLayout = styled(FlexBox)`
  height: 100vh;
  width: 100%;
`;

const InputItem = styled.input`
  width: 18rem;
  height: 3rem;
  padding: 1rem;
  border-radius: 0.5rem;
  border: none;
  margin-bottom: 1rem;

  &:focus {
    outline: none;
  }
`;

const ButtonItem = styled(Button)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 16rem;
  height: 3rem;
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;
  text-align: center;
`;
