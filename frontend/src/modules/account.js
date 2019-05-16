const headers = {
  'Content-Type': 'application/json',
  Authorization: `Token ${localStorage.getItem('token')}`,
};

const API_ROOT = 'http://localhost:8000';

export const getCurrentUser = () => dispatch => fetch(`${API_ROOT}/app/user/`, {
  method: 'GET',
  headers,
})
  .then(res => res.json())
  .then(json => dispatch({ type: 'SET_CURRENT_USER', data: json }));

function status(res) {
  if (!res.ok) {
    throw new Error(res.status);
  }
  return res;
}

export const handleLogin = data => dispatch => fetch('http://localhost:8000/app/login/', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
  body: JSON.stringify(data),
})
  .then(status)
  .then(res => res.json())
  .then((json) => {
    localStorage.setItem('token', json.token);
    return dispatch({ type: 'SET_CURRENT_USER', data: json });
  })
  .catch(() => dispatch({ type: 'SET_ERROR', data: 'User not found' }));

export const handleSignup = jsonData => dispatch => fetch('http://localhost:8000/app/users/', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
  body: JSON.stringify(jsonData),
})
  .then(res => res.json())
  .then((json) => {
    localStorage.setItem('token', json.token);
    return dispatch({ type: 'SET_CURRENT_USER', data: json });
  });

export const logoutUser = () => (dispatch) => {
  localStorage.removeItem('token');
  return dispatch({ type: 'LOGOUT_USER' });
};

export const createGame = roomName => dispatch => fetch('http://localhost:8000/app/game/', {
  method: 'POST',
  headers,
  body: JSON.stringify({ room_name: roomName }),
})
  .then(res => res.json())
  .then((json) => {
    dispatch({ type: 'SET_GAME', data: json });
    return `/game/${json.id}`;
  });

const initialState = {};

const authReducer = (state = { ...initialState }, action) => {
  switch (action.type) {
    case 'SET_CURRENT_USER':
      return { ...state, loggedIn: true, username: action.data.username };
    case 'LOGOUT_USER':
      return { ...state, loggedIn: false, username: null };
    case 'SET_GAME':
      return { ...state, roomName: action.data.room_name };
    case 'SET_ERROR':
      return { ...state, errorMessage: action.data };
    default:
      return state;
  }
};

export default authReducer;
