import React from 'react';
import './Payment.scss';
import mystore from './mystore.PNG';
import book from './book.png';
import ingenico from './ingenico.PNG';
import { Visa, Paypal, Mastercard, Googlepay, Applepay, Hsbc } from "react-pay-icons";
import swal from 'sweetalert';



export class Payment extends React.Component {
    constructor(props) {
        super(props);
        this.showAlert = this.showAlert.bind(this);
      }
    
    componentDidMount () {
        const script = document.createElement("script");
        script.src = "https://unpkg.com/sweetalert/dist/sweetalert.min.jss";
        script.async = true;
        document.body.appendChild(script);
    }
    showAlert() {
        swal("Order Successful", "Hope you enjoy reading our books", "success");
    }
    render() {
        return (
            <div className="payment-wrapper">
                <nav className="navbar navbar-light bg-light">
                    <h1>
                        My Store Ltd.
                    </h1>
                    <img src={mystore}></img>
                </nav>
                <div className="row container-wrapper">
                    <div className="col-md-8 bg-light left">
                        <div className="row">
                            <div className="col-md-5">
                                <a href="#" className="link-secondary"> Back to merchant's site</a>
                                <div className="apply-block mb-3">
                                    <h4 className="mt-3 pt-3">How would you like to pay?</h4>
                                    <Visa className="payIcons" style={{ margin: 10, width: 50 }} />
                                    <Paypal className="payIcons" style={{ margin: 10, width: 50 }} />
                                    <Mastercard className="payIcons" style={{ margin: 10, width: 50 }} />
                                    <Googlepay className="payIcons" style={{ margin: 10, width: 50 }} />
                                    <Applepay className="payIcons" style={{ margin: 10, width: 50 }} />
                                    <Hsbc className="payIcons" style={{ margin: 10, width: 50 }} />
                                </div>
                            </div>
                            <div className="col-md-7">
                                <div className="order-summary">
                                    <label><b>Order Summary</b></label>
                                    <p>Order reference number: 123456</p>
                                    <div className="order-one">
                                        <img src={book} class="book" />
                                        <label>The road to REACT<b>x 1</b></label>
                                        <span style={{ float: "right" }}>&#8364;36.50</span>
                                    </div>
                                    <div className="order-two">
                                        <img src={book} class="book" />
                                        <label>Angular Fundamentals <b>x 1</b></label>
                                        <span style={{ float: "right" }}>&#8364;66.80</span>
                                    </div>
                                    <p>
                                        <span>Shipping</span>
                                        <span style={{ float: "right" }}> Free</span>
                                    </p>
                                    <p>
                                        <span>Taxes</span>
                                        <span style={{ float: "right" }}>&#8364;4.82</span>
                                    </p>
                                    <p>
                                        <label>
                                            <b>Total</b>
                                        </label>
                                        <label style={{ float: "right" }}>
                                            <b>&#8364;108.12</b>
                                        </label>
                                    </p>
                                    <div class="d-grid gap-2">
                                        <button type="button" class="btn btn-success" onClick={this.showAlert}>Continue to secure payment</button>
                                    </div>
                                    <a href="#" className="link-secondary"><p style={{ textAlign: 'center' }}>Cancel payment</p></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 bg-light right">
                    </div>
                </div>
                <footer className="text-center text-lg-start">
                    <div className="text-center p-3">
                        <p>Payment processed by</p>
                        <img src={ingenico}></img>
                    </div>
                </footer>
            </div>
        );
    }
}

