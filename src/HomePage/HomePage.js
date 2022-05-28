import React from 'react';
import styles from './HomePage.module.scss';
import { Container, Carousel, Col, Row } from 'react-bootstrap';
import firstImage from '../Images/firstImage.jpg';
import secondImage from '../Images/secondImage.jpg';
import thirdImage from '../Images/thirdImage.jpg';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';

const cards = [
  {
    id: '1',
    icon: <LocalShippingIcon style={{ fontSize: '50px' }} />,
    title: 'Quick delivery',
  },
  {
    id: '2',
    icon: <LocalShippingIcon style={{ fontSize: '50px' }} />,
    title: 'Pay with easy',
  },
  {
    id: '3',
    icon: <LocalShippingIcon style={{ fontSize: '50px' }} />,
    title: 'Best deal',
  },
  {
    id: '4',
    icon: <LocalShippingIcon style={{ fontSize: '50px' }} />,
    title: 'Secured payment',
  },
];

const HomePage = (props) => {
  return (
    <div>
      <Container
        fluid='lg'
        style={{ border: '2px solid gray', padding: 0 }}
        align='center'
      >
        <Carousel>
          <Carousel.Item>
            <img className='d-block w-100' src={firstImage} alt='First slide' />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className='d-block w-100'
              src={secondImage}
              alt='Second slide'
            />
          </Carousel.Item>
          <Carousel.Item>
            <img className='d-block w-100' src={thirdImage} alt='Third slide' />
          </Carousel.Item>
        </Carousel>

        <Row styles={{ padding: '20px' }}>
          {cards.map((card) => (
            <Col align='center' md={3}>
              <Row style={{ height: '100%' }}>
                <Col
                  className='d-flex align-items-center justify-content-center'
                  xs={4}
                >
                  {card.icon}
                </Col>
                <Col xs={8}>
                  <Container>
                    <h4>{card.title}</h4>
                    <p>Laborum sint nostrud ut laborum.</p>
                  </Container>
                </Col>
              </Row>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default HomePage;
