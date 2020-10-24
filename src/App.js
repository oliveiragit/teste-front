import React from 'react';
import { ToastContainer } from 'react-toastify';

import Routes from './routes';
import GlobalStyle from './styles/global';

function App() {
  return (
    <>
      <ToastContainer autoClose={3000} />
      <GlobalStyle />
      <Routes />
    </>
  );
}

export default App;
