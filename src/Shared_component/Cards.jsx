import Mapp_Frame1 from '../assets/Mapp_Frame1.png'
import Mapp_Frame2 from '../assets/Mapp_Frame2.png'
import Mapp_Frame3 from '../assets/Mapp_Frame3.png'
import Mapp_Frame4 from '../assets/Mapp_Frame4.png'


const Cards =(prop)=>{

    const {src, alt, imgPosition, style} =prop
    
    return(
        imgPosition == 'one'?
       (<img src={Mapp_Frame1} alt="fff"  style={{width:'500px',margin:'10px'}}/>)
        : imgPosition == 'two'?
      ( <img src={Mapp_Frame2} alt="ddd" style={{width:'500px',margin:'10px'}} />)
      : imgPosition == 'three'?
      ( <img src={Mapp_Frame3} alt="dd" style={{width:'500px',margin:'10px'}}/>)
      : 
      ( <img src={Mapp_Frame4} alt="mapf" style={{width:'500px',margin:'10px'}}/>)
      
      
    )

    
}

export default Cards