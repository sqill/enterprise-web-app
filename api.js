import denormalize from '@weareredlight/denormalize_json_api'

import AppConsts from './constants'


const objectToQueryParams = params => params
  ? Object.keys(params).map(key => `${key}=${params[key]}`).join('&')
  : '';


// ##################################
// ##
// ##     Auth
// ##

export const login = async data => {
  const res = await request('POST', 'v0/users/sign_in', data)
  if (res.success) {
    await storeAccessToken({
      token: res.data.authentication_token, email: data.api_v0_user.email
    })
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
  return request('PUT', 'v0/users/password', data)
}

export const requestPasswordReset = data => request('POST', 'v0/users/password', data, true)



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
  const options = {
    headers: new Headers([
      ['Content-Type', 'application/json'],
      ['Accept', 'application/json']
    ]),
    method,
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
