import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedEventId: undefined,
  data: [],
};

const eventSlice = createSlice({
  name: "event",
  initialState,
  reducers: {
    setSelectedEventId: (state, { payload }) => {
      state.selectedEventId = payload;
    },

    setEventsData: (state, { payload }) => {
      state.data = payload;
    },
  },
});

export const { setSelectedEventId, setEventsData } = eventSlice.actions;
export default eventSlice.reducer;
