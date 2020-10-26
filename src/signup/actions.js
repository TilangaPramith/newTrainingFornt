/* eslint-disable linebreak-style */
import { SIGNUP_REQUESTING } from './constants'

// eslint-disable-next-line max-len
const signupRequest = function signupRequest ({ email_address, password, first_name, last_name, mobile, address, company }) {
  // eslint-disable-next-line no-console
  console.log('called')
  return {
    type: SIGNUP_REQUESTING,
    email_address,
    password,
    first_name,
    last_name,
    address,
    mobile,
    company,
  }
}

export default signupRequest
