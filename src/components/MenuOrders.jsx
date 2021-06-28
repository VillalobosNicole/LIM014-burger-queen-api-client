import React from 'react'
import ButtonsHome from '../components/Buttons';
import { Link } from 'react-router-dom'



export default function Menu() {
  
    return (
        <div>
            <h1>Menu</h1>
            <ButtonsHome text="Desayuno"/>
            <Link to={'/waiter'}>
                <ButtonsHome text="Almuerzo"/>
            </Link>
           
            <ButtonsHome text="Cena"/>
        </div>
    )
    }