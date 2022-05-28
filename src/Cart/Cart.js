import React, { useState } from 'react';
//  import './cart.css'
import './textbuttons';
import BasicButtons from './textbuttons';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import ComboBox from './autocomplete';
import CustomizedButtons from './custombutton';
import { Table } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './cart.css';
import { Link } from 'react-router-dom';

function Cart(props) {
  return (
    <Container style={({ width: '100%' }, { display: 'table' })}>
      <Container className='container_left'>
        <div className='header_text'>
          <h2>
            <strong>Shopping Cart</strong>
          </h2>
        </div>
        <hr />

        {props.cart.length === 0 ? (
          <h1>Cart is empty!</h1>
        ) : (
          <Table className='table' striped bordered hover size='sm'>
            <thead>
              <tr style={{ textAlign: 'center' }}>
                <th>Product Details</th>
                <th>Quantity</th>
                <th>Price</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              {props.cart.map((element) => (
                <tr key={element.details.id}>
                  <td>
                    <Row className='row'>
                      <Col className='col'>
                        <img
                          style={({ width: '100px' }, { height: '100px' })}
                          src={element.details.url}
                        />
                      </Col>
                      <Col className='col'>
                        <li>{element.details.title}</li>
                        <li>ISBN: {element.details.isbn}</li>
                      </Col>
                    </Row>
                  </td>
                  <td style={{ width: '200px' }}>
                    <Button
                      className='btn'
                      variant='text'
                      style={{ fontSize: '30px' }}
                      onClick={() => props.handleAddToCart(element.details.id)}
                    >
                      +
                    </Button>
                    <TextField
                      style={{ width: '50px' }}
                      className='textfield'
                      id='outlined-basic'
                      label=' '
                      value={element.quantity}
                      variant='outlined'
                    />
                    <Button
                      className='btn'
                      variant='text'
                      style={{ fontSize: '30px' }}
                      onClick={() =>
                        props.handleDeleteFromCart(element.details.id)
                      }
                    >
                      -
                    </Button>
                  </td>
                  <td style={{ textAlign: 'center' }}>
                    {element.details.price}
                  </td>
                  <td style={{ textAlign: 'center' }}>
                    {element.details.price * element.quantity}
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        )}
        <Link to='/products'>
          {' '}
          <Button variant='text' className='text_btn'>
            Continue shopping
          </Button>
        </Link>
      </Container>

      <Container className='container_right'>
        <div className='headers'>
          <h2>
            <strong>Order Summary</strong>
          </h2>
        </div>
        <hr />

        <h5>Shipping</h5>
        <ComboBox />
        <h5>Promo Code</h5>
        <TextField
          className='textfield'
          id='outlined-basic'
          label='Outlined'
          variant='outlined'
        />
        <Button variant='contained' size='normal' className='normal'>
          Apply
        </Button>
        <hr className='last' />
        <div className='headers'>
          <strong className='right'> Amount: ${props.fullPrice}</strong>
        </div>
        <Link to='/payment' style={{ textDecoration: 'none' }}>
          <Button variant='contained' size='large' className='large'>
            Proceed to Pay
          </Button>
        </Link>
      </Container>
    </Container>
  );
}

export default Cart;
