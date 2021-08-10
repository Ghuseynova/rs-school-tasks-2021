import React from 'react';
import { useSelector } from 'react-redux';
import Header from './components/header';

import Garage from './pages/garage';
import Winners from './pages/winners';
import { getCurrentPage } from './store/selectors';

const defaultPageName = 'garage';

function App(): JSX.Element {
  const currentPage: string = useSelector(getCurrentPage);

  return (
    <div className="App">
      <Header />

      {currentPage === defaultPageName ? <Garage /> : <Winners />}
    </div>
  );
}

export default App;
