import React from 'react';
import { Books } from '../BooksContainer/BooksContainer';
import { mockBooks } from '../data/data';
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
      </div>
    );
  }
}

export default MainContainer;
