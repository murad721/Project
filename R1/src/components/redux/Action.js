const { ADD_CAR, REMOVE_ALL, SELL_CAR } = require("./ActionNames")

export const addCar = () => {
    return {
        type: ADD_CAR,
        info: "One car is added..."
    }
}

export const sellCar = () => {
    return {
        type: SELL_CAR,
        info: "One car is sold..."
    }
}

export const removeAll = () => {
    return {
        type: REMOVE_ALL,
        info: "All cars were removed..."
    }
}