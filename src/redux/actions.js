//create [action object] function
import {LOGIN, LOGOUT} from './actionTypes';

let nextTodoId = 0;

/*
 * action creator
 * @param {object} user
 * user = {
 *   id: 1,
 *   name: 'kim',
 *   church: '성당',
 *   token: JsonWebToken
 *
 */
export const login = user => ({
  type: LOGIN,
  payload: {
    user,
  },
});

export const logout = () => ({
  type: LOGOUT,
  payload: {},
});
