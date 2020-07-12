import { combineReducers } from "@reduxjs/toolkit";
import headerModule from "./modules/HeaderModule";

const rootReducer = combineReducers({
  headerContext: headerModule.reducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
