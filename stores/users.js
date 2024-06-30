import create from 'zustand'

import { getUsers } from '../api'

async function fetchUsers(set) {
  set({ loading: true })

  const { success, data } = await getUsers()

  const state = { loading: false }

  if (success) {
    state.list = data.data
  }

  set(state)
}

const createActions = (set, get) => ({
  fetch: () => fetchUsers(set),
})

const useStore = create((set, get) => ({
  list: [],
  loading: false,
  ...createActions(set, get)
}))

export default useStore
