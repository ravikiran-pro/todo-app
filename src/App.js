import React from 'react';

//HOC's
import AppAuth from './App.auth';
import AppTheme from './App.theme';
import AppAlert from './App.alert';
import AppErrorBoundary from './App.error_boundry';
import RouterApp from './router';

function App() {
  return <AppAuth>
    <AppErrorBoundary>
      <AppTheme>
          <AppAlert>
            <RouterApp />
          </AppAlert>
      </AppTheme>
    </AppErrorBoundary>
  </AppAuth>
}

export default App;
