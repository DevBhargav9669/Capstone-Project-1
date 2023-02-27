import React from 'react'
//import './App.css';
//import profile from "./image/dm-profile.jpg";
//import mail from "./image/mailimg.png";
//import password from "./image/password.jpg";

const Loginform =() =>{
  return (
    <div className='main'>
        <div className='sub-main'>
          <div>
            <div className='imgs'>
              <div className='container-image'>
                <img src="./images/dm-profile.jpg"  alt="" className='profile'/>

              </div>
              </div>
              <div>
                <h1>Login Page</h1>
                <div>
                  <img src="./images/mailimg.png" alt="email" className='email'/>
                  <input type="text" placeholder='username' className='name'/>
                </div>
                <div className='second-input'>
                  <img src="./images/psw.jpg" alt="password" className='email'/>
                  <input type="password" placeholder='password' className='name'/>
                </div>
                <div className='login-button'>
                <button>Login</button>
                </div>
                <p className='link'>
                    <a href= "#" >Forgot password?</a> or <a href="#">Sign Up</a>
                  </p>
                
              </div>

          </div>
            
        </div>
      
    </div>
  )
}

export default Loginform
