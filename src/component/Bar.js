
import React from 'react'

const my = {
    color: "white",
    position: "fixed",
     backgroundColor: "DodgerBlue",
    padding: "1%",
    fontFamily: "Arial",
    display: "flex",
    width:"99%",
   

  

};
const nosel={
    borderbottom: "1.5px solid black",
    color: "green",
    padding: "10px",
}
const sel={
    borderbottom: "1.5px solid black",
    color: "red",
    padding: "10px",
}
export default function Bar(props) {
    return (
        <>
        <div style={my}>
            <div style={props.content ==="Sweets" ?sel :nosel } onClick={() =>props.setcontent("Sweets")}>
                SWEETS
            </div>
            <div style={props.content ==="Vegetable" ?sel :nosel } onClick={() =>props.setcontent("Vegetable")}>
                VEGETABLE
            </div>
            < div style={props.content ==="Mocktails" ?sel :nosel } onClick={() =>props.setcontent("Mocktails")}>
                MOCKTAIL
            </div>
            </div>
        </>
    )
} 
