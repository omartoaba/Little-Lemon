import { RESERVATION_TYPES } from "../actions/reservationActions"
const defaultstate = {
   reservations:[]
}
export const reservationsReducer = (state = defaultstate,action) => {
    switch(action.type){
        case RESERVATION_TYPES.ADDRESERVATION:
            return {
                reservations: [...state.reservations,action.reservation]
            }
            case RESERVATION_TYPES.REMOVERESERVATION:
                return {
                    reservations:  state.reservations.filter(r => r.id !== action.reservationId)
                }
            case RESERVATION_TYPES.CLEARRESERVATION:
                return {
                    reservations: []
                }
            default:
                return state;
    }
}