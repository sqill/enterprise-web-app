import create from 'zustand'

import { getFonts, createFont, removeFont } from '../api'

async function fetchFonts(set) {
  set({ loading: true })

  const { success, data } = await getFonts()

  const state = { loading: false }

  if (success) {
    state.list = data.data
  }

  set(state)
}

async function createFontStore(data, reload) {
  const res = await createFont(data)

  if (res?.success) {
    reload()
  }

  return res
}

async function removeFontStore(id, reload) {
  const res = await removeFont(id)

  if (res?.success) {
    reload()
  }

  return res
}

const createActions = (set, get) => ({
  fetch: () => fetchFonts(set),
  create: (data) => createFontStore(data, get().fetch),
  remove: (id) => removeFontStore(id, get().fetch)
})

const useStore = create((set, get) => ({
  list: [],
  loading: false,
  ...createActions(set, get)
}))

export default useStore
