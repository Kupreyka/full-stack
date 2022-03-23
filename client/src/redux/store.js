import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import {announcementReducer} from "./reducers/announcementReducer";
import thunkMiddleware from "redux-thunk";
import {adPageReducer} from "./reducers/adPageReducer";


const Reducers = combineReducers({
    announcement: announcementReducer,
    adpage: adPageReducer
})


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(Reducers, /* preloadedState, */ composeEnhancers(
    applyMiddleware(thunkMiddleware)
));

export default store
window.store = store
