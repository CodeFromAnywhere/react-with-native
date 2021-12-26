import * as React from "react";
import { Div, Image } from 'react-with-native';

const ImageScreen = () => {
  return (
    <Div className={"flex absolute inset-0 justify-center items-center"}>
      <Image 
        src={require('../../assets/kawaii.png')}
        width={40} height={40}
        native={{ source: require('../../assets/kawaii.png'), resizeMode:"repeat"}}/>
    </Div>
  );
}

export default ImageScreen;