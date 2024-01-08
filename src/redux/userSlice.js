import { createSlice } from "@reduxjs/toolkit";
import { cloneDeep } from "lodash";

const userSlice = createSlice({
  name: "user",
  initialState: {
    isLogin: false,
  },
  reducers: {
    setIsLogin: (state, payload) => {
      return {
        ...state,
        isLogin: payload.payload,
      };
    },
  },
});

export const { setIsLogin } = userSlice.actions;
export default userSlice.reducer;
