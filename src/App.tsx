import { queryClient } from './api/instance';
import { AuthProvider } from './provider/auth';
import { Routes } from './routes';
import GlobalTheme from './styles/global';
import { ChakraProvider, GlobalStyle } from '@chakra-ui/react';
import { QueryClientProvider } from '@tanstack/react-query';

function App() {
  return (
    <ChakraProvider theme={GlobalTheme}>
      <QueryClientProvider client={queryClient}>
        <AuthProvider>
          <GlobalStyle />
          <Routes />
        </AuthProvider>
      </QueryClientProvider>
    </ChakraProvider>
  );
}

export default App;
