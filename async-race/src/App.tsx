import React from 'react';
import Header from './components/header';

import Garage from './pages/garage';
import Winners from './pages/winners';

function App(): JSX.Element {
  const currentPage: unknown = 'winners';

  return (
    <div className="App">
      <Header />

      {currentPage === 'garage' ? <Garage /> : <Winners />}
    </div>
  );
}

export default App;
