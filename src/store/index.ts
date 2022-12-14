//library
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useSelector } from "react-redux";

//reducer
import authReducer from "./reducers/auth/auth.slice";
import stepperReducer from "./reducers/stepper/stepper.slice";

//rtk
import homeApi from "./rtk-api/home-rtk/homeApi";
import userApi from "./rtk-api/user-rtk/userApi";

const rootReducer = combineReducers({
  auth: authReducer,
  stepper: stepperReducer,

  [homeApi.reducerPath]: homeApi.reducer,
  [userApi.reducerPath]: userApi.reducer,
});

export const store = configureStore({
  reducer: rootReducer,

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(homeApi.middleware, userApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
