import React from 'react'

export const Cards = ({img,tittle,text,link}) => {
  return (
    <>
    <div className='cards'>
        <img src={img} alt="" />
        <div className='textCard'>
            <h2>{tittle}</h2>
            <p>{text}</p>
            <a href={link}>Ir al proyecto</a>
        </div>
    </div>
    </>
  )
}
