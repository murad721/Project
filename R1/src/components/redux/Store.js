const {createStore} = require ("redux");
const { default: reducer } = require("./Reducer");
const store = createStore(reducer);
export default store;