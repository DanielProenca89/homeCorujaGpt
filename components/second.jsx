import Video from './Video'
import { Card } from '@mantine/core';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { SubTitle, Title } from './Title';
import styles from '../styles/SecondSection.module.css'
import Image from 'next/image';


  

export default function SecondSection() {
  return (


<div style={{width:'100vw', height:'100vh', display:'grid',  justifyItems:'center', backgroundColor:'#edf2ff'}}>
<Title mt={'20px'}>Escolha sua área de atuação</Title>
<SubTitle>Conte com agentes personalizados para cada necessidade</SubTitle>
<div style={{display:'grid',gridTemplateColumns:'1fr 1fr 1fr auto', gap:'5px' ,width:'95%'}}>

<Card  shadow='sm'  style={{display:'grid', justifyItems:'center'}}>
<Image style={{borderRadius:'50px'}} width={60} height={60} src='/Assistente Civilista.png'/>
<SubTitle>Direito <br/>Civil</SubTitle>
</Card>

<Card  shadow='sm'  style={{display:'grid', justifyItems:'center'}}>
<Image style={{borderRadius:'50px'}} width={60} height={60} src='/Assistente Criminalista.png'/>
<SubTitle>Direito <br/>Criminal</SubTitle>
</Card>

<Card  shadow='sm'  style={{display:'grid', justifyItems:'center'}}>
<Image style={{borderRadius:'50px'}} width={60} height={60} src='/Assistente Trabalhista.png'/>
<SubTitle>Direito <br/>Trabalhista</SubTitle>
</Card>

<Card  shadow='sm' style={{display:'grid', justifyItems:'center'}}>
<Image style={{borderRadius:'50px'}} width={60} height={60} src='/Assistente Tributarista.png'/>
<SubTitle>Direito <br/>Tributário</SubTitle>
</Card>


<Card  shadow='sm' style={{display:'grid', justifyItems:'center'}}>
<Image style={{borderRadius:'50px'}} width={60} height={60} src='/Assistente Empresarial.png'/>
<SubTitle>Direito <br/>Empresarial</SubTitle>
</Card>


<Card  shadow='sm' style={{display:'grid', justifyItems:'center'}}>
<Image style={{borderRadius:'50px'}} width={60} height={60} src='/Assistente Administrativo.png'/>
<SubTitle>Direito <br/>Administrativo</SubTitle>
</Card>

</div>

</div>
   
    )
}
