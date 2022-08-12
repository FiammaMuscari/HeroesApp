import React from 'react';
import { AppRouter } from './router/AppRouter';
import { AuthProvider } from './auth/context/AuthProvider';

import 'animate.css';

export const HeroesApp = () => {
  return (
   <>
      <AuthProvider>
          <AppRouter />
      </AuthProvider>     
   </>
  )
}
