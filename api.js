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
  const res = await request('DELETE', 'enterprise/users/sign_out')
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
// ##     Enterprise company
// ##
export const signup = params => request('POST', 'enterprise/company', params)
export const updateCompany = params => request('PATCH', 'enterprise/company', params)


// ##################################
// ##
// ##     Users
// ##
// returns users for the current company
export const getUsers = id => request('GET', 'enterprise/company/users')


// ##################################
// ##
// ##     Video Assets
// ##
export const getVideoAssets = (noBundles = true) => request('GET', 'enterprise/video_editor_assets', { no_bundles: noBundles })
export const createVideoAsset = (data) => request('POST', 'enterprise/video_editor_assets', data, true)
export const updateVideoAsset = (id, data) => request('PATCH', `enterprise/video_editor_assets/${id}`, data, Boolean(data.video_asset.asset))
export const removeVideoAsset = (id) => request('DELETE', `enterprise/video_editor_assets/${id}`)
export const getAssetFolders = () => request('GET', `enterprise/video_editor_assets/folders`)


// ##################################
// ##
// ##     Sponsors
// ##
export const getSponsors = () => request('GET', 'enterprise/sponsors')
export const createSponsor = (data) => request('POST', 'enterprise/sponsors', data)
export const removeSponsor = (id) => request('DELETE', `enterprise/sponsors/${id}`)

export const getSponsorPosts = (key) => request('GET', `enterprise/sponsor-ad-posts/${key}/ad-posts`)
export const getSponsor = (key) => request('GET', `enterprise/sponsor-ad-posts/${key}/sponsor`)
export const getSponsorCompany = (key) => request('GET', `enterprise/sponsor-ad-posts/${key}/company`)


// ##################################
// ##
// ##     Ad Posts
// ##
export const getAdPosts = () => request('GET', 'enterprise/ad_posts')
export const createAdPost = (data) => request('POST', 'enterprise/ad_posts', data)
export const removeAdPost = (id) => request('DELETE', `enterprise/ad_posts/${id}`)


// ##################################
// ##
// ##     Fonts
// ##
export const getFonts = () => request('GET', 'enterprise/fonts')
export const createFont = (data) => request('POST', 'enterprise/fonts', data, true)
export const removeFont = (id) => request('DELETE', `enterprise/fonts/${id}`)


// ##################################
// ##
// ##     SubtitleColors
// ##
export const getSubtitleColors = () => request('GET', 'enterprise/subtitle_colors')
export const createSubtitleColor = (data) => request('POST', 'enterprise/subtitle_colors', data)
export const updateSubtitleColor = (id, data) => request('PATCH', `enterprise/subtitle_colors/${id}`, data)
export const removeSubtitleColor = (id) => request('DELETE', `enterprise/subtitle_colors/${id}`)


// ##################################
// ##
// ##     Curated database
// ##
export const getCuratedCategories = () => request('GET', 'enterprise/curated_categories')



// ##################################
// ##
// ##     send2sqill
// ##

export const mediaFinder = (source_url, referer = null) =>
  request('POST', 'send2sqill/media-finder/', { source_url, referer })

export const generateDraft = (draft) =>
  request('POST', 'send2sqill/drafts/', { draft })

export const updateDraft = (id, draft) =>
  request('PUT', `send2sqill/drafts/${id}`, { draft })

export const generateDraftS3Upload = (id, filename) =>
  request('POST', `send2sqill/drafts/${id}/generate_s3_upload`, { filename })


// ##################################
// ##
// ##     Utils
// ##

export const getCountryByIP = () => request('GET', 'v0/ip2country')


// ##################################
// ##
// ##     Main function
// ##

function objectToFormData(obj, rootName, ignoreList) {
  var formData = new FormData();

  function appendFormData(data, root) {
      if (!ignore(root)) {
          root = root || '';
          if (data instanceof File) {
              formData.append(root, data);
          } else if (Array.isArray(data)) {
              for (var i = 0; i < data.length; i++) {
                  appendFormData(data[i], root + '[' + i + ']');
              }
          } else if (typeof data === 'object' && data) {
              for (var key in data) {
                  if (data.hasOwnProperty(key)) {
                      if (root === '') {
                          appendFormData(data[key], key);
                      } else {
                          appendFormData(data[key], root + '[' + key + ']');
                      }
                  }
              }
          } else {
              if (data !== null && typeof data !== 'undefined') {
                  formData.append(root, data);
              }
          }
      }
  }

  function ignore(root){
      return Array.isArray(ignoreList)
          && ignoreList.some(function(x) { return x === root; });
  }

  appendFormData(obj, rootName);

  return formData;
}

const request = async (method, endpoint, body, multipart = false) => {
  const authCreds = getAccessToken();
  const options = {
    headers: new Headers([
      ['Accept', 'application/json']
    ]),
    method,
  }

  if (authCreds) {
    options.headers.set('X-USER-EMAIL', authCreds.email)
    options.headers.set('X-USER-TOKEN', authCreds.token)
  }
  if (!multipart) {
    options.headers.set('Content-Type', 'application/json')
  }

  let queryParams = ''
  if (method === 'GET' && body) {
    queryParams = `?${objectToQueryParams(body)}`
  } else if (body) {
    options.body = multipart ? objectToFormData(body) : JSON.stringify(body)
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
