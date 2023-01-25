import create from 'zustand'

import { getVideoAssets, createVideoAsset, removeVideoAsset, updateVideoAsset, getAssetFolders } from '../api'

async function fetchAssets(set) {
  set({ loading: true })

  const { success, data } = await getVideoAssets()

  const state = { loading: false }

  if (success) {
    state.list = data.data
  }

  set(state)
}

async function fetchFolders(set) {
  const { success, data } = await getAssetFolders()

  const state = {}

  if (success) {
    state.folders = data.data
  }

  set(state)
}

async function createAsset(data, reload) {
  const res = await createVideoAsset(data)

  if (res?.success) {
    reload()
  }

  return res
}

async function editAsset(id, data, reload) {
  const res = await updateVideoAsset(id, data)

  if (res?.success) {
    reload()
  }

  return res
}

async function removeAsset(id, reload) {
  const res = await removeVideoAsset(id)

  if (res?.success) {
    reload()
  }

  return res
}

async function reload(get) {
  get().fetch()
  get().fetchFolders()
}

const createActions = (set, get) => ({
  fetch: () => fetchAssets(set),
  create: (data) => createAsset(data, get().reload),
  edit: (id, data) => editAsset(id, data, get().reload),
  remove: (id) => removeAsset(id, get().reload),
  fetchFolders: () => fetchFolders(set),
  reload: () => reload(get)
});

const useStore = create((set, get) => ({
  list: [],
  folders: [],
  loading: false,
  ...createActions(set, get)
}))

export default useStore
