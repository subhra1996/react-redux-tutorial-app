import { configureStore } from "@reduxjs/toolkit";
import counter_Reducer from "./services/reducers/counterReducer";

const store = configureStore({
    reducer: counter_Reducer
});

export default store;