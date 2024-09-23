import '../../Styles/Login.css'
import NavFooter from '../../Shared_component/Nav_Footer'
import Input from '../../Shared_component/Input'
import { useState } from 'react'

const Login =()=>{

const [data, SetData]= useState({email:'',password:''})
const [error,SetError] = useState('')

const UpdateField =(e)=>{
SetData({...data, [e.target.name]:e.target.value})
console.log(data)
}

const SubmitLogin =(e,data)=>{
e.preventDefault()
const {email,password} =data
if(!password || !email){
SetError('pass incorrect')

}
if(password.lenght < 6){
    SetError('password incorrect')
}
 return

SetError('')
}

    return(
    <>
    <div className='Login'>
    <NavFooter >
        <div className='Holder'>
        <form action="" onSubmit={SubmitLogin}>
            <h3>Welcome Back</h3>
            <p>Welcome back! Log in to continue your journey.</p>
            <label htmlFor="#">Email</label> <br />
            <input type="email" style={{width:'300px'}} name='email' id='email' placeholder='user@yahoo.com' onChange={(e)=>UpdateField(e)} /><br />
            <span style={{color:'red'}}>{error}</span><br />
            <label htmlFor="#">Password</label> <br />
            <input type="password" style={{width:'300px'}} name='password' id='password' placeholder='password' onChange={(e)=>UpdateField(e)} />
            <span style={{color:'red'}}>{error}</span><br />
            <div className='RememberMe'>
                <p>Remember me</p>
                <p style={{color:'green'}}>Forgot Password?</p>
            </div>
        <button type="Submit" style={{backgroundColor:'green', width:'300px', color:'white'}}>Login</button>
        <div className='dontHaveAccount'>
            <p>Dont have an account?</p>
            <a href="">Sign-up</a>
        </div>
        </form>
        </div>
    </NavFooter>
    </div> 
    </>
    )

}

export default Login