import { ADD_CAR, REMOVE_ALL, SELL_CAR } from "./ActionNames"

const initial_state = {
    car_count: 10,
    car_price: 20000,
    car_total_price: 200000,
    car_total_income: 0
}

const reducer = (state = initial_state, action) => {
    switch(action.type){
        case ADD_CAR:
            return (state.car_count < 15) ? {
                ...state,
                car_count: state.car_count + 1,
                car_total_price: state.car_total_price + state.car_price,
            } : state;
        case SELL_CAR:
            return (state.car_count > 0) ? {
              ...state,
              car_count: state.car_count - 1,
              car_total_income: state.car_total_income + state.car_price,
              car_total_price: state.car_total_price - state.car_price
            } : state;
        case REMOVE_ALL:
            return {
                ...state,
                car_count: 0,
                car_total_price: 0,
                car_total_income: 0
            }
        default:
            return state;
    }
}

export default reducer;