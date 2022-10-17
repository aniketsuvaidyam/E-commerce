const int = {
    carts: []
}

const cartReducer = (state = int, action) => {
    console.log('state', state)
    switch (action.type) {
        case 'ADD_TO_CART':
            return {
                ...state,
                carts: [...state.carts, action.payload]
            }
        default: return state;
    }
}

export default cartReducer; 