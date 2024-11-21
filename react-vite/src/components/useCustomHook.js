import { useSelector } from 'react-redux'

export default function useCustomHook(){
    let {value} = useSelector((state)=> state);
    console.log("...sid useCustomHook ", value);

    return value
}