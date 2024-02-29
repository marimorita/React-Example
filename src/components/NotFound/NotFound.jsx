import React from 'react'
import error from '../../assets/error.png'
import './NotFound.css'

export const NotFound = () => {
  return (
    <>
    <section className='error404'>
    <img src={ error } alt="404" />
    </section>
    </>
  )
}
