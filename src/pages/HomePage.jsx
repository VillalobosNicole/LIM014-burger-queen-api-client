import axios from 'axios'
import React from 'react'



export default function HomePage() {


        axios.get('user')
        .then(res => {
            console.log(res)
        },
        err => {
            console.log(err);
        }
        );


    return (
        <div>
            <h1>HomePage</h1>
        </div>
    )
    };
