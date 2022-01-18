export const addProductToCart = (productObj) => ({
    type: "ADD_PRODUCT_TO_CART",
    payload: productObj
})

export const removeProductToCart = (id) => ({
    type: "REMOVE_PRODUCT_TO_CART",
    payload: id
})

export const removeCart = () => ({
    type: "REMOVE_CART"
})
