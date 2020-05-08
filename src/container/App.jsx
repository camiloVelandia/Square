import React from 'react';
import '../styles/styles.scss';

import Header from '../components/Header';
import Main from '../components/Main';
import Services from '../components/Services';
import Reserve from '../components/Reserve';
import Slides from '../components/Slides';
import Form from '../components/Form';
import Footer from '../components/Footer';

const App = () => {
  return (
    <>
      <Header />
      <Main />
      <Services />
      <Reserve />
      <Slides />
      <Form />
      <Footer />
    </>
  );
};

export default App;
