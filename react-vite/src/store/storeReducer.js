export default function storeReducer(state = {value : 0, age: 10}, action){
    if(action.type == "increment"){
        return {
            age: state.age,
            value: state.value + 1
        }
    }else if(action.type == "decrement"){
        return {
            value: state.value,
            age: state.age - 1
        }
    }
    else{
        return state;
    }
}
