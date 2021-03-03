import React from 'react'
import { AuthContext } from './auth/AuthContext';
import { lista } from './data/empresa';

import { AppRouter } from './routes/AppRouter';

export const App = () => {
  return (
    <AuthContext.Provider value={lista}>
      
      <AppRouter/>
      
    </AuthContext.Provider>
  )
}

