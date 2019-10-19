import axios from 'axios';

export const MENU_FETCH_START = 'MENU_FETCH_START';
export const MENU_FETCH_SUCCESS = 'MENU_FETCH_SUCCESS';
export const MENU_FETCH_FAIL = 'MENU_FETCH_FAIL';

export const getMenu = () => dispatch => {
  dispatch({ type: MENU_FETCH_START });
  axios
    .get('http://localhost:3001/api/menu')
    .then(res => {
      console.log('Checking the response of getMenu action');
      dispatch({ type: MENU_FETCH_SUCCESS, payload: res.data });
    })
    .catch(err => dispatch({ type: MENU_FETCH_FAIL, payload: err }));
};
