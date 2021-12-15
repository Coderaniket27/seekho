import React from 'react'
import Sweets from './Sweets'
import Vegetable from './Vegetable'

function Main(props) {
    if(props.content==="Sweets"){
        return (<div><Sweets/></div>)
    }
    else if(props.content==="Vegetable"){
        return (<div><Vegetable/></div>)
    }
   else if(props.content==="Mocktails"){
        return (<div>Mocktails</div>)
    }
    
}

export default Main
