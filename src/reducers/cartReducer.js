import { CARTACTION_TYPES } from "../actions/cartActions"
const defaultstate = {
   products:[]
}

export const cartReducer = (state = defaultstate,action) => {
    switch(action.type){
        case CARTACTION_TYPES.ADDPRODUCT:
            return {
               products: [...state.products,action.product]
            }
            case CARTACTION_TYPES.REMOVEPRODUCT:
                return {
                    products: state.products.filter(p => p.id !== action.productId)
                }
            case CARTACTION_TYPES.CLEARCART:
                return {
                    products: []
                }
            default:
                return state;
    }
}