import {legacy_createStore,combineReducers}from "redux";
import {composeWithDevTools}from "redux-devtools-extension"
import {NavigationReducer } from "../Reducers/NavigationReducer";
import {CarouselReducer} from "../Reducers/CarouselReducer"
import{CourseReducer} from "../Reducers/CourseReducer"
import { FooterReducer } from "../Reducers/FooterReducer";
export const configureStore=()=>{
return(

    legacy_createStore(combineReducers({NavigationReducer,CarouselReducer,CourseReducer,FooterReducer}),composeWithDevTools())
)
}