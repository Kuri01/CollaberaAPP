import React, { useState } from 'react';

import { animated, useSprings } from 'react-spring';
import styled, { ThemeProvider } from 'styled-components';
import { Box, Container, Heading, Typography, Flex, Grid, theme } from './ui';
import { Button } from '@mui/material';

const GridContainer = styled(Grid)``;
GridContainer.defaultProps = {
  gridTemplateColumns: [
    'repeat(1, 1fr)',
    null,
    'repeat(2, 1fr)',
    'repeat(4, 1fr)',
  ],
  gridGap: [1, null, 2],
};

const AnimatedItem = styled(animated(Flex))`
  cursor: pointer;
`;
AnimatedItem.defaultProps = {
  width: '100%',
  backgroundSize: 'cover',
  backgroundPosition: 'center center',
  backgroundRepeat: 'no-repeat',
  justifyContent: 'space-evenly',
  alignItems: 'center',
  flexDirection: 'column',
  height: [300, null, 450],
};

const TitleWrapper = styled(animated(Flex))``;
TitleWrapper.defaultProps = {
  color: 'text100',
  justifyContent: 'center',
  alignItems: 'center',
  textAlign: 'center',
  width: 1,
  height: '100%',
  p: [1, null, 2],
  background: 'rgba(0,0,0,0.6)',
  fontSize: [4, null, 5],
};

const TextWrapper = styled(animated(Flex))`
  overflow: hidden;
`;
TextWrapper.defaultProps = {
  flexDirection: 'column',
  justifyContent: 'center',
  textAlign: 'center',
  height: '100%',
  background: '#fff',
  fontSize: 1,
};

const AnimatedBox = styled(animated(Box))``;
AnimatedBox.defaultProps = {};

const BooksContainer = (props) => {
  const [index, setIndex] = useState(null);
  const [isDelayed, setIsDelayed] = useState(true);
  const Books = props.books;

  const springs = useSprings(
    Books.length,
    Books.map((item, i) => ({
      delay: isDelayed ? 80 * i : 0,
      opacity: 1,
      transform: 'translateY(0px)',
      overlayOpacity: i === index ? 0 : 1,
      textOpacity: i === index ? 1 : 0,
      textHeight: i === index ? '100%' : '0%',
      from: {
        opacity: 0,
        transform: 'translateY(100px)',
        overlayOpacity: 1,
        textOpacity: 0,
        textHeight: '0%',
      },
    }))
  );

  const handleClick = (event) => {
    event.preventDefault();
    props.handleAddToCart(parseInt(event.target.value));
  };

  return (
    <ThemeProvider theme={theme}>
      <Box bg='bg100' minHeight='100vh' pt={1} pb={12}>
        <Container>
          <Heading textAlign='center'>Check out out new books!</Heading>
          <Typography textAlign='center' pb={2}></Typography>
          <GridContainer>
            {springs.map(
              (
                { opacity, transform, overlayOpacity, textOpacity, textHeight },
                i
              ) => (
                <AnimatedItem
                  onClick={() => {
                    setIndex(i);
                    setIsDelayed(false);
                  }}
                  key={i}
                >
                  <AnimatedItem
                    background={`url(${Books[i].url}?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940)`}
                    style={{ opacity, transform }}
                  >
                    <TitleWrapper style={{ opacity: overlayOpacity }}>
                      {Books[i].title}
                    </TitleWrapper>
                  </AnimatedItem>
                  <TextWrapper style={{ height: textHeight }}>
                    <AnimatedBox style={{ opacity: textOpacity }} p={2}>
                      <Typography fontSize={3} fontWeight={2} pb={2}>
                        {Books[i].title}
                      </Typography>
                      <Container style={{ height: '100px' }}>
                        <p style={{ padding: 0, margin: 0 }}>
                          <span>ISBN: </span>
                          {Books[i].isbn}
                        </p>
                        <p style={{ padding: 0, margin: 0 }}>
                          <span>Number of pages: </span>
                          {Books[i].pages}
                        </p>
                        <p style={{ padding: 0, margin: 0 }}>
                          <span>Release date: </span>
                          {Books[i].releaseDate}
                        </p>
                        <Button value={Books[i].id} onClick={handleClick}>
                          Add to cart
                        </Button>
                      </Container>
                    </AnimatedBox>
                  </TextWrapper>
                </AnimatedItem>
              )
            )}
          </GridContainer>
        </Container>
      </Box>
    </ThemeProvider>
  );
};

export default BooksContainer;
