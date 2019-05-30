export const WS_CONNECT = "WS_CONNECT";
export const WS_CONNECTING = "WS_CONNECTING";
export const WS_CONNECTED = "WS_CONNECTED";
export const WS_DISCONNECT = "WS_DISCONNECT";
export const WS_DISCONNECTED = "WS_DISCONNECTED";

export const wsConnect = (host) => {
  return { type: WS_CONNECT, host };
};
export const wsConnecting = (host) => {
  return { type: WS_CONNECTING, host };
};
export const wsConnected = (host) => {
  return { type: WS_CONNECTED, host, };
};
export const wsDisconnect = (host) => {
  return { type: WS_DISCONNECT, host };
};
export const wsDisconnected = (host) => {
  return { type: WS_DISCONNECTED, host };
};
