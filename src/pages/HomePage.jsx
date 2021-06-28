// import axios from 'axios'
import React from 'react'
import ButtonsHome from '../components/Buttons';
import { Link } from 'react-router-dom'



export default function HomePage() {
  
    return (
        <div>
            <h1>HomePage</h1>
            <ButtonsHome text="Administrador"/>
            <Link to={'/waiter'}>
                <ButtonsHome text="Mesero"/>
            </Link>
           
            <ButtonsHome text="Cocina"/>
            {/* <Products /> */}
        </div>
    )
    }