import React from 'react'
import ButtonsHome from '../../components/Buttons';
import { Link } from 'react-router-dom'



export default function WaiterPage() {
  
    return (
        <div>
            <h1>Waiter View</h1>
            <Link to={'/MenuOrders'}>
                <ButtonsHome text="Pedidos"/>
            </Link>
           
            <ButtonsHome text="Lista de Pedidos"/>
      
            {/* <Products /> */}
        </div>
    )
    }
