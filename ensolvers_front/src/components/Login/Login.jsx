// Style
import './Login.css';

// Librerias
import axios from 'axios';  // para comunicarme con la api
import { useNavigate, Link, Navigate } from 'react-router-dom';    // para cambiar de Router component





function Login() {

  const navigate = useNavigate(); // uso esto para incertar en la url nueva direccion

    // controla el envio del formulario, tengo que evitar reload y chequear validez de datos
    const submitHandler = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        console.log(email);
        console.log(password);

        const regexEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        if (!regexEmail.test(email)) {
            alert("Direcccion de correo electronico invalida");
            return
        }
        if (email !== 'email@prueba.com' | password !== 'ensolvers') {
            alert("Credenciales invalidas");
            return
        }
        // axios en post usa (<url de la api>, <objeto con info a enviar>)
        /*axios
            .post('http://localhost:8080/user', { email, password })
            //recibe una rta
            .then(res => {
                alert("Perfecto! Ingresaste sin problemas");
                const tokenRecibido = res.data.token; // obtengo el token de autenticacion de user
                sessionStorage.setItem('token', tokenRecibido);   // guardo el token en el storage de la web como ('<nombre>', <valor>)
                //session solo puede guardar strings, si tengo un array, object --> stringify y viceversa
                navigate('/active');
            })*/
    };



        // para bloquear el acceso sin estar loggeado anteriormente, redirige a home
        let token = sessionStorage.getItem('token');



  return (
      <>
        {token && <Navigate to='/active'/>}
        <form className="loginForm" onSubmit={submitHandler}>
          <label >Email/Usuario: </label>
          <input type="text" name='email' className='loginUser' placeholder='Email...' required/>
          <br /><br />
          <label >Contraseña: </label>
          <input type="password" name='password' className='loginPassword' placeholder='Contraseña...' required/>
          <br /><br />
          <button className='loginButton' type='submit'>Crear Nota</button>
          <button onClick={() => {alert("soy un alert")}}>Buscar</button>
        </form>
      </>
  );
}

export default Login;