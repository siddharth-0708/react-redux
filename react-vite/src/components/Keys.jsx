import { useState, useRef, useEffect, useMemo } from 'react'
import {styled} from 'styled-components'
import { useSelector, useDispatch } from 'react-redux'

const KeysComponent = styled.div`
    position: relative;
    top: 200px;
    width: 500px;
    height: auto;
    background-color: orange;
`
function Keys(){
    let [state, setState] = useState(0);
    let elementsArray = useRef(0);
    let usememoArray = useRef(0);
    let myArray = useRef([]);
    let dispatach = useDispatch();

    function headingClicked(){
        // setState((val)=>val + 1);
        dispatach({type: "increment"});
    }
    let val = useMemo(function updateVal(){
        usememoArray.current = state;
        return state;

    }, [state]);

    useEffect(()=>{
        // console.log("... useEffect OF KEYS COMPONENT ", elementsArray.current);
        // elementsArray.current = state;
        // console.log("... useEffect OF KEYS COMPONENT After increment", elementsArray.current);
        myArray.current.unshift({val : state + 1, id: state});
    }, [state]);

    return (
        <>
            <KeysComponent>
                {console.log("...STATE ", state)}
                {console.log("...KEYS COMPONENT ", elementsArray.current)}
                <h1 onClick={headingClicked}>KEYS LESSON </h1>
                <h2>State Count is {state}</h2>
                <h2>Count is {elementsArray.current}</h2>
                <h2>usememo is {usememoArray.current}</h2>
                {myArray.current.map((data, ind)=>{
                    return <h3 key={data.id}> Loop is {data.val}</h3>
                })}
            </KeysComponent>
        </>
    )
};
export default Keys;