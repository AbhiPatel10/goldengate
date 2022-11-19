import React from 'react'

const SectionHeader = (props) => {
  return (
    <>
      {
        props.title ?
          <div className='section-header xs:mt-5 my-8 md:mt-20 mt-15 text-center flex justify-center'>
            <div>
              <p className='md:text-5xl text-2xl mb-2 Section-header-title'>{ props.title }</p>
            </div>
          </div>
          : ''
      }
    </>
  )
}

export default SectionHeader