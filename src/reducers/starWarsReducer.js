import { FETCH_LOADING_START, FETCH_SUCCESS, FETCH_FAILED } from "../actions";
const initialState = {
  characters: [],
  isLoading: true,
  error: []
};
export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    // Fill me in with the important reducers
    // action types should be FETCHING, SUCCESS and FAILURE
    // your switch statement should handle all of these cases.
    case FETCH_LOADING_START:
      return {
        ...state,
        isLoading: true
      };

    case FETCH_FAILED:
      return {
        ...state,
        error: action.payload,
        isLoading: false
      };

    case FETCH_SUCCESS:
      return {
        ...state,
        characters: action.payload,
        isLoading: false
      };
    default:
      return state;
  }
};
