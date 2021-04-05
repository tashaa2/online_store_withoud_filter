import React from 'react';
import { Picture } from "./Picture/Picture.jsx";
import { Text } from "./Text/Text.jsx";
import { BrowserRouter  } from 'react-router-dom'


export class Main extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <>
        <BrowserRouter >
          <Picture/>
          <Text/>           
        </BrowserRouter >
      </>      
    );
  }
}



