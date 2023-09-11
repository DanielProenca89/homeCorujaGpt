import { useState } from 'react';
import {Title, SubTitle} from './Title'
import { Button, Overlay, Image, AspectRatio } from '@mantine/core';

export default function TextOverlay({title, subTitle, image, element}) {

  return (
    <>
      <AspectRatio ratio={16 / 9} maw={'100vw'} mx="auto">
        <Image src={image} />
        <Overlay color="#000" opacity={0.85} />
        <div style={{width:'100vw', height:'100vh',marginTop:'1em', gridTemplateColumns: '1fr', display:'grid',  justifyItems:'center'}}>
        <div style={{ display: "flex", flexWrap: 'wrap', justifyContent: 'center', alignContent: "center" }}>
                <div style={{ display: "grid", zIndex:200,flexWrap: 'wrap', justifyItems: 'center', width: "70%", paddingTop: {md:'1em', xs:'10px'} }}>
                <Title color="#fff">{title}</Title> 
                
                <SubTitle color="#fff">{subTitle}</SubTitle> 
                {element}  
        </div>
        </div>
        </div>
      </AspectRatio>
    </>
  );
}