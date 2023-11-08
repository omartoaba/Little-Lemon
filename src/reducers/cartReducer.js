import { CARTACTION_TYPES } from "../actions/cartActions"
const defaultstate = {
   products:[]
}
const addProduct = (products,product) => {
    var productslist = [...products]; 
   for (let index = 0; index < productslist.length; index++) {
    const target = productslist[index];
     if(target.title === product.title){
        target.count += 1;
        return productslist;
     }
    }
    return [...products,{...product,count:1}]
}
const removeProduct = (products,productName) => {
    var productslist = [...products]; 
    for (let index = 0; index < productslist.length; index++) {
        const target = productslist[index];
         if((target.title === productName)){
            if(target.count > 1){
                target.count -= 1;
            } else{
                productslist.splice(index,1);
            }
            return productslist;
         }
        }
        return productslist
}
export const cartReducer = (state = defaultstate,action) => {
    switch(action.type){
        case CARTACTION_TYPES.ADDPRODUCT:
            return {
               products: addProduct(state.products,action.product)
            }
            case CARTACTION_TYPES.REMOVEPRODUCT:
                return {
                    products: removeProduct(state.products,action.productName)
                }
            case CARTACTION_TYPES.CLEARCART:
                return {
                    products: []
                }
            default:
                return state;
    }
}