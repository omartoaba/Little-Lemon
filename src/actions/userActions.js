export const ACTION_TYPES = {
    LOGIN : 'LOGIN',
    LOGOUT : 'LOGOUT'
}
export const login = (user) => dispatch => {
    console.log(user)
    dispatch({
        type:ACTION_TYPES.LOGIN,
        user:user
      })
}
export const logout = () => dispatch => {
    dispatch({
        type:ACTION_TYPES.LOGOUT
      })
}