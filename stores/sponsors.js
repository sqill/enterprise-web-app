import create from 'zustand'

import { getSponsors, createSponsor, removeSponsor } from '../api'

async function fetchSponsors(set) {
  set({ loading: true })

  const { success, data } = await getSponsors()

  const state = { loading: false }

  if (success) {
    state.list = data.data
  }

  set(state)
}

async function createSponsorStore(data, reload) {
  const res = await createSponsor(data)

  if (res?.success) {
    reload()
  }

  return res
}

async function removeSponsorStore(id, reload) {
  const res = await removeSponsor(id)

  if (res?.success) {
    reload()
  }

  return res
}

const createActions = (set, get) => ({
  fetch: () => fetchSponsors(set),
  create: (data) => createSponsorStore(data, get().fetch),
  remove: (id) => removeSponsorStore(id, get().fetch)
})

const useStore = create((set, get) => ({
  list: [],
  loading: false,
  ...createActions(set, get)
}))

export default useStore
