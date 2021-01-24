import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './routes';

import { store, persistor } from './store';

import GlobalStyle from './styles/global';
import Theme from './styles/theme/light';

const App:React.FC = () => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <ThemeProvider theme={Theme()}>
        <Router>
          <Routes />
          <GlobalStyle />
        </Router>
      </ThemeProvider>
    </PersistGate>
  </Provider>
);

export default App;
