import { queryClient } from './api/instance';
import { Routes } from './routes';
import GlobalTheme from './styles/global';
import { ChakraProvider, GlobalStyle } from '@chakra-ui/react';
import { QueryClientProvider } from '@tanstack/react-query';

function App() {
  return (
    <ChakraProvider theme={GlobalTheme}>
      <QueryClientProvider client={queryClient}>
        <GlobalStyle />
        <Routes />
      </QueryClientProvider>
    </ChakraProvider>
>>>>>>> 39562d20c83275b497676fe45767fa92ea2faf24
  );
}

export default App;
