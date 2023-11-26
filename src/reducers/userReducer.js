import { ACTION_TYPES } from "../actions/userActions"
const defaultstate = {
   username:'',
   password:''
}

export const userReducer = (state = defaultstate,action) => {
    switch(action.type){
        case ACTION_TYPES.LOGIN:
            return {
                username: action.user.username,
                password:action.user.password
            }
            case ACTION_TYPES.LOGOUT:
                return {
                    username: '',
                    password:''
                }
            default:
                return state;
    }
}