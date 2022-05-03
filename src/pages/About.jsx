import React from 'react'

function About() {
  return (
    <>
    <h1 className='text-6xl mb-4'>Github Finder</h1>
        <p className='mb-4 text-2xl font-light'>
        A React app to search GitHub profiles and see profile details. See my portfolio for more
        <strong>
          <a href='https://www.behance.net/jrivadeneira'> Jorge Rivadeneira</a>
        </strong>
        .
      </p>
      <p className='text-lg text-gray-400'>
        Version <span className='text-white'>1.0.0</span>
      </p>
      <p className='text-lg text-gray-400'>
        By <span>  </span>
        <a className='text-white' href='https://www.linkedin.com/in/jorge-rivadeneira/'>
        Jorge Rivadeneira
        </a>
      </p>        
    </>
  )
}

export default About