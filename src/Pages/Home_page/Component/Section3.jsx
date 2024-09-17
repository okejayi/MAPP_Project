import Cards from "../../../Shared_component/Cards"
import Frame from "../../../Shared_component/Frame"
import '../../../Styles/Section3.css'
const Section3 =()=>{
    return(
        <>
        <div className="section3">
        <div className="text_area2">
            <h1>Why Choose MAPP</h1>
            <p>Discover the power of precision with our cutting-edge features from real time asset <br />tracking to secure wealth transfer, MAPP is the catalyst for a smarter, more organised <br /> financial journey </p>
        </div>
        <div className="frame_holder">
        <Frame imgPosition='one' />
        <Frame imgPosition='two' />
        <Frame imgPosition='three' />
        </div>
        </div>
        </>
    )
}
export default Section3