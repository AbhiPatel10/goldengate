import React from 'react'

const SectionHeader = (props) => {
  return (
    <>
      {
        props.title ?
          <div className='section-header xs:mt-5 my-8'>
            <div>
              <p className='md:text-4xl text-2xl mb-2 flex justify-center font-semibold Section-header-title'>{ props.title }</p>
              <div className='section-header-lines'>
                <div className='line-1'></div>
              </div>
            </div>
          </div>
          : ''
      }
    </>
  )
}

export default SectionHeader