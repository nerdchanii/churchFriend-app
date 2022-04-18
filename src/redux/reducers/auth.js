// auth reducer
import {LOGIN, LOGOUT} from '../actionTypes';

const initialState = {
  user: {
    id: 1,
    name: 'kim',
    church: '성당',
    token: 'jwt',
  },
};
// auth reducer
export default function auth(state = initialState, action) {
  switch (action.type) {
    // 이부분은 리덕스 청크로 미들웨어 처리해줘야합니다.
    // 일단 테스트용도입니다.
    case LOGIN: {
      const {user} = action.payload;
      return {
        ...state,
        isLoggedIn: true,
        user: {
          ...user,
        },
      };
    }
    case LOGOUT: {
      return {
        ...state,
        isLoggedIn: false,
        user: {
          id: null,
          name: null,
          church: null,
          token: null,
        },
      };
    }
    default:
      return state;
  }
}
