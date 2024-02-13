import React from 'react'
import Navbar from '../../Navbar/Navbar'
import { Header } from '../../Layouts/Header/Header'
import { Items } from '../../Items/Items'
import { Logo } from '../../Logo/Logo'


export const Home = () => {
  return (
    <Header>
      <Logo/>
        <Navbar>
            <Items content =" Mari :p "/>
            <Items content =" Muaki "/>
        </Navbar>
    </Header>
  )
}
