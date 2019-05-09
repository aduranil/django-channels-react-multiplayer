export const handleLogin = (e, data) => (dispatch) => {
  fetch('http://localhost:8000/token-auth/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify(data),
  })
    .then(res => res.json())
    .then((json) => {
      localStorage.setItem('token', json.token);
      return dispatch({ type: 'SET_CURRENT_USER', data });
    });
};

export const handleSignup = json => (dispatch) => {
  fetch('http://localhost:8000/app/users/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify(json),
  })
    .then(res => res.json())
    .then((json) => {
      localStorage.setItem('token', json.token);
      dispatch({ type: 'SET_CURRENT_USER', json });
    });
};

export const createGame = roomName => (dispatch) => {
  fetch('http://localhost:8000/app/game/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: localStorage.getItem('token'),
    },
    body: JSON.stringify({ room_name: roomName }),
  })
    .then(res => res.json())
    .then((json) => {
      dispatch({ type: 'SET_GAME', json });
    });
};

const initialState = {};

const authReducer = (state = { ...initialState }, action) => {
  switch (action.type) {
    case 'SET_CURRENT_USER':
      return { ...state, loggedIn: true, username: action.json.username };
    default:
      return state;
  }
};

export default authReducer;
