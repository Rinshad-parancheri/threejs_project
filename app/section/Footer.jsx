import React from 'react'

const Footer = () => {
  return (
    <footer className='flex justify-between items-center flex-wrap gap-5  c-space pt-7 pb-3 border-t border-black-300'>
      <div className='text-white-500 flex gap-2'>
        <p >Terms & conditions</p>
        <p >|</p>
      </div>
      <div className='flex gap-3 '>
        <div className='social-icon'>
          <img src='/assets/github.svg' alt='github' className='w-1/2 h-1/2' />
        </div>
        <div className='social-icon'>
          <img src='/assets/twitter.svg' alt='github' className='w-1/2 h-1/2' />
        </div>
        <div className='social-icon'>
          <img src='/assets/instagram.svg' alt='github' className='w-1/2 h-1/2' />
        </div>
      </div>
      <p className='text-white-500 '> © 2024 Rinshad</p>
    </footer>
  )
}

export default Footer
