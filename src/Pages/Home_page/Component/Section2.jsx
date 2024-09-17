import '../../../Styles/Section2.css'
import Cards from '../../../Shared_component/Cards'


const Section2 =()=>{

    return(
        
        <div className="Section2">
        <h1>Key features</h1>
        <div id='card_holder'>
        <Cards imgPosition="one"/>
        <Cards imgPosition="two"/>
        <Cards imgPosition="three"/>
        <Cards imgPosition="four"/> 
        

        </div>
    </div>
    )
}

export default Section2