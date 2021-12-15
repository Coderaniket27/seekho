import React from 'react'
const swee={
    paddingTop:"70px",
backgroundColor:"red"
}
const img ={
    height:"290px"
}
function Sweets() {
    return (
        <div>
            
            <div style={swee}>
            <h1>SWEETS WORLD</h1>
            <img src="gulab.jfif" style={img}/>        
            <img src="katli.jfif"/>   
            </div>
        </div>
    )
}

export default Sweets
