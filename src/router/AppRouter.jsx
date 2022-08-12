import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { LoginPage } from '../auth/pages/LoginPage'
import { HeroesRoutes } from '../heroes/routes/HeroesRoutes'

import { PrivateRute } from './PrivateRute'
import { PublicRoute } from './PublicRoute'

export const AppRouter = () => {
  return (
    <>          
          <Routes>             
            <Route 
              path='login' 
              element={
                <PublicRoute> 
                  <LoginPage />
                </PublicRoute>
              } />

            <Route 
              path='/*' 
              element={
                <PrivateRute>
                  <HeroesRoutes />
                </PrivateRute>
              } />
          </Routes> 
    </>
  )
}