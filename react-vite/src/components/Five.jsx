import useCustomHook1 from "./useCustomHook1";

export default function Five(){
    let value = useCustomHook1();
    console.log("...sid Five ", value);

    return (
        <>
                {console.log("...sid Five render ", value)}
            <h1>FIVEEEEEEEEEE {value}</h1>
        </>
    )
}