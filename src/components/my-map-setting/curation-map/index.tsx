import { Box, Text } from '@chakra-ui/react';
import styled from '@emotion/styled';

const CurationMap = () => {
  return (
    <>
      <Box mt={10} mb={5} alignItems='start'>
        <Text textStyle='sm' fontWeight='600'>
          🏕 나의 큐레이션 지도
        </Text>
      </Box>
      <Box
        display='flex'
        flexDirection='column'
        alignItems='center'
        textAlign='center'
        pb={5}
      >
        <MyMapBox>
          <Box
            display='flex'
            flexDirection='row'
            gap={5}
            textAlign='center'
            alignItems='center'
          >
            <Text textStyle='sm'>❤️ 내가 좋아하는 장소들</Text>
            <Text fontSize={15} color='gray.400'>
              0개의 장소
            </Text>
          </Box>
        </MyMapBox>
        <GapBox />
        <Box>
          <Box
            display='flex'
            flexDirection='row'
            gap={2}
            mb={2}
            textAlign='start'
          >
            <Text textStyle='smBold'>✏️</Text>
            <Text fontSize={15} fontWeight={700} color='color.white'>
              나만의 지도를 만들어 장소를 마음껏 등록하고, 공유해보세요.
            </Text>
          </Box>
        </Box>
        <Box>
          <Box
            display='flex'
            flexDirection='row'
            gap={2}
            marginX={3}
            mb={2}
            textAlign='start'
          >
            <Text textStyle='sm' color='color.similarWhite'>
              -
            </Text>
            <Text fontSize={15} color='color.similarWhite'>
              하나의 지도에 장소를 마음껏 등록할 수 있습니다.
            </Text>
          </Box>
          <Box
            display='flex'
            flexDirection='row'
            gap={2}
            marginX={3}
            mb={2}
            textAlign='start'
          >
            <Text textStyle='sm' color='color.similarWhite'>
              -
            </Text>
            <Text fontSize={15} color='color.similarWhite'>
              등록된 장소들은 지도 설정값에 따라 핫 인 대구 웹사이트에 공유될 수
              있습니다.
            </Text>
          </Box>
        </Box>
      </Box>
      <Box
        marginY={10}
        textAlign='center'
        paddingY='1rem'
        backgroundColor='color.secondary'
        borderRadius='0.75rem'
        boxShadow='0px 4px 4px rgba(0, 0, 0, 0.25)'
      >
        <Text textStyle='smBold' color='color.black'>
          📝 큐레이션 지도 만들기
        </Text>
      </Box>
    </>
  );
};

export default CurationMap;

const MyMapBox = styled(Box)`
  display: flex;
  width: 100%;
  flex-direction: column;
  padding: 1.5rem 1rem;
  text-align: center;
  border-radius: 1rem;
  align-items: start;
  background-color: #f8f8f8;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

const GapBox = styled(Box)`
  display: flex;
  margin: 1rem 0;
`;
