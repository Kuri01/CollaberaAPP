import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { mockBooks } from '../data/data';
import BooksContainer from '../BooksContainer/BooksContainer';
import Header from '../Header/Header';
import React from 'react';
import HomePage from '../HomePage/HomePage';

class MainContainer extends React.Component {
  constructor(props) {
    super(props);
  }
  state = {
    books: mockBooks,
    isLoading: true,
  };

  componentDidMount() {
    this.setState({ ...this.state, isLoading: false });
  }

  render() {
    return (
      <div>
        <BrowserRouter>
          {' '}
          <Header />
          <Routes>
            <Route path='/' element={<HomePage title={'title'} />} />
            <Route path='/products' element={<BooksContainer />} />
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}

export default MainContainer;
