import  React  from 'react';
import { Logo } from '../../Logo/Logo';
import { Navbar } from '../../Navbar/Navbar';
import "./Header.css"

export const Header = ({children}) =>{
    return(
        <>
        <header>{children}</header>
        </>
    )
}