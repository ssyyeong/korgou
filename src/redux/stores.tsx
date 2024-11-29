import {configureStore} from '@reduxjs/toolkit';
// import authReducer from './reducers/authReducer';

const store = configureStore({
  reducer: {
    //  auth: authReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>; // 전체 스토어의 상태 타입
export type AppDispatch = typeof store.dispatch; // 디스패치 타입

export default store;
