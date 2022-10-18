const initialstate = {
    carts: []
}

export const cartReducer = (state = initialstate, action) => {
    switch (action.type) {
        case 'ADD_TO_CART':
            const itemIndex = state.carts.findIndex((item) => item.id === action.payload.id)
            if (itemIndex >= 0) {
                state.carts[itemIndex].quantity += 1
            } else {

                return {
                    ...state,
                    carts: [...state.carts, action.payload]
                }
            }
        case 'DEL_ITEM':
            const del = state.carts.filter((e) => e.id !== action.payload)
            return {
                ...state,
                carts: del
            }
        case 'CART_DIC':
            const itemIndexDic = state.carts.findIndex((item) => item.id === action.payload.id)
            if (state.carts[itemIndexDic].quantity >= 1) {
                state.carts[itemIndexDic].quantity -= 1
                return {
                    ...state,
                    carts: [...state.carts]
                }
            }

        default: return state;
    }
};
