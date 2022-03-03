import React from 'react';
import Global from './Theme/Global';
import Header from './Componentes/Header';
import Home from './Componentes/Home';
import Footer from './Componentes/Footer';

const App = () => {
  return (
    <React.Fragment>
      <Global />
      <Header />
      <Home />
      <Footer />
    </React.Fragment>
  );
};

export default App;
