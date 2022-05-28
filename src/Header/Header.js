import {
  Container,
  Navbar,
  Form,
  FormControl,
  Row,
  Col,
} from 'react-bootstrap';
import PersonIcon from '@mui/icons-material/Person';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import styles from './Header.module.scss';
import { Link } from 'react-router-dom';

const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
  },
}));

const Header = (props) => {
  const handleChange = (event) => {
    event.preventDefault();
    props.handleSearch(event.target.value);
  };

  return (
    <Navbar bg='light' variant='light' expand='lg'>
      {' '}
      <Navbar.Toggle aria-controls='navbarScroll' />
      <Navbar.Collapse id='navbarScroll'>
        <Container fluid style={{ flexDirection: 'column' }}>
          <Row style={{ justifyContent: 'space-around', width: '100%' }}>
            <Col
              align='center'
              className='d-flex align-items-center justify-content-center'
            >
              <h4>Bookshop</h4>
            </Col>

            <Col
              align='center'
              className='d-flex align-items-center justify-content-center'
            >
              <Form style={{ width: '100%' }}>
                <FormControl
                  type='search'
                  placeholder='Search'
                  className='me-2'
                  aria-label='Search'
                  value={props.searchText}
                  onChange={handleChange}
                />
              </Form>
            </Col>
            <Col align='center'>
              <Link to='/cart'>
                <IconButton
                  aria-label='cart'
                  style={{ margin: '0 10px 0 10px', fontSize: '100px' }}
                >
                  <StyledBadge
                    badgeContent={props.cartLength}
                    color='secondary'
                  >
                    <ShoppingCartIcon
                      style={{ fontSize: '40px', color: 'black' }}
                    />
                  </StyledBadge>
                </IconButton>
              </Link>

              <IconButton aria-label='user' style={{ margin: '0 10px 0 10px' }}>
                <PersonIcon style={{ fontSize: '50px', color: 'black' }} />
              </IconButton>
            </Col>
          </Row>
          <Row
            style={{
              justifyContent: 'center',
              width: '100%',
              margin: 0,
              padding: 0,
            }}
          >
            <Col
              align='center'
              className='d-flex align-items-center justify-content-center'
              xs={3}
            >
              <p className={styles.linkContainer}>
                <Link to='/' className={styles.link}>
                  Home
                </Link>
              </p>
            </Col>

            <Col
              align='center'
              className='d-flex align-items-center justify-content-center'
              xs={3}
            >
              <p className={styles.linkContainer}>
                <Link to='/products' className={styles.link}>
                  Products
                </Link>
              </p>
            </Col>
            <Col
              align='center'
              className='d-flex align-items-center justify-content-center'
              xs={3}
            >
              <p className={styles.linkContainer}>
                <Link to='/' className={styles.link}>
                  About us
                </Link>
              </p>
            </Col>
          </Row>
        </Container>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
