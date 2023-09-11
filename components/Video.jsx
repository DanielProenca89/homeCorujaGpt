import React from 'react';
import 'video-react/dist/video-react.css';
import { Player } from 'video-react';
import { Card } from '@mantine/core';

export default function Video(props){
  return (
    <Card shadow='lg' w="80vw" h="80vh">
    <Player>
      <source src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4" />
    </Player>
    </Card>
  );
};