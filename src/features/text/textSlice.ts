import { createSlice } from "@reduxjs/toolkit";
// eslint-disable-next-line import/no-cycle
import { RootState } from "../../store";

const textSlice = createSlice({
  name: "text",
  initialState: { value: "" },
  reducers: {
    set: (state) => {
      state.value = "Text set";
    },
    clear: (state) => {
        state.value = "";
      },
  },
});

export const { set, clear } = textSlice.actions;

export default textSlice.reducer;

export const selectText = (state: RootState) => state.text.value;
