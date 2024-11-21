import { useState, useRef, useEffect, useMemo, useCallback } from 'react'
import {styled} from 'styled-components'
import Third from './Third'
import Second from './Second'

const First = styled.div`
    position: relative;
    top: 100px;
    background-color: pink;
`
let obj = {company: 'PP'}


export default function Optimizations(){
    let [state, setState] = useState(0);

    let children = useMemo(()=>{
        return (
           <div>heloooo</div>
        );
    }, [])

    let getTime = useMemo(function getTime(){
        console.log("......getTime");
        return 1000 + state;
    }, [state]);

    function firstClicked(){
        setState((val)=> val + 1);
    }
    let calculate = useCallback(function calculate(name, age){
        console.log("...calculateeeeeeee ", name, age);
       return 33;
    },[]);

    useEffect(()=>{
        console.log("...USE EFEECT TRIGGERRRR");
    }, [calculate])

    return (
        <>
            <First onClick={()=> firstClicked()}>
                {state}
                <Second myname = "siddharth" value = '1' time = {calculate}>{children}</Second>
                <Third></Third>
            </First>
        </>
    )
}