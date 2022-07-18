import { configureStore } from "@reduxjs/toolkit";
import videoReducer from "./slice/videoSlice";
//import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

 const store = configureStore({
  reducer: {
    video: videoReducer
  },
});
export default store;

// export type RootState = ReturnType<typeof store.getState>;
// export type AddDispatch = typeof store.dispatch;

// export const useAppDispatch = () => useDispatch<AddDispatch>();
// export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;



