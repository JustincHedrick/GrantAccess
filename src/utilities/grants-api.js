import sendRequest from "./send-request";
const BASE_URL = "/api/grants";


// GET
export function getGrants() {
  return sendRequest(`${BASE_URL}`)
}

