import React from 'react';
import { AppRouter } from './router/AppRouter';
import { AuthProvider } from './auth/context/AuthProvider';
import { ChakraProvider } from '@chakra-ui/react'
import 'animate.css';

export const HeroesApp = () => {
  return (
   <>
    <ChakraProvider>
      <AuthProvider>
          <AppRouter />
      </AuthProvider>     
    </ChakraProvider>
   </>
  )
}
