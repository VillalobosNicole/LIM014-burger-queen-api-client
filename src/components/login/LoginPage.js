/* eslint-disable jsx-a11y/alt-text */
import { Fragment, useState, useEffect} from 'react';
import '../../assets/Login.css';
import { useHistory } from 'react-router-dom';

const axios = require ('axios');

const Login = () => {
const [data, setData] = useState({ 
  email: '',
  password: ''
})

const handleInputChange = (e) => {
  // console.log(e.target.value)
  setData({
    ...data, 
    [e.target.name] : e.target.value
  })
}
const getData = (e) => {
  e.preventDefault()
  
  const postRequestAuth = () => {

    const newSetData = {
      email: data.email,
      password: data.password
    }
    axios.post('auth', newSetData)
    .then(res => {
      console.log(res)
      localStorage.setItem('token', res.data.token);
    })
    .catch(err => {
      console.log(err)
    })
  }
  postRequestAuth();
}
let history = useHistory();

  return(
    <Fragment>
      <div className='section-login'>
        
          <div className="my-1">
            <button
              className="btnLogin"
              type="submit"
              
            >Login</button>
            <button
              className="btnLogin"
              type="submit"
            >Regístrate</button>
          </div>
          <div className="my-3">
           <h1 className="titleLogin">Bienvenidx</h1>
            <h3 className="subtitleLogin my-1">Ingresa a tu cuenta</h3>
          </div>
          <form onSubmit={getData} className='form-login'> 
          <div>
            <label className="labelEmail">Usuario</label><br></br>
            <input
              type="email"
              name= "email"
              onChange={handleInputChange}
              className="inputEmail"
            ></input>
          </div>
          <div className="my-2">
            <label className="labelPassword ">Contraseña</label><br></br>
            <input
            type="password"
            name= "password"
            onChange={handleInputChange}
            className="inputPassword"
            ></input>
          </div>
          <div>
            <button
              className="btnLogin my-2"
              type="submit"
              onClick={() => {
                history.push("/products");
              }}
            >Ok</button>
          </div>
          <button className="btnGoogle my-1">
            <img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"/>
            &nbsp; <p>Ingresa con google</p>
          </button>
          <p className="btn-text">Términos, condiciones y política de privacidad</p>
          <div>            
          </div>
        </form>
      </div>
    </Fragment>
  );
}

export default Login;




// export default function LoginPage() {
//   // const [count, setCount] = useState(0);

//   // De forma similar a componentDidMount y componentDidUpdate
//   useEffect(() => {
//     const data = {
//       email: "email@email.com" ,
//       password: "125345"
//     }
//     createToken(data).then((res)=> {
//       console.log(res)
//     })
//   });
//     return (
//         <div className="login-wrapper">
//         <h1>Please Log In</h1>
//         <form >
//           <label>
//             <p>Username</p>
//             <input type="text" />
//           </label>
//           <label>
//             <p>Password</p>
//             <input type="password" />
//           </label>
//           <div>
//             <button type="submit">Submit</button>
//           </div>
//         </form>
//       </div>
  
//     )
// }
