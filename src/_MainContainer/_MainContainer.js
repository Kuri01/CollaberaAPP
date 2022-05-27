import React from 'react';
import { Books } from '../BooksContainer/BooksContainer';
import { mockBooks } from '../data/data';
import { Payment } from '../Payment/Payment';

class MainContainer extends React.Component {
  constructor(props) {
    super(props);
  }
  state = {
    books: mockBooks,
  };

  render() {
    return (
      <div>
        <Books books={this.state.books} />
        <Payment />
      </div>
    );
  }
}

export default MainContainer;
