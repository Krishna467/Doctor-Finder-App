import React from 'react';
import { Container} from '@material-ui/core';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/Header'; 

import Main from './components/Main.js';

function App() {

  return (
     <Container maxWidth="lg">
     <BrowserRouter>
      <Header />
      <Main />
     </BrowserRouter>
     </Container>
  );
}

export default App;
