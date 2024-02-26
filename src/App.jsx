import { Items } from './components/Items/Items'
import { Header } from './components/Layouts/Header/Header'
import { Logo } from './components/Logo/Logo'
import Navbar from './components/Navbar/Navbar'
import { NotFound } from './components/NotFound/NotFound'
import { Perfil } from './components/Pages/Perfil/Perfil'
import { Home } from './components/Pages/Home/Home'
import { useRoutes } from 'react-router-dom'


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
      <Logo/>
      <h1>Mari</h1>
      <Navbar>
        <Items content = 'Inicio' route = './' />
        <Items content = 'Pefil' route = './Perfil' />
        <Items content = 'Proyectos' route = './' />
        <Items content = 'Referencias' route = './' />
        <Items content = 'Experiencia' route = './' />
      </Navbar>
    </Header>
    <AppRoutes/>
    </>
  )
}

export default App
