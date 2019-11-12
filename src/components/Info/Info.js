import React from 'react';
import {settings} from '../../data/dataStore';
import Container from '../Container/Container';
import Hero from '../Hero/Hero.js';

const Info = () => (
  <Container>
    <Hero titleText={settings.info.title} titleImage={settings.info.image} />
    <p>{settings.info.content}</p>
  </Container>
);


export default Info;
