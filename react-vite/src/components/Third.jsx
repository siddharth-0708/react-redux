import { useState, useRef, useEffect } from 'react'
import {styled} from 'styled-components'
import { useSelector, useDispatch } from 'react-redux'
import Four from './Four';
import Five from './Five';

export default function Third(){
    console.log("Third rendred");
    let dispatach = useDispatch();

    function clicked(){
        dispatach({type: "increment"});
    }
    return (
        <>
            <h1 onClick={clicked}>Third</h1>
            <Four></Four>
            <Five></Five>
        </>
    )
}