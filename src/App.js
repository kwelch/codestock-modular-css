import React from 'react';
import Event from './Event';
import "./App.css";
import glamorous from 'glamorous';

const Container = glamorous.div({
  textAlign: 'right',
  color: 'white',
});

const Title = glamorous.h1({
  fontSize: '4rem',
  color: '#39C2C9',
});

const events = [
  {name: 'CodeStock'},
  {name: 'Nodevember'},
  {name: 'Music City Code'},
  {name: 'Scenic City Summit'},
  {name: 'Dev Space'},
]

const App = () => {
  return (
    <Container>
      <Title>Hello World!</Title>
      {events.map((event, key) => (
        <Event {...event} key={key}/>
      ))}
    </Container>
  );
};

export default App;
