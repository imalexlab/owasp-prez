// Import React
import React from 'react';

// Import Spectacle Core tags
import {
  BlockQuote,
  Cite,
  Deck,
  Heading,
  Image,
  List,
  ListItem,
  Notes,
  Quote,
  Slide,
  Text,
  S,
} from 'spectacle';

// Import theme
import createTheme from 'spectacle/lib/themes/default';

const images = {
  formidagon: require('../assets/formidable-logo.svg'),
  goodWork: require('../assets/good-work.gif'),
};

// Require CSS
require('normalize.css');

const theme = createTheme(
  {
    primary: 'white',
    secondary: '#1F2022',
    tertiary: '#03A9FC',
    quaternary: '#CECECE'
  },
  {
    primary: 'Helvetica',
    secondary: 'Montserrat',
  }
);

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck
        transition={['zoom', 'slide']}
        transitionDuration={500}
        theme={theme}
      >
        <Slide transition={['zoom']} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            OWASP Foundation
          </Heading>
          <Text margin="20px 0 0" textColor="tertiary" fit bold>
            Security Application for everyone
          </Text>
        </Slide>
        <Slide transition={['zoom']} bgColor="primary">
          🎶
          <Text margin="20px 0 0" textColor="tertiary" fit bold>
            Imagine they hack you, I do
          </Text>
          <Text margin="20px 0 0" textColor="tertiary" fit bold>
            I think about it day and night, it's only right
          </Text>
          <Text margin="20px 0 0" textColor="tertiary" fit bold>
            To think 'bout how you got hacked and felt so trapped
          </Text>
          <Text margin="20px 0 0" textColor="tertiary" fit bold>
            So let's learn together
          </Text>
          🎶
        </Slide>
        <Slide transition={['zoom']} bgColor="primary">
          <Heading size={2} textColor="secondary" caps>
            OWhut ?
          </Heading>
        </Slide>
        <Slide transition={['spin']} bgColor="primary">
          <Heading size={2} textColor="secondary" caps>
            OPEN
          </Heading>
        </Slide>
        <Slide transition={['spin']} bgColor="primary">
          <Heading size={2} textColor="secondary" caps>
            WEB
          </Heading>
        </Slide>
        <Slide transition={['spin']} bgColor="primary">
          <Heading size={2} textColor="secondary" caps>
            APPLICATION
          </Heading>
        </Slide>
        <Slide transition={['spin']} bgColor="primary">
          <Heading size={2} textColor="secondary" caps>
            SECURITY
          </Heading>
        </Slide>
        <Slide transition={['spin']} bgColor="primary">
          <Heading size={2} textColor="secondary" caps>
            PIZZA 🍕
          </Heading>
        </Slide>
        <Slide transition={['spin']} bgColor="primary">
          <Heading size={2} textColor="secondary" caps>
            PIZZA ?
          </Heading>
        </Slide>
        <Slide transition={['spin']} bgColor="primary">
          <Heading size={2} textColor="secondary" caps>
            <S type="strikethrough">PIZZA</S>
          </Heading>
        </Slide>
        <Slide transition={['spin']} bgColor="primary">
          <Heading size={2} textColor="secondary" caps>
            🔥PROJECT🔥
          </Heading>
        </Slide>
        <Slide transition={['spin']} bgColor="primary">
          <Heading size={2} textColor="secondary" caps>
            ✨Open Web Application Security Project✨
          </Heading>
        </Slide>
        <Slide transition={['slide']} bgColor="primary">
          <List>
            <ListItem>Since 1st December 2001</ListItem>
            <ListItem>Worldwide</ListItem>
            <ListItem>Not-for-profit charitable organization</ListItem>
            <ListItem>Open and collaborative community</ListItem>
          </List>
        </Slide>
        <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps>
            Standard List
          </Heading>
          <List>
            <ListItem bulletStyle="star">Item 1</ListItem>
            <ListItem bulletStyle="cross">Item 2</ListItem>
            <ListItem>Item 3</ListItem>
            <ListItem>Item 4</ListItem>
          </List>
        </Slide>
        <Slide transition={['fade']} bgColor="secondary" textColor="primary">
          <BlockQuote>
            <Quote>Example Quote</Quote>
            <Cite margin="10px 0 0 30px">Author</Cite>
          </BlockQuote>
        </Slide>
        <Slide>
          <Image src={images.goodWork} width={500} />
          <Notes>gifs work too</Notes>
        </Slide>
      </Deck>
    );
  }
}

/* <Slide bgColor="secondary">
          <Image src={images.formidagon} width={200} />
        </Slide>
        <Slide transition={['fade']} bgColor="tertiary">
          <Heading size={6} textColor="primary" caps>
            Typography
          </Heading>
          <Heading size={1} textColor="secondary">
            Heading 1
          </Heading>
          <Heading size={2} textColor="secondary">
            Heading 2
          </Heading>
          <Heading size={3} textColor="secondary">
            Heading 3
          </Heading>
          <Heading size={4} textColor="secondary">
            Heading 4
          </Heading>
          <Heading size={5} textColor="secondary">
            Heading 5
          </Heading>
          <Text size={6} textColor="secondary">
            Standard text
          </Text>
        </Slide> */
