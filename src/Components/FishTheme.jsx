import React from 'react';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';

const FishTheme = () => {
  const particlesInit = async (main) => {
    console.log(main);
    await loadFull(main);
  };
  const particlesLoaded = (container) => {
    console.log(container);
  };
  return (
    <div className='bg-blue-800 '>
      <Particles
        id='tsparticles'
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          fullScreen: {
            enable: true,
            zIndex: 0,
          },
          background: {
            color: '#223233',
            size: '100% 100%',
            repeat: 'no-repeat',
          },
          detectRetina: true,
          particles: {
            move: {
              bounce: false,
              direction: 'right',
              enable: true,
              outMode: 'out',
              random: false,
              speed: 3,
              straight: true,
            },
            number: {
              density: {
                enable: true,
                area: 300,
              },
              limit: 0,
              value: 80,
            },
            shape: {
              character: {
                fill: false,
                font: 'Verdana',
                style: '',
                value: '*',
                weight: '400',
              },
              image: [
                {
                  src: '/fish-svgrepo-com (1).svg',
                  width: 32,
                  height: 32,
                },
                {
                  src: '/fish-svgrepo-com (2).svg',
                  width: 32,
                  height: 32,
                },
                {
                  src: '/fish-svgrepo-com (3).svg',
                  width: 32,
                  height: 32,
                },
                {
                  src: '/fish-svgrepo-com (4).svg',
                  width: 32,
                  height: 32,
                },
                {
                  src: '/fish-svgrepo-com (5).svg',
                  width: 32,
                  height: 32,
                },
                {
                  src: '/fish-svgrepo-com (6).svg',
                  width: 32,
                  height: 32,
                },
                {
                  src: '/fish-svgrepo-com (7).svg',
                  width: 32,
                  height: 32,
                },
                {
                  src: '/fish-svgrepo-com (8).svg',
                  width: 32,
                  height: 32,
                },
                {
                  src: '/fish-svgrepo-com (9).svg',
                  width: 32,
                  height: 32,
                },
                {
                  src: '/fish-svgrepo-com (10).svg',
                  width: 32,
                  height: 32,
                },
                {
                  src: '/fish-svgrepo-com (11).svg',
                  width: 32,
                  height: 32,
                },
                {
                  src: '/fish-svgrepo-com (12).svg',
                  width: 32,
                  height: 32,
                },
                {
                  src: '/fish-svgrepo-com (13).svg',
                  width: 32,
                  height: 32,
                },
                {
                  src: '/fish-svgrepo-com (14).svg',
                  width: 32,
                  height: 32,
                },
              ],
              type: 'image',
            },
            size: {
              random: true,
              value: 18,
            },
          },
        }}
      />
    </div>
  );
}
export default FishTheme;