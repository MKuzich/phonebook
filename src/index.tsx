import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './components/App';
import { ThemeProvider } from 'styled-components';
import { theme } from './theme';
import { Provider } from 'react-redux';
import { store, persistor } from './redux/store';
import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { PersistGate } from 'redux-persist/integration/react';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter basename="/phonebook/">
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <App />
          </PersistGate>
        </Provider>
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);
