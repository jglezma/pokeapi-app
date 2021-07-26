import * as React from 'react';
import Navigation from './src/navigations';
import { NativeBaseProvider } from 'native-base';
import { AppProvider } from './src/context/AppContext';

function App() {
  return (
    <NativeBaseProvider>
      <AppProvider>
        <Navigation />
      </AppProvider>
    </NativeBaseProvider>
  );
}

export default App;
