import React from 'react'
import { Main } from '../../Layouts/Main/Main'
import { Perfil } from '../Perfil/Perfil'
import { Proyects } from '../Proyects/Proyects'
import { Cards } from '../../Cards/Cards'


export const Home = () => {
  return (
   < >
   <Main>
    <section className='sectionOne'>
    <Perfil />
    <p>El Lorem Ipsum fue concebido como un texto de relleno, formateado de una cierta
     manera para permitir la presentación de elementos gráficos en documentos, sin
     necesidad de una copia formal. El uso de Lorem Ipsum permite a los diseñadores reunir
     los diseños y la forma del contenido antes de que el contenido se haya creado, dando
     al diseño y al proceso de producción más libertad.</p>
    </section>

    <section className='sectionTwo'>
    <Proyects />
    <Cards/>
    <Cards/>
    <Cards/>
    </section>
   </Main>
   </>
  )
}