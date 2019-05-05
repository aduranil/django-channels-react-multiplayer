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

export const handleSignup = (username, password) => (dispatch) => {
  fetch('http://localhost:8000/app/users/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify(username, password),
  })
    .then(res => res.json())
    .then((json) => {
      localStorage.setItem('token', json.token);
      dispatch({ type: 'SET_CURRENT_USER', json });
    });
};

export const createGame = name => (dispatch) => {
  fetch('http://localhost:8000/app/game/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify(name),
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
