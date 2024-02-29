import { useState } from 'react'

import { Home } from './components/Pages/Home/Home'
import { Perfil } from './components/Pages/Perfil/Perfil'

import { Header } from './components/Layouts/Header/Header'
import { Logo } from './components/Logo/Logo'
import { Navbar } from './components/Navbar/Navbar'
import { Items } from './components/Items/Items' 
import { SocialMedia } from './components/SocialMedia/SocialMedia' 

import { NotFound } from './components/NotFound/NotFound'
import logo  from './assets/logo.jpg';
import logoSena from './assets/sena.png'

import { Main } from './components/Layouts/Main/Main'


const AppRoutes = () => {
  let routes = useRoutes ([
    { path:"/", element: <Home />},
    { path:"/*", element: <NotFound />},
  ])
  return routes
}


function App() {
  const [count, setCount] = useState(0)
  return (
    <>
    <Header>
      <Logo content={logo}/>
      <h1>Mari Morita</h1>
      <hr />
      <Navbar>
        <Items content = 'Inicio' route = './' />
        <Items content = 'Perfil' route = './Perfil' />
        <Items content = 'Proyectos' route = './' />
        <Items content = 'Referencias' route = './' />
        <Items content = 'Experiencia' route = './' />
      </Navbar>
      <Logo content={logoSena}/>
      <SocialMedia />
    </Header>
    <Logo content={logoSena}/>
     <AppRoutes/>

     <AppRoutes/>  

    </>
  )
}

export default App
