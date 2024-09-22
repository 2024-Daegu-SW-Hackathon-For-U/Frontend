import MapImg from '@/assets/my-map-setting/map-sample.jpg';
import { Box, Image, Text } from '@chakra-ui/react';
import styled from '@emotion/styled';

const ThemeMap = () => {
  return (
    <>
      <Box marginY='4rem' textAlign='center' width='100%'>
        <Text textStyle='xlBold' color='color.white'>
          나의 지도 관리
        </Text>
      </Box>
      <Box mb={5} alignItems='start'>
        <Text textStyle='sm' fontWeight='600'>
          🗺️ 나의 테마지도 모아보기
        </Text>
      </Box>
      <Box
        display='flex'
        flexDirection='column'
        alignItems='center'
        textAlign='center'
        pb={5}
      >
        <MyMapBox width='100%' alignItems='center' textAlign='center'>
          <Box>
            <MapImage src={MapImg} alt='map' />
            <Text textStyle='smBold'>김대구님의 Hot 한 관광지</Text>
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
              여러분이 생각하는 최고의 관광 장소들로 이루어진 나만의 지도를
              만들어보세요!
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
              테마지도에 등록한 내 장소를 모아서 볼 수 있습니다.
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
              아래의 버튼을 클릭해서 테마를 둘러보고 큐레이션을 시작해보세요.
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
          🔍 테마지도 보러가기
        </Text>
      </Box>
    </>
  );
};

export default ThemeMap;

const MyMapBox = styled(Box)`
  display: flex;
  flex-direction: column;
  width: 20rem;
  height: 15rem;
  border-radius: 1rem;
  align-items: center;
  justify-content: center;
  background-color: #f8f8f8;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

const MapImage = styled(Image)`
  width: 17rem;
  border-radius: 1rem;
  margin-bottom: 1rem;
  margin-top: 0.5rem;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

const GapBox = styled(Box)`
  width: 17rem;
  border-radius: 1rem;
  margin-bottom: 1rem;
  margin-top: 0.5rem;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;
