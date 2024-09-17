import Desktop from '../../../assets/Desktop.png'
import GetInTouchBox from '../../../Shared_component/GetInTouchBox'
import '../../../Styles/Section5.css'
const Section5 =()=>{
    return(
<>
<div className='Section5'>
<div><img src={Desktop} style={{ margin:'20px'}} alt="" /></div>
<div className='Section5_child1' >
    <div><h2>Get in Touch</h2></div>
    <div className='Section5_child2'>
    <GetInTouchBox type={'Email'}/>
    <GetInTouchBox type={'office'}/>
    <GetInTouchBox type={'phone'}/>
    </div>
</div>

</div>
</>
    )
}

export default Section5