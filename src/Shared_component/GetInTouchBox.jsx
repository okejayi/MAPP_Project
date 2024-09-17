import Icon1 from '../assets/Icon1.png'
import Icon2 from '../assets/Icon2.png'
import Icon3 from '../assets/Icon3.png'
const GetInTouchBox =(prop)=>{

        const{type} = prop
    return (
        type == 'Email'?
       ( <div>
            <img src={Icon2} alt="" />
            <p>our friendly team is here to help</p>
            <h3 >Email</h3>
            <a style={{color:'green'}} href=""><b>mapp@meristem.com</b></a>
        </div>)
        :   type == 'office'?
        ( <div>
            <img src={Icon1} alt="" />
            <p>Come say hello at our office</p>
            <h3 >Email</h3>
            <a style={{color:'green'}} href=""><b>mapp@meristem.com</b></a>
        </div>)
        :   type == 'phone'?
        ( <div>
            <img src={Icon3} alt="" />
            <p>Mon-Fri from 9:am to 4:30pm</p>
            <h3 >Email</h3>
            <a style={{color:'green'}} href=""><b>mapp@meristem.com</b></a>
        </div>):
        null
    )

}

export default GetInTouchBox