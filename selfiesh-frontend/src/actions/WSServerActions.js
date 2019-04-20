export const WS_HEALTH = "WS_HEALTH";

export const wsHealth = (status) => {
  return { type: WS_HEALTH, status };
};
