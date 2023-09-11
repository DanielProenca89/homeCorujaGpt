import Video from './Video'
import { Card } from '@mantine/core';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { SubTitle, Title } from './Title';
import styles from '../styles/SecondSection.module.css'
import Image from 'next/image';


  

export default function ThirdSection() {
  return (


<div style={{width:'100vw', height:'100vh',marginTop:'1em', gridTemplateColumns: '1fr', display:'grid',  justifyItems:'center', backgroundColor:'#edf2ff'}}>

<Video/>
</div>

   
    )
}
