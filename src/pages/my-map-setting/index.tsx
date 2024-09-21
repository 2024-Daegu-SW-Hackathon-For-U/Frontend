import CurationMap from '@/components/my-map-setting/curation-map';
import ThemeMap from '@/components/my-map-setting/theme-map';
import { Box } from '@chakra-ui/react';
import styled from '@emotion/styled';

const MyMapSetting = () => {
  return (
    <MyMapSettingLayout backgroundColor='color.primary' paddingX={9}>
      <ThemeMap />
      <CurationMap />
    </MyMapSettingLayout>
  );
};

export default MyMapSetting;

const MyMapSettingLayout = styled(Box)`
  display: flex;

  flex-direction: column;
  width: 100%;
`;
