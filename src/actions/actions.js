import axios from 'axios';

export const MENU_FETCH_START = 'MENU_FETCH_START';
export const MENU_FETCH_SUCCESS = 'MENU_FETCH_SUCCESS';
export const MENU_FETCH_FAIL = 'MENU_FETCH_FAIL';

export const SECTIONS_FETCH_START = 'SECTIONS_FETCH_START';
export const SECTIONS_FETCH_SUCCESS = 'SECTIONS_FETCH_SUCCESS';
export const SECTIONS_FETCH_FAIL = 'SECTIONS_FETCH_FAIL';

export const getMenu = () => dispatch => {
  dispatch({ type: MENU_FETCH_START });
  axios
    .get('http://localhost:3001/api/menu')
    .then(res => {
      dispatch({ type: MENU_FETCH_SUCCESS, payload: res.data });
    })
    .catch(err => dispatch({ type: MENU_FETCH_FAIL, payload: err }));
};

export const getSections = () => dispatch => {
  dispatch({ type: SECTIONS_FETCH_START });
  axios
    .get('http://localhost:3001/api/sections')
    .then(res => {
      dispatch({ type: SECTIONS_FETCH_SUCCESS, payload: res.data });
    })
    .catch(err => dispatch({ type: SECTIONS_FETCH_FAIL, payload: err }));
};
