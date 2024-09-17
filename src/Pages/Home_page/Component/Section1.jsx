import '../../../Styles/Section1.css'
import Nav from '../../../Shared_component/Nav'
import Button from '../../../Shared_component/Button'
const Section1=()=>{


    return(
        <>
        <div className="Container">
            <Nav/>
      

        <div className="text_area">
        <div className="text1">TRACK, ORGANIZE AND TRANSFER YOUR </div>
        <div className="text2"> 
           <div id="text2_child1">  
            <p>Seamlessly track your asset,designate <br/>beneficiaries and access estate planning <br/> products tailored to your needs</p></div>
           <div id="text2_child2"> <Button text= 'Get Started' style={{color:'white',backgroundColor:'green',borderRadius:'20px'}}/></div>
        </div>
        <img src="../images/Mapp_arrow.png" alt=""/>
    </div>
    </div>
        </>
    )

}

export default Section1