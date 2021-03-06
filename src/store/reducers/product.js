import {
    GET_PRODUCTS
} from '../actions/product';

const initialState = {
    products: []
}

export default (state = initialState, action) => {
    switch(action.type){
        case GET_PRODUCTS:
            return {
                ...state,
                products: action.data
            }
        default:
            return state;
    }
}