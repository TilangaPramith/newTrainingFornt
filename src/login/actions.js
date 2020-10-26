/* eslint-disable linebreak-style */
import {
  LOGIN_REQUESTING,
} from './constants'

// In order to perform an action of type LOGIN_REQUESTING
// we need an email and password
const loginRequest = function loginRequest ({ email_address, password }) {
  return {
    type: LOGIN_REQUESTING,
    email_address,
    password,
  }
}

// Since it's the only one here
export default loginRequest
