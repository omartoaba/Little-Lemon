export const CARTACTION_TYPES = {
    ADDPRODUCT : 'ADDPRODUCT',
    REMOVEPRODUCT : 'REMOVEPRODUCT',
    CLEARCART:'CLEARCART'
}
export const addProduct = (product) => dispatch => {
    dispatch({
        type:CARTACTION_TYPES.ADDPRODUCT,
        product:product
      })
}
export const removeProduct = (productName) => dispatch => {
    dispatch({
        type:CARTACTION_TYPES.REMOVEPRODUCT,
        productName:productName
      })
}
export const clearCart = () => dispatch => {
    dispatch({
        type:CARTACTION_TYPES.CLEARCART
      })
}