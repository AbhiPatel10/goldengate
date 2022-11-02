import React from 'react'

const SectionHeader = (props) => {
  return (
    <>
      {
        props.title ?
          <div className='section-header xs:mt-5 mt-12'>
            <div>
              <p className='text-4xl mb-2'>{ props.title }</p>
              <div className='section-header-lines'>
                <div className='line-1'></div>
                <div className='line-2'></div>
              </div>
            </div>
          </div>
          : ''
      }
    </>
  )
}

export default SectionHeader