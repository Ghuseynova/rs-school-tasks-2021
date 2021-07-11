import React from 'react';
import { BrowserRouter as Router, Switch, Route, useParams } from 'react-router-dom';
import Footer from './components/footer';
import Header from './components/header';
import Category from './pages/category';
import Main from './pages/main';

function App(): JSX.Element {
  return (
    <Router>
      <div className="App">
        <Header />

        <Route exact path="/" component={Main} />
        <Route path="/:category" component={Category} />

        <Footer />
      </div>
    </Router>
  );
}

export default App;
