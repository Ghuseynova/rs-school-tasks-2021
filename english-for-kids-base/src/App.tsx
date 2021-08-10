import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Footer from './components/footer';
import Header from './components/header';
import Message from './components/message';
import Category from './pages/category';
import Main from './pages/main';

function App(): JSX.Element {
  return (
    <Router>
      <div className="App">
        <Header />

        <Route exact path="/" component={Main} />
        <Route path="/:category" component={Category} />

        <Route path="/win" component={() => <Message text="You Win" className="message--is-win" />} />
        <Route path="/lost" component={() => <Message text="You Lost" className="message--is-lost" />} />

        <Footer />
      </div>
    </Router>
  );
}

export default App;
