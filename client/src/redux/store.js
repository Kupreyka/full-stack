import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import {announcementReducer} from "./reducers/announcementReducer";
import thunkMiddleware from "redux-thunk";


const Reducers = combineReducers({
    announcement: announcementReducer
})


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(Reducers, /* preloadedState, */ composeEnhancers(
    applyMiddleware(thunkMiddleware)
));

export default store
window.store = store
