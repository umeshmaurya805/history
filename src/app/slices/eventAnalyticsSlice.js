import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  eventId: undefined,
};

const eventSlice = createSlice({
  name: "eventAnalytics",
  initialState,
  reducers: {
    setAnalyticsEventId: (state, { payload }) => {
      state.eventId = payload;
    },
  },
});

export const { setAnalyticsEventId } = eventSlice.actions;
export default eventSlice.reducer;
