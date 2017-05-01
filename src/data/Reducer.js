export default (state = {count:0}, action)=>{
    console.log(state);
    switch (action.type) {
        case 'INCREMENT':
            return {count:state.count + action.value};
        case 'DECREMENT':
            return {count:state.count - action.value};
        default:
            return state;
    }
}