'use client'

import Button from '@/components/Button'
import { useState } from 'react'
import Globe from 'react-globe.gl'

const About = () => {
  const [hascopied, setHasCopied] = useState(false)
  const handleCopy = () => {
    navigator.clipboard.writeText(
      'rinshawork@gmail.com')
    setHasCopied(true)
    setTimeout(() => {
      setHasCopied(false)

    }, 1000)
  }
  return (
    <section className='c-space my-20'>
      <div className='grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-col-1 gap-5 h-full '>

        <div className='col-span-1 xl:row-span-3'>
          <div className='grid-container'>
            <img src='/assets/grid1.png'
              alt='grid-1'
              className='w-full sm:h-[276px] h-fit object-contain' />
            <div>
              <p className='grid-headtext'>Hi, I'm Rinshad</p>
              <p className='grid-subtext'>With 1 year of experience, I have honed my skill in frontend and backend ,with focus on the backend</p>


            </div>
          </div>

        </div>
        <div className='col-span-1 xl:row-span-3'>

          <div className='grid-container'>
            <img src='/assets/grid2.png' alt='grid2' className='w-full sm:h-[276px] h-fit object-contain' />

            <div className=''>
              <p className='grid-headtext'>
                Tech stack
              </p>
              <p className='grid-subtext'>
                I specialize in backend dev with a focus on the express and hono
              </p>
            </div>
          </div>

        </div>
        <div className='col-span-1 xl:row-span-4'>

          <div className='grid-container'>

            <div className='rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center'>

              <Globe
                height={326}
                width={326}
                backgroundColor='rgba(0,0,0,0)'
                backgroundImageOpacity={0.5}
                showAtmosphere
                showGraticules
                globeImageUrl='//unpkg.com/three-globe/example/img/earth-night.jpg'

                bumpImageUrl='//unpkg.com/three-globe/example/img/earth-topology.png'
                labelsData={[{}]}
              />
            </div>
            <div>
              <p className='grid-headtext'>
                I'm learning currently and whish to work anywhere i can move or entierely remote
              </p>

              <p className='grid-subtext'>
                i'm living in the India, with dreame of working as a backend dev
              </p>
              <Button name={'contact me'} isBeam containerClass={'w-full mt-10'}></Button>
            </div>
          </div>
        </div>

        <div className='xl:col-span-2 xl:row-span-3'>

          <div className='grid-container'>
            <img src={'/assets/grid3.png'} className='w-full sm:h-[266px] h-fit object-contain' />
            <div className=''>
              <p className='grid-headtext'>
                Reason for coding
              </p>
              <p className='grid-subtext'>
                I love creating things for money i don't like to lie that i'm doing for my passion , as long as i'm begginer any feild i wouldn't love it ,so trying to become more
                talented.

              </p>
            </div>
          </div>

        </div>
        <div className='xl:col-span-1 xl:row-span-2'>
          <div className='grid-container'>
            <img src='assets/grid4.png' className='w-full md:h-[126px] sm:h-[276] h-fit object-cover sm:object-top' />
            <div className='space-y-2'>

              <p className='grid-subtext text-center'>Dont' contact me </p>

              <div className='copy-container' onClick={handleCopy}>
                <img src={hascopied ? 'assets/tick.svg' : 'assets/copy.svg'} />
                <p className='lg:text-2xl md:text-xl font-medium text-gray_gradient text-white'>rinshadwork@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section >
  )
}

export default About
