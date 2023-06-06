import { Typography, Box, Card, Grid } from '@mui/material';
import Container from '@mui/material/Container';
import React from 'react';

function LandingPage() {
  return (
    <>
      <Container sx={{ background: 'black', height: '100%' }}>
        <Typography
          variant='h6'
          sx={{
            color: 'white',
            fontSize: { md: '45px' },
            textAlign: 'center',
            pt: 3,
          }}
        >
          Trustless Bridge
        </Typography>
        <Typography
          variant='h6'
          sx={{ color: 'white', fontSize: { md: '45px' }, textAlign: 'center' }}
        >
          Soroban Assets to Solana
        </Typography>
        <Box
          sx={{
            display: { md: 'flex', sm: 'grid', xs: 'grid' },
            pt: 5,
            justifyContent: { xs: 'center' },
          }}
        >
          <Box
            sx={{
              paddingLeft: { md: 5, sm: 0 },
              display: { xs: 'inline-grid' },
              justifyContent: { xs: 'center' },
            }}
          >
            <Card
              sx={{
                width: { md: 250, xs: 150 },
                height: { md: 250, xs: 150 },
                border: 1,
                borderRadius: 40,
                backgroundColor: 'transparent',
                borderColor: 'white',
                textAlign: 'center',
                pt: { md: 11, xs: 5.3 },
                // display: 'flex',
                // justifyContent: 'center',
                // alignItems: 'center',
              }}
            >
              <Box
                width={{ md: 25, sm: 30 }}
                height={{ md: 25, sm: 30 }}
                component='img'
                alt='soroban'
                src='steller.png'
              />
              <Typography sx={{ color: 'white' }}>Steller</Typography>
            </Card>
          </Box>
          <Box
            sx={{
              display: { xs: 'inline-grid' },
              justifyContent: { xs: 'center' },
            }}
          >
            <Card
              sx={{
                width: { md: 250, xs: 150 },
                height: { md: 250, xs: 150 },
                border: 1,
                borderRadius: 40,
                pt: { md: 11, xs: 5.3 },
                borderStyle: 'dashed',
                borderColor: '#EBFF00',
                backgroundColor: 'transparent',
                textAlign: 'center',
                // display: 'flex',
                // justifyContent: 'center',
                // alignItems: 'center',
              }}
            >
              <Box
                width={25}
                height={25}
                component='img'
                alt='soroban'
                src='SoroBan.png'
              />
              <Typography sx={{ color: 'white' }}>Soroban</Typography>
            </Card>
          </Box>

          <Box
            sx={{
              paddingLeft: { md: 10, sm: 1 },
              pt: { md: 10, xs: 3 },
              pb: { xs: 2 },
              display: { xs: 'flex', md: 'inline-block' },
              justifyContent: { xs: 'center' },
            }}
          >
            <Grid
              container
              sx={{
                width: { xs: '80%', md: '100%' },
                // top: 10,
                display: { xs: 'flex' },
                justifyContent: { xs: 'center' },
                padding: '8px',
                border: '1px solid white',
                borderTopLeftRadius: '30px',
                borderBottomLeftRadius: '30px',
                borderTopRightRadius: '30px',
                borderBottomRightRadius: '30px',
                // transform: 'translateX(-50%)'
              }}
            >
              <Grid item>
                <img src='/logo.png' alt='logo' width={130} height={30} />
              </Grid>
            </Grid>
          </Box>

          <Box sx={{ paddingLeft: {md:10,xs:1},
          
          display: { xs: 'inline-grid' },
          justifyContent: { xs: 'center' },
          }}>
            <Card
              sx={{
                border: 1,
                borderRadius: 40,
                borderStyle: 'dashed',
                borderColor: '#CD69E5',
                backgroundColor: 'transparent',
                textAlign: 'center',
                pt: 11,
                width: { md: 250, xs: 150 },
                height: { md: 250, xs: 150 },
                border: 1,
                borderRadius: 40,
                pt: { md: 11, xs: 5.3 },
                // display: 'flex',
                // justifyContent: 'center',
                // alignItems: 'center',
              }}
            >
              <Box
                width={25}
                height={25}
                component='img'
                alt='soroban'
                src='solana.png'
              />
              <Typography sx={{ color: 'white' }}>Solana</Typography>
            </Card>
          </Box>
        </Box>
      </Container>
    </>
  );
}

export default LandingPage;
