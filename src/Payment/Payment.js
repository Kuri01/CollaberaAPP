import React from 'react';
import './Payment.scss';
import mystore from './mystore.PNG';
import book from './book.png';
import ingenico from './ingenico.PNG';
import {
  Visa,
  Paypal,
  Mastercard,
  Googlepay,
  Applepay,
  Hsbc,
} from 'react-pay-icons';
import swal from 'sweetalert';
import { Link } from 'react-router-dom';

export class Payment extends React.Component {
  constructor(props) {
    super(props);
    this.showAlert = this.showAlert.bind(this);
  }

  componentDidMount() {
    const script = document.createElement('script');
    script.src = 'https://unpkg.com/sweetalert/dist/sweetalert.min.jss';
    script.async = true;
    document.body.appendChild(script);
  }
  showAlert() {
    swal('Order Successful', 'Hope you enjoy reading our books', 'success');
    this.props.handleConfirmTransaction();
  }
  render() {
    return (
      <div className='payment-wrapper'>
        <nav className='navbar navbar-light bg-light'>
          <h1>My Store Ltd.</h1>
          <img src={mystore} alt='store'></img>
        </nav>
        <div className='container-fluid'>
          <div className='row' style={{ height: 'inherit' }}>
            <div className='col-md-8 bg-light left'>
              <div className='row mt-4'>
                <div className='col-md-4'>
                  <Link to='/' href='#' className='link-secondary'>
                    {' '}
                    Back to merchant's site
                  </Link>
                  <div className='apply-block mb-3'>
                    <h4 className='pt-3'>How would you like to pay?</h4>
                    <Visa
                      className='payIcons'
                      style={{ margin: 10, width: 50 }}
                    />
                    <Paypal
                      className='payIcons'
                      style={{ margin: 10, width: 50 }}
                    />
                    <Mastercard
                      className='payIcons'
                      style={{ margin: 10, width: 50 }}
                    />
                    <Googlepay
                      className='payIcons'
                      style={{ margin: 10, width: 50 }}
                    />
                    <Applepay
                      className='payIcons'
                      style={{ margin: 10, width: 50 }}
                    />
                    <Hsbc
                      className='payIcons'
                      style={{ margin: 10, width: 50 }}
                    />
                  </div>
                </div>
                <div className='col'>
                  <div className='order-summary'>
                    <label style={{ marginTop: '1rem' }}>
                      <b>Order Summary</b>
                    </label>
                    <p>
                      Order reference number:{' '}
                      {Math.floor(Math.random() * 10000)}
                    </p>
                    {this.props.cart.map((element) => (
                      <div className='order-one mt-2'>
                        <img src={book} class='book' />
                        <label>
                          {element.details.title}
                          <b> x{element.quantity}</b>
                        </label>
                        <span style={{ float: 'right' }}>
                          &#8364;{element.details.price}
                        </span>
                      </div>
                    ))}

                    <p>
                      <span>Shipping</span>
                      <span style={{ float: 'right' }}> Free</span>
                    </p>
                    <p>
                      <span>Taxes</span>
                      <span style={{ float: 'right' }}>&#8364;4.82</span>
                    </p>
                    <p>
                      <label>
                        <b>Total</b>
                      </label>
                      <label style={{ float: 'right' }}>
                        <b>&#8364;{this.props.fullPrice + 4.82}</b>
                      </label>
                    </p>
                    <div class='d-grid gap-2'>
                      <button
                        type='button'
                        class='btn btn-success'
                        onClick={this.showAlert}
                      >
                        Continue to secure payment
                      </button>
                    </div>
                    <Link to='/' className='link-secondary'>
                      Cancel payment
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className='col bg-light p-0 right'>
              <div
                style={{
                  lineHeight: 4,
                  backgroundColor: 'white',
                  paddingLeft: '20px',
                }}
              >
                <b>Total EUR 108.12</b>
              </div>
              <h4 style={{ paddingTop: '30px', paddingLeft: '20px' }}>
                How would you like to pay?
              </h4>
              <div class='form-check'>
                <input
                  class='form-check-input'
                  type='radio'
                  name='flexRadioDefault'
                  id='flexRadioDefault1'
                />
                <label class='form-check-label' for='flexRadioDefault1'>
                  Paypal
                </label>
                <Paypal className='payIcons' style={{ width: 45 }} />
              </div>
              <div class='form-check mt-2'>
                <input
                  class='form-check-input'
                  type='radio'
                  name='flexRadioDefault'
                  id='flexRadioDefault2'
                />
                <label class='form-check-label' for='flexRadioDefault2'>
                  Master card
                </label>
                <Mastercard className='payIcons' style={{ width: 45 }} />
              </div>
              <div class='form-check mt-2'>
                <input
                  class='form-check-input'
                  type='radio'
                  name='flexRadioDefault'
                  id='flexRadioDefault2'
                />
                <label class='form-check-label' for='flexRadioDefault2'>
                  Visa
                </label>
                <Visa className='payIcons' style={{ width: 45 }} />
              </div>
              <div class='form-check mt-2'>
                <input
                  class='form-check-input'
                  type='radio'
                  name='flexRadioDefault'
                  id='flexRadioDefault2'
                />
                <label class='form-check-label' for='flexRadioDefault2'>
                  Apple pay
                </label>
                <Applepay className='payIcons' style={{ width: 45 }} />
              </div>
            </div>
          </div>
        </div>
        <footer className='text-center text-lg-start'>
          <div className='text-center p-3'>
            <p>Payment processed by</p>
            <img src={ingenico}></img>
          </div>
        </footer>
      </div>
    );
  }
}
