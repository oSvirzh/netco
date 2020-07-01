import { ActionTypes } from './types';

const initialState = {
  loading: false,
  competitions: {},
  error: null,
  currentTeam: 'Lazio',
};

export default function todosReducer(state = initialState, action) {
  switch (action.type) {
    case ActionTypes.GET_COMPETITION_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case ActionTypes.GET_COMPETITION_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        data: action.payload, //[...state.competitions, action.payload],
      };
    case ActionTypes.GET_COMPETITION_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };
    default:
      return state;
  }
}
