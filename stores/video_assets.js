import create from 'zustand'

import { getVideoAssets, createVideoAsset, removeVideoAsset, updateVideoAsset } from '../api'

async function fetchAssets(set) {
  set({ loading: true })

  const { success, data } = await getVideoAssets()

  const state = { loading: false }

  if (success) {
    state.list = data.data
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

const createActions = (set, get) => ({
  fetch: () => fetchAssets(set),
  create: (data) => createAsset(data, get().fetch),
  edit: (id, data) => editAsset(id, data, get().fetch),
  remove: (id) => removeAsset(id, get().fetch)
})

const useStore = create((set, get) => ({
  list: [],
  loading: false,
  ...createActions(set, get)
}))

export default useStore
