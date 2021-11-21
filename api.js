import denormalize from '@weareredlight/denormalize_json_api'

import AppConsts from './constants'
import { storeAccessToken, getAccessToken, deleteAuth } from './utils'

const objectToQueryParams = params => params
  ? Object.keys(params).map(key => `${key}=${params[key]}`).join('&')
  : '';


// ##################################
// ##
// ##     Auth
// ##

export const login = async (email, password) => {
  const data = {
    api_enterprise_user: { email, password }
  }
  const res = await request('POST', 'enterprise/users/sign_in', data)
  if (res.success) {
    storeAccessToken({
      token: res.data.authentication_token, email
    })
  }
  return res
}

export const logout = async () => {
  const res = await request('DELETE', 'enterprise/users/sign_out', data)
  if (res.success) {
    deleteAuth()
  }
  return res
}

export const updatePassword = (password, confirmation, reset_password_token) => {
  const data = {
    api_v0_user: {
      password,
      password_confirmation: confirmation,
      reset_password_token
    }
  }
  return request('PUT', 'enterprise/users/password', data)
}

export const requestPasswordReset = data => request('POST', 'enterprise/users/password', data, true)

export const getCurrentUser = () => request('GET', 'enterprise/users/me')


// ##################################
// ##
// ##     Enterprise signup
// ##
export const signup = params => request('POST', 'enterprise/company', params)


// ##################################
// ##
// ##     Finders
// ##
export const getFinders = id => request('GET', 'enterprise/finders')


export const getPlayer = id => request('GET', `v0/players/${id}`)

export const searchPlayers = (filters) => request('POST', 'v0/players/search', filters)
export const autocompletePlayers = (q) => request('GET', 'v0/players/autocomplete', { q })


// ##################################
// ##
// ##     Utils
// ##

export const getCountryByIP = () => request('GET', 'v0/ip2country')

export const getDistricts = countryId => request('GET', `v0/districts?country=${countryId}`)

// FIXME: hardcoded sportId to 1 which is Football
export const getClubs = (sportId = 1, name) => request('GET', `v0/sports/${sportId}/clubs`, { name })

// FIXME: hardcoded sportId to 1 which is Football
export const getSportDetails = (sportId = 1) => request('GET', `v0/sports/${sportId}`)

// ##################################
// ##
// ##     Main function
// ##

const request = async (method, endpoint, body) => {
  const authCreds = getAccessToken();
  const options = {
    headers: new Headers([
      ['Content-Type', 'application/json'],
      ['Accept', 'application/json']
    ]),
    method,
  }

  if (authCreds) {
    options.headers.set('X-USER-EMAIL', authCreds.email)
    options.headers.set('X-USER-TOKEN', authCreds.token)
  }

  let queryParams = ''
  if (body && method !== 'GET') options.body = JSON.stringify(body)
  if (method === 'GET' && body) {
    queryParams = `?${objectToQueryParams(body)}`
  }

  let response = {}
  try {
    response = await fetch(`${AppConsts.BASE_URL}${endpoint}${queryParams}`, options)
  } catch (error) {
    console.error(error)
    return { success: false, message: 'Network error' }
  }
  let jsonResponse = null
  try {
    jsonResponse = await response.json()
  } catch (error) {
    console.error(error)
    jsonResponse = {}
  }

  const data = denormalize(jsonResponse)
  if (response.ok) {
    return { success: true, data }
  }

  const dataError = Array.isArray(data.errors)
    ? `${data.errors[0].detail || data.errors[0].title}`
    : JSON.stringify(data.errors)
  return { success: false, error: dataError ?? `Unknown error (${response.status})` }
}
