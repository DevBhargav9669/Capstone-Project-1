import React from 'react'

const Signup = () => {
  return (
    <div className='main'>
        <div className='sign-container'>
            <div>
                <h1>Sign up</h1>
                <div>
                <img src="./images1/dm-profile.jpg" alt="name" className='small-profile'/>
                  <input type="text" placeholder='username' className='name'/>
                </div>
                <div className='first-input'>
                  <img src="./images1/mailimg.png" alt="email" className='email'/>
                  <input type="email" placeholder='email' className='name'/>
                </div>
                <div className='second-input'>
                  <img src="./images1/psw.jpg" alt="password" className='email'/>
                  <input type="password" placeholder='password' className='name'/>
                </div>
                <div>
                <div className='third-input'>
                  <input type="confirm-password" placeholder='confirm-password' className='name'/>
                </div>
                <div className='signup-button'>
                <button>Sign Up</button>
                </div>
                <p className='link1'>
                    <a href= "#" >Already a member?</a>  <a href="#">Log in</a>
                  </p>
                </div>
            </div>
        </div>
       
          
        
      
    </div>
  )
}

export default Signup
