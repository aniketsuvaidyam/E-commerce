const openCart = (state = true, action) => {
    console.log('action', action)
    switch (action.type) {
        case 'CART': return action.payload;
        default: return state;
    }
}

export default openCart 