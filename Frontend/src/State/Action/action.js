export const Add = (item) => {
    return {
        type: 'ADD_TO_CART',
        payload: item
    }
}
export const Del = (id) => {
    return {
        type: 'DEL_ITEM',
        payload: id
    }
}
export const CartInc = (item) => {
    return {
        type: 'CART_DIC',
        payload: item
    }
}