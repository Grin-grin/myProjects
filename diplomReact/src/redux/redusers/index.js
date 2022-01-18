const initialState = {
    items: null,
    totalPrice: 0,
    totalCount: 0,
}

const cart = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_PRODUCT_TO_CART": {
            const newItems = state.items
                ? [...state.items, action.payload]
                : [action.payload]
            const newTotalPrice = state.totalPrice + action.payload.price;
            const newTotalCount = state.totalCount + 1;
            return {
                ...state,
                items: newItems,
                totalPrice: newTotalPrice,
                totalCount: newTotalCount
            }
        }
        case "REMOVE_PRODUCT_TO_CART": {
            const newItems = state.items.filter((item) => item.id !== action.payload);
            const newTotalCount = state.totalCount - 1;
            const Item = state.items.filter((item) => item.id === action.payload);
            const newTotalPrice = state.totalPrice - Item[0].price;
            return {
                ...state,
                items: newItems,
                totalPrice: newTotalPrice,
                totalCount: newTotalCount
            }
        }
        case "REMOVE_CART": {
            return {
                ...state,
                items: null,
                totalPrice: 0,
                totalCount: 0
            }
        }
        default: return state
    }
}

export default cart