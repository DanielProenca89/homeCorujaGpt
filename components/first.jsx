import Button from '@mui/material/Button';
import styles from '../styles/FirstSection.module.css'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import {Title, SubTitle} from './Title'


export default function FirstSection() {
  return (
    <div className={styles.container}>
      <div style={{display:'grid'}}>
        <div style={{ display: "flex", flexWrap: 'wrap', justifyContent: 'center', alignContent: "center" }}>
          <div style={{ display: "grid", flexWrap: 'wrap', justifyItems: 'center', width: "70%", paddingTop: {md:'1em', xs:'10px'} }}>
            <Title color={"#fff"}>Desbloqueie o poder da IA no mundo jurídico com o CorujaGPT.</Title>
            <SubTitle color="#fff">Diga adeus às horas gastas com documentos e dê as boas-vindas a uma nova era de eficiência e precisão. O CorujaGPT é seu maior aliado, fornecendo petições otimizadas, contratos e orientação especializada em várias áreas do direito. Com pesquisas ampliadas, audiências traduzidas e jurisprudência precisa na ponta dos dedos, o futuro jurídico está a apenas um toque de distância.</SubTitle>
            <Button variant="contained" sx={{ padding: {md:'25px', xs:'10px'}, marginTop:'1em',borderRadius: '20px', width: {md:"60%", xs:'100%'}, fontSize: {md:'20px', xs:'15px'} }} textAlign='center'>Experimente o futuro do direito agora</Button>
          </div>
        </div>
      </div>
    </div>
  )
}
