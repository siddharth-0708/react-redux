import { forwardRef, useReducer, useEffect } from 'react'
import { myReducer } from './commonLibrary';

const HeaderComp = forwardRef(function Header(props, ref){
    const [state, dispatch]= useReducer(myReducer,0);

    useEffect(()=>{
        console.log(".....useeffect");
    }, []);

    function call(){
        console.log("hahahahahahahaha");
        dispatch({payload: "add"});
    }
    return(
        <>
        {console.log("header rendered")}
        <section  onClick={call} ref={ref}>Hi siddharthhhhhh</section>
        <h1>{state}</h1>
        </>
    )
})
export default HeaderComp;