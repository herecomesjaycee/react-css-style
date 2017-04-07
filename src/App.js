import React, { Component } from 'react';
import './DottedBox.css';
import styles from './DashedBox.css'
import styled from 'styled-components';

const divStyle = {
  margin: '40px',
  border: '5px solid pink'
};
const pStyle = {
  fontSize: '15px',
  textAlign: 'center'
};

const Box = () => (
  <div style={divStyle}>
    <p style={pStyle}>Get started with inline style</p>
  </div>
);

const DottedBox = () => (
  <div className="DottedBox">
    <p className="DottedBox_content">Get started with CSS styling</p>
  </div>
);

const DashedBox =() => (
  <div className={styles.container}>
    <p className={styles.content}>Get started with CSS Modules</p>
 </div>
);

const Div = styled.div`
  margin: 40px;
  border: 5px outset pink;

  &:hover{
    background-color: yellow;
  }
`;

const Paragraph = styled.p`
  font-size: 15px;
  text-align: center;
`;

const OutsetBox = () => (
  <Div>
    <Paragraph>Get started with styled-components 💅</Paragraph>
  </Div>
  );

class App extends Component {
  render() {
    return (
      <div className="App">
        <DottedBox></DottedBox>
        <Box></Box>
        <DashedBox></DashedBox>
        <OutsetBox></OutsetBox>
      </div>
       );
  }
}

export default App;
