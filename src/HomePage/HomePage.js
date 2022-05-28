import React, { useState, useRef } from 'react';
import ReactDOM from 'react-dom';
import { useSpring, animated } from 'react-spring';
import './styles.scss';
import delivery from '../Images/delivery.svg';
import review from '../Images/review.svg';
import book from '../Images/book.svg';

function HomePage() {
  return (
    <div className='main'>
      <Particles>
        <Hero>
          <div className='container'>
            <div className='row'>
              {cards.map((card, i) => (
                <div className='column'>
                  <Card>
                    <div className='card-title'>{card.title}</div>
                    <div className='card-body'>{card.description}</div>
                    <Image ratio={card.imageRatio} src={card.image} />
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </Hero>
      </Particles>
    </div>
  );
}

function Card({ children }) {
  const ref = useRef();

  const [isHovered, setHovered] = useState(false);

  const [animatedProps, setAnimatedProps] = useSpring(() => {
    return {
      xys: [0, 0, 1],

      config: { mass: 10, tension: 400, friction: 40, precision: 0.00001 },
    };
  });

  return (
    <animated.div
      ref={ref}
      className='card'
      onMouseEnter={() => setHovered(true)}
      onMouseMove={({ clientX, clientY }) => {
        const x =
          clientX -
          (ref.current.offsetLeft -
            (window.scrollX || window.pageXOffset || document.body.scrollLeft));

        const y =
          clientY -
          (ref.current.offsetTop -
            (window.scrollY || window.pageYOffset || document.body.scrollTop));

        const dampen = 50;
        const xys = [
          -(y - ref.current.clientHeight / 2) / dampen,
          (x - ref.current.clientWidth / 2) / dampen,
          1.07,
        ];

        setAnimatedProps({ xys: xys });
      }}
      onMouseLeave={() => {
        setHovered(false);

        setAnimatedProps({ xys: [0, 0, 1] });
      }}
      style={{
        zIndex: isHovered ? 2 : 1,

        transform: animatedProps.xys.interpolate(
          (x, y, s) =>
            `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`
        ),
      }}
    >
      {children}
    </animated.div>
  );
}

function Particles({ children }) {
  return (
    <div style={{ position: 'relative' }}>
      {children && <div style={{ position: 'relative' }}>{children}</div>}
    </div>
  );
}

function Hero({ children }) {
  return (
    <div className='hero'>
      <div className='hero-body'>{children}</div>
    </div>
  );
}

function Image({ ratio, src }) {
  return (
    <div className='image-container'>
      <div className='image-inner-container'>
        <div
          className='ratio'
          style={{
            paddingTop: ratio * 100 + '%',
          }}
        >
          <div className='ratio-inner'>
            <img src={src} alt='img' />
          </div>
        </div>
      </div>
    </div>
  );
}

const cards = [
  {
    title: 'Best reviews in Warsaw ⚡️',
    description:
      'Dolor veniam aliquip laborum dolore magna incididunt dolore elit fugiat ut. Consectetur cupidatat nisi officia elit velit est voluptate reprehenderit est elit consectetur consectetur sint. Eu id voluptate officia elit dolore eu laborum mollit reprehenderit mollit cillum.',
    image: review,
    imageRatio: 360 / 360,
  },
  {
    title: 'Find a book and add to cart 📕',
    description:
      'Ipsum eiusmod incididunt qui occaecat. Culpa non et eiusmod sint eiusmod sint ullamco. Non labore est officia tempor anim minim officia. Sint velit officia et cillum laboris tempor magna duis ad dolor in voluptate pariatur. Cupidatat cupidatat excepteur sint ea commodo in consequat ipsum adipisicing ex ad officia ipsum consectetur.',
    image: book,
    imageRatio: 360 / 360,
  },
  {
    title: 'Fast & Secure delivery 🚀',
    description:
      'Quis irure laboris culpa consectetur ipsum minim Lorem elit eiusmod occaecat elit minim. Est aliquip cupidatat non officia duis. Quis cillum esse ad reprehenderit consequat culpa.',
    image: delivery,
    imageRatio: 360 / 360,
  },
];

export default HomePage;
