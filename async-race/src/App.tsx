import React from 'react';
import { useSelector } from 'react-redux';
import Header from './components/header';

import Garage from './pages/garage';
import Winners from './pages/winners';

const getCurrentPage = (state: { currentPage: string }) => state.currentPage;

function App(): JSX.Element {
  const currentPage: string = useSelector(getCurrentPage);

  return (
    <div className="App">
      <Header />

      {currentPage === 'garage' ? <Garage /> : <Winners />}
    </div>
  );
}

export default App;
