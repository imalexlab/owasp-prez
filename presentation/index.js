// Import React
import React from 'react';

// Import Spectacle Core tags
import {
  Deck,
  Heading,
  Image,
  List,
  ListItem,
  Link,
  Slide,
  Text,
  S,
} from 'spectacle';

// Import theme
import createTheme from 'spectacle/lib/themes/default';

const images = {
  bigbru: require('../assets/bigbru.png'),
  owasplogo: require('../assets/owasplogo.png'),
  formidagon: require('../assets/formidable-logo.svg'),
};

// Require CSS
require('normalize.css');

const theme = createTheme(
  {
    primary: '#fffcff',
    secondary: '#2c363f',
    tertiary: '#2274a5',
    quaternary: '#e75a7c',
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
          <Image src={images.owasplogo} width={150} />
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
        <Slide transition={['spin']} bgColor="secondary">
          <Heading size={2} textColor="tertiary" caps>
            OPEN
          </Heading>
        </Slide>
        <Slide transition={['spin']} bgColor="secondary">
          <Heading size={2} textColor="primary" caps>
            WEB
          </Heading>
        </Slide>
        <Slide transition={['spin']} bgColor="secondary">
          <Heading size={2} textColor="quaternary" caps>
            APPLICATION
          </Heading>
        </Slide>
        <Slide transition={['spin']} bgColor="secondary">
          <Heading size={2} textColor="tertiary" caps>
            SECURITY
          </Heading>
        </Slide>
        <Slide transition={['spin']} bgColor="secondary">
          <Heading size={2} textColor="primary" caps>
            PIZZA 🍕
          </Heading>
        </Slide>
        <Slide transition={['spin']} bgColor="secondary">
          <Heading size={2} textColor="quaternary" caps>
            PIZZA ?
          </Heading>
        </Slide>
        <Slide transition={['spin']} bgColor="secondary">
          <Heading size={2} textColor="tertiary" caps>
            <S type="strikethrough">PIZZA</S>
          </Heading>
        </Slide>
        <Slide transition={['spin']} bgColor="secondary">
          <Heading size={2} textColor="primary" caps>
            🔥PROJECT🔥
          </Heading>
        </Slide>
        <Slide transition={['spin']} bgColor="primary">
          <Heading size={2} textColor="quaternary" caps>
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
            Build around Core Values
          </Heading>
          <List>
            <ListItem bulletStyle="star">OPEN</ListItem>
            <ListItem bulletStyle="star">INNOVATION</ListItem>
            <ListItem bulletStyle="star">GLOBAL</ListItem>
            <ListItem bulletStyle="star">INTEGRITY</ListItem>
          </List>
        </Slide>
        <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps>
            Alright alright, but what are you doing ?
          </Heading>
          <List>
            <ListItem bulletStyle="1f441">
              Make software security visible
            </ListItem>
            <ListItem bulletStyle="1f4a1">
              Help organizations to conceive, develop, acquire, operate, and
              maintain applications that can be trusted
            </ListItem>
            <ListItem bulletStyle="1f6e0">Develop tools</ListItem>
          </List>
        </Slide>
        <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps>
            Who cares ?
          </Heading>
          <Text margin="20px 0 0" textColor="tertiary" fit bold>
            IEEE, NSA 👁, ANSSI, BSI, W3C, AND...
          </Text>
        </Slide>
        <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps>
            You should care too, you know why ?
          </Heading>
          <Link
            target="_blank"
            rel="noopener noreferrer"
            href="https://latesthackingnews.com/category/cyber-security-news/"
          >
            💻
          </Link>
        </Slide>
        <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps>
            OWASP is here to help you to understand all this gibberish
          </Heading>
          <Text margin="20px 0 0" textColor="tertiary" fit bold>
            <Link
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.owasp.org/index.php/Category:OWASP_Project#tab=Project_Inventory"
            >
              We have projects !
            </Link>
          </Text>
          <Text margin="20px 0 0" textColor="tertiary" fit bold>
            <Link
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.owasp.org/index.php/Category:How_To"
            >
              Ressources to learn and try about web applications vulnerabilities
            </Link>
          </Text>
        </Slide>
        <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps>
            Get involved !
          </Heading>
          <Text margin="20px 0 0" textColor="tertiary" fit bold>
            <Link
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.owasp.org/index.php/OWASP_Chapter"
            >
              Join you local chapter
            </Link>
          </Text>
        </Slide>
        <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps>
            Have questions ?
          </Heading>
          <Text margin="20px 0 0" textColor="tertiary" fit bold>
            <Link
              target="_blank"
              rel="noopener noreferrer"
              href="https://owasp.slack.com/join/shared_invite/enQtNjExMTc3MTg0MzU4LTViMDg1MmJiMzMwZGUxZjgxZWQ1MTE0NTBlOTBhNjhhZDIzZTZiNmEwOTJlYjdkMzAxMGVhNDkwNDNiNjZiOWQ"
            >
              Join the slack channel and get answers from security enthousiast
              to security experts !
            </Link>
          </Text>
        </Slide>
        <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps>
            And remember
          </Heading>
        </Slide>
        <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
          <Image src={images.bigbru} width={400} />
        </Slide>
      </Deck>
    );
  }
}
