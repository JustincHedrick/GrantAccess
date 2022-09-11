import sendRequest from "./send-request";
const BASE_URL = "/api/grants";


// GET
export function getGrants() {
  return sendRequest(`${BASE_URL}`);
}

// PUT - Used when updating save/unsaved grants
export function saveGrant(payload) {
  return sendRequest(`${BASE_URL}/grant`, 'PUT', payload);
}
