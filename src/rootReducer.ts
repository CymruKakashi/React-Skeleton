import { combineReducers } from "redux";
import textReducer from "./features/text/textSlice";

export default function createRootReducer() {
    return combineReducers({
        text: textReducer
    });
}