const Button = (prop)=>{

    const {text,style,Button_Type} = prop

    return (
        Button_Type == "Primary"?
      (<button style={{color: "white", background:"none", border:'1px solid black'}}>{"Get started"}</button>)
        :Button_Type == "Secondary"?
      (<button style={{color: "green", backgroundColor:"white"}}>{"Get started"}</button>)
        :
      <button style={{color: "white", backgroundColor:"green"}}>{"Get started"}</button>

    )
    
}

export default Button