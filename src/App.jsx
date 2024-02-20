import { Items } from './components/Items/Items'
import { Header } from './components/Layouts/Header/Header'
import { Logo } from './components/Logo/Logo'
import Navbar from './components/Navbar/Navbar'
import { NotFound } from './components/NotFound/NotFound'
import { AboutMe } from './components/Pages/AboutMe/AboutMe'
import { Home } from './components/Pages/Home/Home'
import { useRoutes } from 'react-router-dom'


const AppRoutes = () => {
  let routes = useRoutes([
    { path: '/', element: <Home/>},
    { path: '/AboutMe', element: <AboutMe/>},
    { path: '*', element: <NotFound/>},

  ])
  return routes
}


function App() {

  return (
    <>
    <Header>
      <Logo/>
      <Navbar>
        <Items content = 'Incio' route = './' />
        <Items content = 'Acerca de mi' route = './AboutMe' />
        <Items content = 'Incio' route = './' />

      </Navbar>
    </Header>
    <AppRoutes/>
    </>
  )
}

export default App
