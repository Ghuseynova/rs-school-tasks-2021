import React from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Footer from './components/footer';
import Header from './components/header';
import Message from './components/message';
import Modal from './components/modal';
import Category from './pages/category';
import Main from './pages/main';
import { getIsModalOpen } from './store/selectors';

function App(): JSX.Element {
  const isModalOpen = useSelector(getIsModalOpen);
  console.log(isModalOpen);

  return (
    <Router>
      <div className="App">
        <Header />

        <Route exact path="/" component={Main} />
        <Route path="/:category" component={Category} />

        <Route path="/win" component={() => <Message text="You Win" className="message--is-win" />} />
        <Route path="/lost" component={() => <Message text="You Lost" className="message--is-lost" />} />

        <Footer />

        {isModalOpen && <Modal />}
      </div>
    </Router>
  );
}

export default App;
