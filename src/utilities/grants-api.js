import sendRequest from "./send-request";
const BASE_URL = "/api/grants";


// GET
export function getGrants() {
  return sendRequest(`${BASE_URL}`);
}

// PUT - Used when updating save/unsaved grants
export function saveGrant(payload) {
  console.log('Saving Grant');
  return sendRequest(`${BASE_URL}/grant`, 'PUT', payload);
}

export function getGrant(grantId) {
  return sendRequest(`${BASE_URL}/${grantId}`);
}
