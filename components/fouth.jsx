import { Card, Overlay, Button } from '@mantine/core';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { SubTitle, Title } from './Title';
import Image from 'next/image';
import TextOverlay from './OverlayText';

  

export default function FourtSection() {
  return (

    <TextOverlay 
    title="Seu assistente jurídico com tecnologia de IA para maior eficiência e precisão."
    subTitle="O CorujaGPT revoluciona o mundo jurídico ao simplificar a criação de documentos, fornecer insights de especialistas e oferecer respostas precisas a questões jurídicas complexas. Com recursos avançados de pesquisa, serviços de tradução e acesso a jurisprudência atualizada, nossa IA atua como uma equipe de especialistas jurídicos ao seu alcance. Diga adeus às horas gastas em tarefas tediosas e abrace o futuro da assistência jurídica com o CorujaGPT."
    image='/bg-balanca.jpeg'
    element={ <Button variant="gradient" mt='sm' size='lg' gradient={{ from: 'red', to: 'purple', deg: 60 }}>Teste Gátis</Button>}
    />


   
    )
}
