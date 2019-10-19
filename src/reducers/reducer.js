import {
  MENU_FETCH_START,
  MENU_FETCH_SUCCESS,
  MENU_FETCH_FAIL
} from '../actions/actions';

const initialState = {
  menu: {},
  sections: [],
  items: [],
  error: '',
  isFetching: false
};

function reducer(state = initialState, action) {
  console.log('State', state);
  switch (action.type) {
    case MENU_FETCH_START:
      return {
        ...state,
        isFetching: true,
        error: ''
      };
    case MENU_FETCH_SUCCESS:
      return {
        ...state,
        menu: { ...action.payload },
        isFetching: false,
        error: ''
      };
    case MENU_FETCH_FAIL:
      return {
        ...state,
        error: action.payload
      };

    default:
      return state;
  }
}

export default reducer;
