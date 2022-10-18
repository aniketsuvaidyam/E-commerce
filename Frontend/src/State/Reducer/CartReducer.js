const initialstate = {
    carts: []
}

export const cartReducer = (state = initialstate, action) => {
    switch (action.type) {
        case 'ADD_TO_CART':
            return {
                ...state,
                carts: [...state.carts, action.payload]
            }
        case 'DEL_ITEM':
            const del = state.carts.filter((e) => e.id !== action.payload)
            return {
                ...state,
                carts: del
            }
        default: return state;
    }
};
