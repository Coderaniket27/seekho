import React from 'react'
const swee={
    paddingTop:"70px",
backgroundColor:"red"
}
const img ={
    height:"290px",
    padding:"22px",
    width:"330px"
}
function Sweets() {
    return (
        <div>
            
            <div style={swee}>
            <h1 style={{textAlign:"center"}}>SWEET WORLD</h1>
            <img src="gulab.jfif"  alt="no" style={img}/>        
            <img src="katli.jfif" alt="no" style={img}/>   
            <img src="kala.jfif" alt="no" style={img}/>  
            <img src="ajme.jfif" alt="no" style={img}/>   
            <img src="ele.jfif"alt="no" style={img}/>        
            <img src="barf.jfif"alt="no" style={img}/>   
            <img src="kaju.jfif"alt="no" style={img}/>  
            <img src="lado.jfif"alt="no" style={img}/>   
            </div>
        </div>
    )
}

export default Sweets
