'use client'
import Button from '@/components/Button';
import CanvasLoader from '@/components/CanvasLoader';
import Cube from '@/components/Cube';
import HackerRoom from '@/components/HackerRoom';
import HeroCamera from '@/components/HeroCamera';
import Logo from '@/components/ReactLogo';
import Rings from '@/components/Ring';
import Target from '@/components/Target';
import { calculateSizes } from '@/constants/constant';
import { PerspectiveCamera } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import { useMediaQuery } from 'react-responsive';

const Hero = () => {

  const isSmall = useMediaQuery({ maxWidth: 480 })
  const isMobile = useMediaQuery({ maxWidth: 768 })
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 })

  const sizes = calculateSizes(isSmall, isMobile, isTablet)

  return (
    <section className="min-h-screen min-w-full flex flex-col relative" id="home">

      <div className='w-full mx-auto sm:mt-36 mt-20 c-space gap-3'>
        <p className='sm:text-3xl text-xl font-medium text-white text-center font-generalsans'>
          Hi, i'm rinshad
          <span className='waving-hand'> 👋</span>
        </p>
        <p className='hero_tag text-gray_gradient'>
          Bulding Products & Brands
        </p>
      </div>
      <div className='w-full h-full absolute inset-0'>
        <Canvas className='w-ful h-full '>
          <Suspense fallback={<CanvasLoader />}>

            <PerspectiveCamera makeDefault
              position={[0, 0, 20]} />
            <HeroCamera isMoblile={isMobile}>
              <HackerRoom
                rotation={[0, -Math.PI, 0]}
                scale={sizes.deskScale}
                position={sizes.deskPosition}
              />
            </HeroCamera>
            <group>
              <Target position={sizes.targetPosition} />
              <Logo position={sizes.reactLogoPosition} />
              <Cube position={sizes.cubePosition} />
              <Rings position={sizes.ringPosition} />
            </group>
            <ambientLight intensity={1} />
            <directionalLight position={[10, 10, 10]} intensity={0.5} />

          </Suspense>
        </Canvas>
      </div>
      <div className='absolute bottom-7 left-0 right-0 w-full z-10  c-space'>

        <a href='#contact' className='w-fit'>
          <Button name="let's work together" isBeam containerClass='sm:w-fit w-full sm:min-w-96' />
        </a>
      </div>
    </section>
  )
}

export default Hero
