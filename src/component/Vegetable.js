import React from 'react'
import { useEffect, useState} from 'react';

const mystyle = {
    color: "white",
    backgroundColor: "red",
    padding: "10px",
    fontFamily: "Arial",
    width: "30%",
    
  };
  const my = {
    display: "flex",
    paddingTop:"69px"
    
  };
  const mys = {
 width: "30%",
    backgroundColor: "green"
   
  };
  const hea = {
      color:"blue",
      textAlign:"center"
  }
const pic = {
    width: "90%",
    display: "block",
  marginLeft: "auto",
  marginRight: "auto"
}



function Vegetable(props) {
   const[pag, setpag]= useState(0);
   const [load, setload]= useState(false);
    const[data, setdata]= useState([]);
    useEffect(() => {
        fetch("https://burgers1.p.rapidapi.com/burgers", {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "burgers1.p.rapidapi.com",
                "x-rapidapi-key": "831fab8f0amshdddeb712649d3fbp112336jsne585c080ce5e"
            }
        })
.then(res=>res.json()).then(res=>{setdata(res);setload(true)}



    )}, [pag])
console.log(data)


    return (
               <div style={my}>
                   
                   <div style={mystyle}>
                      <h1 style={hea} ><strong> BURGER WORLD</strong></h1> 
                   <img src="download.jfif" alt='no' style={pic}/>
                   <br/>
                   <img src="images.jfif" alt='no' style={pic}/>
                   </div>
                   <div style= {mys}>
                       <h1 style={hea}>Menu</h1>
                   <div>
                       <img src ="mains.jfif" alt="no" style={pic}/>
                   </div>
                   <br/>
                   <br/>
            {load===true?<div>

              <div style={{textAlign:"center"}}>
                 <i>Names:</i> <strong> { data[pag].name }</strong>
<br/>
                  <i> Restro: </i>    <strong>{ data[pag].restaurant}</strong>
           <br/>
           <i>      WebSite: </i>    <strong>{ data[pag].web}</strong>
           <br/>
           <i>      Description: </i>    <strong>{ data[pag].description}</strong>

           <h3>Hurry up!! Hurry up!</h3>
           <p1>Burger world is newly launched so come grab your new offer now
               we are offering world best burger . Since 1880 we are serving in U.S.A
               now we are in India. Grab your burger and search your fav one just in one click.
           </p1>
           <br/>
           <br/>
           <br/>
           
           <br/>
        
           <button onClick={() =>setpag(pag => pag+1)}>CLICK ME</button>

</div>

                
            </div>:<h2>loading</h2>}
            </div>
            <div style={{width:"40%"}}>
            <h1 style={hea}>History</h1>
            <div style={{textAlign:"center"}}>            The hamburger first appeared in the 19th or early 20th century.
            
            The modern hamburger was a product of the culinary needs of a society rapidly changing due to industrialization and 
            the emergence of the working class and middle class with the resulting demand for mass-produced, affordable food that could be consumed outside of the home.
            <br/>
            <br/>
            Considerable evidence suggests that either the USA or Germany (city of Hamburg) was the first country where two
            slices of bread and a ground beef steak were combined into a "hamburger sandwich" and sold. There is some controversy over the origin of the hamburger because its two basic ingredients,
            bread and beef,  been prepared and consumed separately for many years in different countries before their combination. Shortly after its creation, the hamburger quickly included all of its currently typically characteristic trimmings, including onions, lettuce, and sliced pickles.

            </div>
            <br/>
            <br/>
            <h1 style={{ textAlign:"center"}}>
                THANKS FOR VISITING.
            </h1>
            </div>
        </div>
    )
                }

export default Vegetable
