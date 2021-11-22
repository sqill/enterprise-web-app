import { useEffect } from 'react'
import { useRouter } from 'next/router'

import { useHydrate, Provider } from '../lib/store'
import { getCurrentUser } from '../api'
import Loading from './PageLoading'

const authSelector = state => state.auth
const setCurrentUserSelector = state => state.setCurrentUser

export default function LoginWrapper({ Component, pageProps }) {
  const router = useRouter()
  const store = useHydrate(pageProps.initialZustandState)
  const isLoginPage = router.pathname.includes("login")
  const { user, loading } = store(authSelector)
  const setCurrentUser = store(setCurrentUserSelector)

  useEffect( () => {
    async function fetchData() {
      const res = await getCurrentUser();

      if (res?.success)
        setCurrentUser(res.data.data)
      else
        setCurrentUser(null)
    }
    fetchData()
  }, [])

  useEffect(() => {
    if (!(user || loading)) {
      if (!isLoginPage)
        router.push('/app/login')
    }
  }, [user, loading])

  if (loading) {
    return <Loading />;
  }

  return (
    <Provider initialStore={store}>
      {(user || isLoginPage) && <Component {...pageProps} />}
    </Provider>
  )
}
