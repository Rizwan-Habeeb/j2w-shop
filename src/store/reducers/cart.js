import {
    ADD_TO_CART,
    REMOVE_FROM_CART,
    DELETE_FROM_CART
} from '../actions/cart';

const initialState = {
    totalCartValue: 0,
    products: []
}

export default (state = initialState, action) => {
    switch(action.type){
        case ADD_TO_CART:
            const exists = state.products.find(product => product.id === action.data.id);
            if(!exists){
                const newProduct = action.data;
                newProduct.qty = 1;
                return {
                    totalCartValue: state.totalCartValue + newProduct.price,
                    products: [
                        ...state.products,
                        newProduct
                    ]
                }
            } else {
                const products = state.products.map(product => {
                    if(product.id === action.data.id){
                        product.qty++;
                    }
                    return product;
                })
                return {
                    totalCartValue: state.totalCartValue + action.data.price,
                    products
                }
            }
            
        case REMOVE_FROM_CART:
            const productToRemove = state.products.find(product => product.id === action.data);
            let finalProducts = [];

            if(productToRemove.qty > 1){
                finalProducts = state.products.map(product => {
                    if(product.id === action.data){
                        product.qty--;
                    }
                    return product;
                })
            } else {
                finalProducts = state.products.filter(product => product.id !== action.data);
            }
            return {
                ...state,
                totalCartValue: state.totalCartValue - productToRemove.price,
                products: finalProducts
            }
        case DELETE_FROM_CART:
            const final = state.products.filter(product => product.id !== action.data);
            const totalValue = final.reduce((sum, product) => sum + product.price, 0);
            return {
                ...state,
                totalCartValue: totalValue,
                products: final
            }
        default:
            return state;
    }
}