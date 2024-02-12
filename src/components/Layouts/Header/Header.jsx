import  React  from 'react';
import { Logo } from '../../Logo/Logo';
import { Navbar } from '../../Navbar/Navbar';

export const Header = ({children}) =>{
    return(
        <header>{children}</header>
    )
}