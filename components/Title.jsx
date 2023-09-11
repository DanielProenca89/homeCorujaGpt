import { styled } from '@mui/material/styles';

export const Title = styled('div')(({ theme, color,mt }) => ({
    ...theme.typography.h2,
    fontSizeAdjust: 'from-font',
    backgroundColor: 'transparent',
    color: color?color:'#000',
    textAlign: "center",
    marginTop: mt?mt:'14vh',
    fontWeight: '10px',
  
    padding: theme.spacing(1),
    '@media (max-width: 600px)': {
      fontSize: '2rem', // Adjust the font size for smaller screens,
      padding:'0px',
      marginBottom:'12px',
    },
  }));

export const SubTitle = styled('div')(({ theme, color, pt }) => ({
    ...theme.typography.h5,
    backgroundColor: 'transparent',
    color: color?color:'#000',
    textAlign: "center",
    padding: theme.spacing(10),
    paddingTop: pt?pt:'1em',
    paddingBottom: '15px',
    fontWeight: 'normal',

    '@media (max-width: 600px)': {
      fontSize: '1rem', 
      textAlign:'center',
      padding:'0px'
    },
  }));
  
