import { Items } from './components/Items/Items' 
import { Header } from './components/Layouts/Header/Header'
import { Logo } from './components/Logo/Logo'
import Navbar from './components/Navbar/Navbar'


import { useRoutes } from 'react-router-dom'            
import { Home } from './components/Pages/Home/Home'
import { Perfil } from './components/Pages/Perfil/Perfil'
import { NotFound } from './components/NotFound/NotFound'

import logo  from './assets/logo.jpg';
import logoSena from './assets/sena.png'


const AppRoutes = () => {
  let routes = useRoutes([
    { path: '/', element: <Home/>},
    { path: '/Perfil', element: <Perfil/>},
    { path: '*', element: <NotFound/>},
  ])
  return routes
}


function App() {

  return (
    <>
    <Header>
      <Logo content={logo}/>
      <h1>Mari Morita</h1>
      <Navbar>
        <Items content = 'Inicio' route = './' />
        <Items content = 'Perfil' route = './Perfil' />
        <Items content = 'Proyectos' route = './' />
        <Items content = 'Referencias' route = './' />
        <Items content = 'Experiencia' route = './' />
      </Navbar>
      <Logo content={logoSena}/>
    </Header>
     <AppRoutes/>  
    </>
  )
}

export default App
