'use client'
import { useRef, useState } from 'react'

const Contact = () => {
  const formRef = useRef()
  const [loading, setLoading] = useState(false)
  const [form, updateForm] = useState({
    name: '',
    email: '',
    message: '',
  })

  const handleChange = ({ target: { name, value } }) => {
    updateForm({ ...form, [name]: value })
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)
  }
  return (
    <section className='c-space m-20' id='contact'>
      <div className='relative min-h-screen flex items-center justify-center flex-col'>


        <h3 className='head-text'>Contact me </h3>
        <img src='/assets/terminal.png' alt='terminal' className='absolute inset-0 min-h-screen ' />

        <div className='contact-container'>
          <h3 className='head-text '> Let's talk</h3>
          <p className='text-lg text-white-600  mt-3'>
            I'm new into web dev i'm kind lazy . i work for earning . i won't lie . i like to presistent what ever the problem i'm facing i will fix it . so if you want a web dev that is affordable and reliable , i'm here
          </p>

          <form ref={formRef} onSubmit={handleSubmit} className='mt-12 flex flex-col space-y-7'>

            <lablel className='space-y-3'>
              <span className='field-label'>Full Name</span>
            </lablel>
            <input
              type='text'
              name='name'
              required
              onChange={handleChange}
              className='field-input'
              placeholder='jon doe'
              value={form.name} />
            <lablel className='space-y-3'>
              <span className='field-label'>Email</span>
            </lablel>
            <input
              type='email'
              name='email'
              required
              onChange={handleChange}
              className='field-input'
              placeholder='joedoe@gmai.com'
              value={form.email} />
            <lablel className='space-y-3'>
              <span className='field-label'>Your message</span>
            </lablel>
            <textarea
              name='message'
              required
              onChange={handleChange}
              className='field-input'
              placeholder='hi ,i want to.... '
              value={form.message} />

            <button className='field-btn' type='submit' disabled={loading}>
              {loading ? 'sending ...' : 'Send message'}
              <img src='/assets/arrow-up.png' className='field-btn' />
            </button>
          </form>
        </div>
      </div>


    </section>

  )
}

export default Contact
