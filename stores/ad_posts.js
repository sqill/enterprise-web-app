import create from 'zustand'

import { getAdPosts, createAdPost, removeAdPost } from '../api'

async function fetchAdPosts(set) {
  set({ loading: true })

  const { success, data } = await getAdPosts()

  const state = { loading: false }

  if (success) {
    state.list = data.data
  }

  set(state)
}

async function createAdPostStore(data, reload) {
  const res = await createAdPost(data)

  if (res?.success) {
    reload()
  }

  return res
}

async function removeAdPostStore(id, reload) {
  const res = await removeAdPost(id)

  if (res?.success) {
    reload()
  }

  return res
}

const createActions = (set, get) => ({
  fetch: () => fetchAdPosts(set),
  create: (data) => createAdPostStore(data, get().fetch),
  remove: (id) => removeAdPostStore(id, get().fetch)
})

const useStore = create((set, get) => ({
  list: [],
  loading: false,
  ...createActions(set, get)
}))

export default useStore
