import create from 'zustand'

import { getSubtitleColors, createSubtitleColor, removeSubtitleColor, updateSubtitleColor } from '../api'

async function fetchSubtitleColors(set) {
  set({ loading: true })

  const { success, data } = await getSubtitleColors()

  const state = { loading: false }

  if (success) {
    state.list = data.data
  }

  set(state)
}

async function createSubtitleColorStore(data, reload) {
  const res = await createSubtitleColor(data)

  if (res?.success) {
    reload()
  }

  return res
}

async function editSubtitleColor(id, data, reload) {
  const res = await updateSubtitleColor(id, data)

  if (res?.success) {
    reload()
  }

  return res
}

async function removeSubtitleColorStore(id, reload) {
  const res = await removeSubtitleColor(id)

  if (res?.success) {
    reload()
  }

  return res
}

const createActions = (set, get) => ({
  fetch: () => fetchSubtitleColors(set),
  create: (data) => createSubtitleColorStore(data, get().fetch),
  remove: (id) => removeSubtitleColorStore(id, get().fetch),
  edit: (id, data) => editSubtitleColor(id, data, get().fetch)
})

const useStore = create((set, get) => ({
  list: [],
  loading: false,
  ...createActions(set, get)
}))

export default useStore
