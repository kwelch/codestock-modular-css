import React from 'react';
// import styles from './Event.css';
import styled from 'styled-components';

const Container = styled.div`
  width: 200px;
  background: white;
  border: 2px solid #3d3d3d;
  text-align: left;
`;

const Name = styled.h1`
  color: black;
`;


const Event = ({name}) => (
  <Container>
    <Name>{name}</Name>
  </Container>
);

export default Event;
