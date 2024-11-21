import {styled} from 'styled-components'
import { useSelector } from 'react-redux'

const ReduxDiv = styled.div`
    position: fixed;
    top:0px;
`
export default function MyRedux(){
    let {value} = useSelector((state)=> state);

    return(
        <ReduxDiv>I am Reduxxxx {value}</ReduxDiv>
    )
}