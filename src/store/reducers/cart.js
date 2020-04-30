import {
    ADD_TO_CART,
    REMOVE_FROM_CART
} from '../actions/cart';

const initialState = {
    totalCartValue: 0,
    products: []
}

export default (state = initialState, action) => {
    switch(action.type){
        case ADD_TO_CART:
            return {
                ...state
            }
        case REMOVE_FROM_CART:
            return {
                ...state
            }
        default:
            return state;
    }
}