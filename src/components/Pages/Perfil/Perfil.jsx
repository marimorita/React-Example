import React from 'react'
import "./Perfil.css"
import sena from '../../../assets/sena.png';
import { Logo } from '../../Logo/Logo';

export const Perfil = () => {
  return (
    <>
    <section className='description'>
<<<<<<< HEAD
      <div className='profileImage'>
        <img src={sena} alt="Perfil" className="perfil-image" />
        <h1>PERFIL</h1>
      </div>
=======
      <Logo content={sena} />
     <h1>PERFIL</h1>
>>>>>>> 84b0959974b95811e6352bb489ae1ad9f7ad4a1e
     <hr></hr>
     <p>El Lorem Ipsum fue concebido como un texto de relleno, formateado de una cierta
     manera para permitir la presentación de elementos gráficos en documentos, sin
     necesidad de una copia formal. El uso de Lorem Ipsum permite a los diseñadores reunir
     los diseños y la forma del contenido antes de que el contenido se haya creado, dando
     al diseño y al proceso de producción más libertad.</p>
     </section>
    </>
  )
}