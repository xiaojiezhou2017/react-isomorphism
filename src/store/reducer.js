const initState = { age: 11, name: 'zhou' };
import { CHANGE__AGE, CHANGE__NAME } from './actionTypes'; 
function message (state = initState, action) {
    switch (action) {
        case CHANGE__AGE: return Object.assign(state,{ age: action.age }); break;
        case CHANGE__NAME: return Object.assign(state,{ name: action.name}); break;
        default: return state;
    }
}
export default message;
