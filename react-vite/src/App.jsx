import { useState, useRef, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {styled} from 'styled-components'
import ModuleComponent from './components/ModuleComponent';
import Optimizations from './components/Optimizations'

import './custom.css';
import Header from './components/Header';
import Keys from './components/Keys'
import MyRedux from './components/MyRedux'

const NewApp = styled.div `
  width: 100px;
  height: 100px;
  background-color :  red;
  color: orange;

  & span {        
    color: blue;
  }

  

  &:hover{
    background-color : black;
  }
`
const NewApp1 = styled.div `
  width: 250px;
  height: 250px;
  // background-image: url('./src/assets/image.png');
  backround-repeat:no-repeat;
  background-color :  blue;
`
const NewApp2 = styled.div `
  width: 100px;
  height: 100px;
  background-color :  pink;
`

function App() {
  const [count, setCount] = useState(0);
  const dummyRef = useRef(null);
  const dummyRef1 = useRef(null);

  useEffect(()=>{
    setTimeout(() => {
      if(dummyRef.current)
      dummyRef.current.style.color = 'red';
  
      if(dummyRef1.current)
      dummyRef1.current.style.color = 'yellow';
    }, 2000);
  },[])

  return (
    <>
    <Header ref= {dummyRef}></Header>
    <NewApp ref={dummyRef1}>hhh
      <span> i am casheww</span>
      <NewApp1> <h4> i am sheruuu </h4></NewApp1>
    </NewApp>
    {/* <NewApp2></NewApp2> */}
    {/* <ModuleComponent></ModuleComponent> */}
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
      <Optimizations></Optimizations>
      <Keys></Keys>

      <MyRedux></MyRedux>
    </>
  )
}

export default App
