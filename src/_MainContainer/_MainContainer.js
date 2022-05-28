import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Books from '../data/data';
import BooksContainer from '../BooksContainer/BooksContainer';
import Header from '../Header/Header';
import React from 'react';
import HomePage from '../HomePage/HomePage';
import { Payment } from '../Payment/Payment';
import Cart from '../Cart/Cart';

class MainContainer extends React.Component {
  constructor(props) {
    super(props);
    this.handleAddToCart = this.handleAddToCart.bind(this);
    this.handleDeleteFromCart = this.handleDeleteFromCart.bind(this);
    this.handleConfirmTransaction = this.handleConfirmTransaction.bind(this);
  }
  state = {
    books: Books,
    isLoading: true,
    cart: [],
    fullPrice: 0,
  };

  componentDidMount() {
    this.setState({ ...this.state, isLoading: false });
  }
  handleAddToCart(id) {
    const found = this.state.books.find((element) => element.id === id);
    let cartProduct;

    const addQuantity = () => {
      const changedElement = this.state.cart.find(
        (element) => element.details.id === id
      );
      const indexOfChangedElement = this.state.cart.indexOf(changedElement);

      cartProduct = {
        quantity: changedElement.quantity + 1,
        details: changedElement.details,
      };

      let Cart = this.state.cart;
      let CartWantedElement = { ...Cart[indexOfChangedElement] };
      CartWantedElement.quantity += 1;
      Cart[indexOfChangedElement] = CartWantedElement;

      this.setState({
        ...this.state,
        cart: Cart,
        fullPrice: this.state.fullPrice + CartWantedElement.details.price,
      });
      console.log(this.state);
    };
    const addNew = () => {
      cartProduct = { quantity: 1, details: found };

      this.setState({
        ...this.state,
        cart: [...this.state.cart, cartProduct],
        fullPrice: this.state.fullPrice + cartProduct.details.price,
      });
    };

    if (this.state.cart.some((element) => element.details.id === id)) {
      addQuantity();
    } else {
      addNew();
    }
  }

  handleDeleteFromCart = (id) => {
    const wantedElement = this.state.cart.find(
      (element) => element.details.id === id
    );

    if (wantedElement.quantity > 1) {
      const indexOfChangedElement = this.state.cart.indexOf(wantedElement);

      let Cart = this.state.cart;
      let CartWantedElement = { ...Cart[indexOfChangedElement] };
      CartWantedElement.quantity -= 1;
      Cart[indexOfChangedElement] = CartWantedElement;
      this.setState({
        ...this.state,
        cart: Cart,
        fullPrice: this.state.fullPrice - CartWantedElement.details.price,
      });
    } else {
      let foundProduct;
      this.setState({
        ...this.state,
        cart: this.state.cart.filter(function (product) {
          if (product.details.id === id) {
            foundProduct = product;
          }
          return product.details.id !== id;
        }),
        fullPrice: this.state.fullPrice - foundProduct.details.price,
      });
    }
  };

  handleConfirmTransaction = () => {
    this.setState({ ...this.state, cart: [], fullPrice: 0 });
  };

  render() {
    return (
      <div>
        <BrowserRouter>
          <Header
            cartLength={this.state.cart.length}
            handleDeleteFromCart={this.handleDeleteFromCart}
          />
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route
              path='/products'
              element={
                <BooksContainer
                  books={this.state.books}
                  handleAddToCart={this.handleAddToCart}
                />
              }
            />
            <Route
              path='/payment'
              element={
                <Payment
                  cart={this.state.cart}
                  handleConfirmTransaction={this.handleConfirmTransaction}
                  fullPrice={this.state.fullPrice}
                />
              }
            />
            <Route
              path='/cart'
              element={
                <Cart
                  cart={this.state.cart}
                  handleAddToCart={this.handleAddToCart}
                  handleDeleteFromCart={this.handleDeleteFromCart}
                  fullPrice={this.state.fullPrice}
                />
              }
            />
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}

export default MainContainer;
