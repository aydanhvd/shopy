//Action Types
const TOGGLE_DRAWER_STATUS = "TOGGLE_DRAWER_STATUS";

//Selectors
export const MODULE_NAME = "rootReducer";
export const selectDrawerStatus = (state) => state[MODULE_NAME].drawerStatus;

//Reducer
const initialState = {
  drawerStatus: false,
};

export function reducer(state = initialState, { type, payload }) {
  switch (type) {
    case TOGGLE_DRAWER_STATUS:
      return {
        drawerStatus: payload,
      };
    default:
      return state;
  }
}

//ActionCreators
export const toggleDrawerStatus = (payload) => ({
  type: TOGGLE_DRAWER_STATUS,
  payload,
});
