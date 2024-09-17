import '../Styles/Nav.css'
import mapp_logo from '../assets/mapp_logo.png'
import Button from './Button'
const Nav =()=>{


    return (
        
        <>
        <nav>
           <div> <img src={mapp_logo} alt="mapp_logo" /></div>
            <div className="anchor">
            <a href="">Home</a>
            <a href="">About</a>
            <a href="">Services</a>
            <a href="">FAQ</a>
            <a href="">Contact</a>
            <a href="">Blog</a>
            <a href="">Recommendation</a>
        </div>

        <div className='Button_Holder'>    
            <Button Button_Type = 'Primary' />   
            <Button Button_Type = 'Secondary'/>
            </div>
        </nav> 
        </>
    )
    
}

export default Nav