import React from 'react'
import sena from '../../assets/sena.png';
import "./Tittle.css" 


export const Tittle = ({tittle}) => {
  return (
    <>
    <div className='profileImage'>
    <img src={sena} alt="Perfil" className='imgTittle' />
    <h1>{tittle}</h1>
  </div>
  <hr></hr>
    </>
  )
}
