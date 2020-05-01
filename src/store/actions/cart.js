export const ADD_TO_CART = "ADD_TO_CART";
export const REMOVE_FROM_CART = "REMOVE_FROM_CART";
export const DELETE_FROM_CART = "DELETE_FROM_CART";

export const addToCart = (data) => {
    return { type: ADD_TO_CART, data };
}

export const removeFromCart = (data) => {
    return { type: REMOVE_FROM_CART, data };
}

export const deleteFromCart = (data) => {
    return { type: DELETE_FROM_CART, data };
}