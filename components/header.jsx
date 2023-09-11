import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import { ArrowForward } from '@mui/icons-material';
import Image from 'next/image';
import styles from '../styles/Header.module.css';

const pages = ['Products', 'Pricing', 'Blog'];

export default function Header() {
  // Your state and event handlers here...

  return (
    <AppBar className={styles.header} position="static">
      <Container maxWidth="100%">
        <Toolbar disableGutters>
          <Image width={170} height={100} style={{ objectFit: 'cover' }} src="/logo.png" />

          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            CorujaGPT
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            {/* Add a responsive menu button here */}
          </Box>

          <Typography
            variant="h5"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            CorujaGPT
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {/* Render navigation links here */}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Button style={{ fontFamily: '"Roboto","Helvetica","Arial",sans-serif;', color: '#fff' }}>
              Log in
            </Button>
            <Button
              style={{
                fontFamily: '"Roboto","Helvetica","Arial",sans-serif;',
                color: '#fff',
                background:
                  'linear-gradient(311deg, rgba(247,0,196,1) 0%, rgba(69,122,167,1) 100%)',
              }}
              endIcon={<ArrowForward />}
            >
              Sign in
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
