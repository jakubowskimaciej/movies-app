import React from 'react';
import { Wrapper } from './InfoWrapper.styles';
import { Title } from 'components/atoms/Title/Title';

const InfoWrapper = ({ name }) => (
  <Wrapper>
    <Title as="h2">{name}</Title>
    <p>movies</p>
  </Wrapper>
);

export default InfoWrapper;
