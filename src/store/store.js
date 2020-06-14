import {applyMiddleware, combineReducers, createStore} from "redux";
import authReducer from "./reducers/authReducer"
import thunk from "redux-thunk"
import errorReducer from "./reducers/errorReducer";
import listAndProjectReducer from "./reducers/listAndProjectReducer";
import popupReducer from "./reducers/poupReducer"

const rootStore = combineReducers({
    auth: authReducer,
    error: errorReducer,
    listAndProject: listAndProjectReducer,
    popup: popupReducer

})

const rootReducer = createStore(rootStore, applyMiddleware(thunk))


export default rootReducer;