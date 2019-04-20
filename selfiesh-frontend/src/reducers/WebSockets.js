import * as actions from "../actions/WSClientActions";


function wsReducer(state = [], action) {
  console.log(action.type);
  switch (action.type) {
    case actions.WS_CONNECT:
      return [...state, { host: action.host }];

    case actions.WS_CONNECTING:
      return [...state, { host: action.host }];

    case actions.WS_CONNECTED:
      return [...state, { host: action.host }];

    case actions.WS_DISCONNECTED:
      return [...state, { host: action.host }];

    default:
      return state;
  }
}

export default wsReducer;
