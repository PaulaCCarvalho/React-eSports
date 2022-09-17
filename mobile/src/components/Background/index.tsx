import React from 'react';
import { ImageBackground } from 'react-native';

import backgroundImg from '../../assets/background-galaxy.png';

import { styles } from './styles';

interface Props {
    children: React.ReactNode;
}

export function Background({children}: Props) {
  return (
    <ImageBackground 
        source={require('../../assets/background-galaxy.png')}
        defaultSource={backgroundImg}
        style={styles.container}
    >
        {children}
    </ImageBackground>
  );
}