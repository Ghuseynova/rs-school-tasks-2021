import React from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter as Router, Switch, Route, useParams } from 'react-router-dom';
import Footer from './components/footer';
import Header from './components/header';
import Message from './components/message';
import Category from './pages/category';
import Main from './pages/main';
import { getAudios } from './store/selectors';

function App(): JSX.Element {
  const audios = useSelector(getAudios);
  return (
    <Router>
      <div className="App">
        <Header />

        <Route exact path="/" component={Main} />
        <Route path="/:category" component={Category} />

        <Route path="/win" component={() => <Message text="You Win" />} />
        <Route path="/lost" component={() => <Message text="You Lost" />} />

        <Footer />
      </div>
    </Router>
  );
}

export default App;
