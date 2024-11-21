import { useState, useRef, useEffect, memo } from 'react'
import {styled} from 'styled-components'

function customCompare(prev, next){
    if(prev.children !== next.children){
        console.log(".... not sameeeeeeeeee");
        return false;
    }
    return true;
}

let Second = memo(function Second(props){
    console.log("second rendred");
    return (
        <>
            {props.children}
            <h1>Second {props.myname}</h1> 
            <h1>Second {props.time("sid", 29)
            }</h1> 
        </>
    )
}  );
export default Second;