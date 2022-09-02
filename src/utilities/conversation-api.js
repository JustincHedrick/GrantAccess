import sendRequest from "./send-request";
const BASE_URL = "/api/conversations";

export function newConversation(data) {
  return sendRequest(`${BASE_URL}`, 'POST', data)
}

export function getConversation() {
  return sendRequest(`${base_url}`)
}
// export function updateProfile(userData) {
//   return sendRequest(`${BASE_URL}/update`, 'POST', userData);
// }