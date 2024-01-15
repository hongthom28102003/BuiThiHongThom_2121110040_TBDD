import { createSlice } from "@reduxjs/toolkit";
import { cloneDeep } from "lodash";

const userSlice = createSlice({
  name: "user",
  initialState: {
    isLogin: false,
    user: {},
  },
  reducers: {
    setIsLogin: (state, payload) => {
      return {
        ...state,
        isLogin: payload.payload,
      };
    },
    setUser: (state, payload) => {
      return {
        ...state,
        user: payload.payload,
      };
    }
  },
});

export const { setIsLogin,setUser } = userSlice.actions;
export default userSlice.reducer;
