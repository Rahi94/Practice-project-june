import { createUserWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { Form, Link } from 'react-router';
import { auth } from '../../firebase.init';
import { AuthContext } from '../../provider/AuthProvider';
import { GoogleAuthProvider } from "firebase/auth";

const Register = () => {
    
    const provider = new GoogleAuthProvider();
    const handleGoogleSignin = ()=>{

     signInWithPopup(auth, provider)
     .then((result)=>{
        console.log(result)
     })
     .catch(error =>{
        console.log(error)
     })
    }

    const info = useContext(AuthContext)
    console.log(info)

    const [errorMessage, setErrorMessage] = useState('')

const handleRegister = e =>{

    
  e.preventDefault();

  const name = e.target.name.value;
  const email = e.target.email.value;
  const password = e.target.password.value;
  console.log(name,email,password)


//   reset error message
setErrorMessage('')

//   create user with email and password
createUserWithEmailAndPassword(auth, email, password)

  .then(result=>{
    console.log(result.user)
  })
  .catch(error=>{
    console.log(error.message)
    setErrorMessage(error.message)
  })

}

    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col ">
                <div className="text-center lg:text-left">
                    <h1 className="text-3xl font-bold">Register now!</h1>

                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <div className="card-body">
                        <Form onSubmit={handleRegister} className="fieldset">
                            <label className="label">Name</label>
                            <input type="Name" name="name" className="input" placeholder="Your Name" />
                            <label className="label">Email</label>
                            <input type="email" name="email" className="input" placeholder="Email" />
                            <label className="label">Password</label>
                            <input type="password" name="password" className="input" placeholder="Password" />
                            
                            <button className="btn btn-secondary mt-4">Register</button>
                        </Form>

                        {
                            errorMessage && <p className='text-red-600'>{errorMessage}</p>
                        }
                        <p className='text-center'>Or Sign In Using </p>
                        <div className='flex gap-3'>
                            <button onClick={handleGoogleSignin} className='btn btn-success text-white'>Google</button>
                            <button className='btn btn-error text-white'>Github</button>
                            <button className='btn btn-primary'>Facebook</button>
                        </div>
                        <p className='ml-4 mb-4'>
                            Already have an account? Please <Link className='text-green-400 font-bold' to="/login">Login</Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;