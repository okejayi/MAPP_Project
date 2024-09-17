import Mapp_Frame5 from '../assets/Mapp_Frame5.png'
import Mapp_Frame6 from '../assets/Mapp_Frame6.png'
import Mapp_Frame7 from '../assets/Mapp_Frame7.png'


const Frame =(prop)=>{
    const {img, src, imgPosition, style} = prop

    return(
        imgPosition == 'one'?
       ( <img src={Mapp_Frame5} alt="" style={{width:"350px", margin:'15px'}} />)
       :imgPosition == 'two'?
       ( <img src={Mapp_Frame6} alt="" style={{width:"350px",margin:'15px'}}/>)
       :imgPosition == 'three'?
       ( <img src={Mapp_Frame7} alt="" style={{width:"350px",margin:'15px'}} />):
       null
    )

}

export default Frame