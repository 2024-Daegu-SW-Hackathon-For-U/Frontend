import { extendTheme } from '@chakra-ui/react';

const GlobalTheme = extendTheme({
  // Font Family 선언
  fonts: {
    body: `'Noto Sans KR', sans-serif`,
  },
  colors: {
    /**
     * Global Color 선언
     * 사용 : 'color.색상이름'
     */
    color: {
      primary: '#7B6FBD',
      secondary: '#59BEEB',
      white: '#fff',
      similarWhite: '#F9F9FB',
      black: '#2e2e2e',
      similarBlack: '#606060',
      gray: '#C0C0C0',
    },
  },
  textStyles: {
    sm: {
      fontSize: '18px',
      fontWeight: '500',
    },
    smBold: {
      fontSize: '18px',
      fontWeight: '700',
    },
    smHeavy: {
      fontSize: '18px',
      fontWeight: '900',
    },
    md: {
      fontSize: '20px',
      fontWeight: '500',
    },
    mdBold: {
      fontSize: '20px',
      fontWeight: '700',
    },
    mdHeavy: {
      fontSize: '20px',
      fontWeight: '900',
    },
    lg: {
      fontSize: '24px',
      fontWeight: '500',
    },
    lgBold: {
      fontSize: '24px',
      fontWeight: '700',
    },
    lgHeavy: {
      fontSize: '24px',
      fontWeight: '900',
    },
    xl: {
      fontSize: '26px',
      fontWeight: '500',
    },
    xlBold: {
      fontSize: '26px',
      fontWeight: '700',
    },
    xlHeavy: {
      fontSize: '26px',
      fontWeight: '900',
    },
  },
  styles: {
    // Global Font Face 선언
    global: {
      '@font-face': {
        fontFamily: 'Noto Sans KR',
        src: `url(''https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100..900&display=swap'') format('woff')`,
        fontWeight: '500, 700, 900',
        fontStyle: 'normal',
        fontOpticalSizing: 'auto',
      },
      body: {
        margin: 0,
        padding: 0,
        boxSizing: 'border-box',
        overflowY: 'auto',
        width: '100%',
        height: '100%',
        position: 'relative',

        // 모바일 너비 적용
        '@media(min-width: 768px)': {
          width: '480px',
        },
      },
      '*': {
        boxSizing: 'border-box', // 모든 요소에 box-sizing 적용
      },
    },
  },
});

export default GlobalTheme;
