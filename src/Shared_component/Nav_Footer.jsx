import Nav from "./Nav"
import Footer from "./Footer"
const NavFooter =(prop)=>{

    return(
        <>
        <Nav/>
        {prop.children}
        <Footer/>
        </>
    )
}

export default NavFooter