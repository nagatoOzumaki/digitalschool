import { Box, Link, Paper, Typography } from '@mui/material';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Background from '../public/images/background.jpg';
import Back from '../public/images/back.jpg';
import Image1 from '../public/images/1.png';
import Poster from '../public/images/Poster.png';

import Image2 from '../public/images/2.png';
// import Vedio from '../public/vedios/vedio.mp4';
import Image3 from '../public/images/3.png';
// import Player from 'video-react';
import Image4 from '../public/images/4.png';
import ReactPlayer from 'react-player';
import { useEffect, useState } from 'react';
import MyAppBar from '../components/MyAppBar';
import Footer from '../components/Footer';
import { Container } from '@mui/system';
import { Player } from 'video-react';
import {
  Facebook,
  Instagram,
  LinkedIn,
  Mail,
  Phone,
  ShoppingBag,
  WhatsApp,
} from '@mui/icons-material';

const Home = () => {
  return (
    <div sx={{ height: 3000 }}>
      <Head>
        <title>Create Next App</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <MyAppBar />
      {/* <Container
        sx={{
          p: 3,
          height: 600,
          m: 3,
          backgroundImage: `url(${Background.src})`,
          backgroundRepeat: 'no-repeat',
        }}
      >
        {' '}
        {/* <Image src={Background} alt='back' /> */}
      {/* <Paper elevation={3} sx={{ width: 300, height: 60 }}>
          Join us In Digital school
        </Paper> */}
      {/* <Fab size='large'>Join us</Fab> */}
      {/* </Container> */}
      <Paper
        elevation={3}
        sx={{
          position: 'absolute',

          left: 0,
          width: 360,
          height: 3000,
          p: 10,
        }}
      >
        <Box
          sx={{
            position: 'sticky',
            top: 100,
            display: 'flex',
            flexDirection: 'column',
            gap: 5,
          }}
        >
          <Typography sx={{ fontWeight: 'bold', ml: -4, fontSize: 18 }}>
            Nos plateformes digitales
          </Typography>
          <Link
            sx={{
              display: 'flex',
              alignItems: 'center',
              fontWeight: 'bold',
              gap: 1,
            }}
          >
            School Shoppify
            <ShoppingBag />
          </Link>
          <Link
            sx={{
              display: 'flex',
              alignItems: 'center',
              fontWeight: 'bold',
              gap: 1,
            }}
          >
            Facebook
            <Facebook />
          </Link>
          <Link
            sx={{
              display: 'flex',
              alignItems: 'center',
              fontWeight: 'bold',
              gap: 1,
            }}
          >
            Instagram
            <Instagram />
          </Link>
          <Link
            sx={{
              display: 'flex',
              alignItems: 'center',
              fontWeight: 'bold',
              gap: 1,
            }}
          >
            WhatsaApp
            <WhatsApp />
          </Link>
          <Link
            sx={{
              display: 'flex',
              alignItems: 'center',
              fontWeight: 'bold',
              gap: 1,
            }}
          >
            Telephone Fix
            <Phone />
          </Link>
          <Link
            sx={{
              display: 'flex',
              alignItems: 'center',
              fontWeight: 'bold',
              gap: 1,
            }}
          >
            Gmail
            <Mail />
          </Link>
          <Link
            sx={{
              display: 'flex',
              alignItems: 'center',
              fontWeight: 'bold',
              gap: 1,
            }}
          >
            Linked In <LinkedIn />
          </Link>
        </Box>
      </Paper>
      <Container
        sx={{
          pt: 3,
          pb: 4,
          marginRight: 30,

          // m: 3,
          // backgroundImage: `url(${Image1.src})`,
          // backgroundRepeat: 'no-repeat',
        }}
      >
        {/* https://youtu.be/VPyi4ZTHvio     https://youtu.be/uOYMr3Ukkac */}
        {/* <Image alt='alt' width={1500} src={Poster} /> */}
        {/* <vedio autoPlay style={{ width: '500px', height: '500px' }}>
          <source
            src='https://youtu.be/VPyi4ZTHvio'
            type='video/mp4'
            width={1000}
          />
        </vedio> */}
        {/* <CardMedia
          component='video'
          image={'https://youtu.be/VPyi4ZTHvio'}
          autoPlay
        /> */}
        {/* <Player
          playsInline
          poster='/assets/poster.png'
          src='https://www.youtube.com/watch?v=VPyi4ZTHvio'
          width={1500}
          height={1000}
        /> */}
        {/* <Image alt='alt' src={Image1} />
        <Image alt='alt' src={Image2} />
        <Image alt='alt' src={Image3} /> */}
        <Image alt='alt' width={1500} height={1000} src={Background} />{' '}
        <ReactPlayer
          width={1150}
          height={1000}
          playing={true}
          url='https://youtu.be/uOYMr3Ukkac '
        />
      </Container>
      {/* <Footer /> */}
    </div>
  );
};

export default Home;
