export const RESERVATION_TYPES = {
    ADDRESERVATION : 'ADDRESERVATION',
    REMOVERESERVATION : 'REMOVERESERVATION',
    CLEARRESERVATION:'CLEARRESERVATION'
}
export const addReservation = (reservation) => dispatch => {
    dispatch({
        type:RESERVATION_TYPES.ADDRESERVATION,
        reservation:reservation
      })
}
export const removeReservation = (reservationId) => dispatch => {
    dispatch({
        type:RESERVATION_TYPES.REMOVERESERVATION,
        reservationId:reservationId
      })
}
export const clearReservations = () => dispatch => {
    dispatch({
        type:RESERVATION_TYPES.CLEARRESERVATION
      })
}