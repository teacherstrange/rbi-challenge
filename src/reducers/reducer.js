import {
  MENU_FETCH_START,
  MENU_FETCH_SUCCESS,
  MENU_FETCH_FAIL,
  SECTIONS_FETCH_FAIL,
  SECTIONS_FETCH_START,
  SECTIONS_FETCH_SUCCESS,
  ITEMS_FETCH_FAIL,
  ITEMS_FETCH_START,
  ITEMS_FETCH_SUCCESS
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
    // MENU CASES
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

    // SECTION CASES
    case SECTIONS_FETCH_START:
      return {
        ...state,
        isFetching: true,
        error: ''
      };
    case SECTIONS_FETCH_SUCCESS:
      return {
        ...state,
        sections: [...action.payload],
        isFetching: false,
        error: ''
      };
    case SECTIONS_FETCH_FAIL:
      return {
        ...state,
        error: action.payload
      };

    // ITEMS CASES
    case ITEMS_FETCH_START:
      return {
        ...state,
        isFetching: true,
        error: ''
      };
    case ITEMS_FETCH_SUCCESS:
      return {
        ...state,
        items: [...action.payload],
        isFetching: false,
        error: ''
      };
    case ITEMS_FETCH_FAIL:
      return {
        ...state,
        error: action.payload
      };

    default:
      return state;
  }
}

export default reducer;
