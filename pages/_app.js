import '../styles/index.css'
import '../styles/dashboard.css'
import { useEffect } from 'react'
import { useRouter } from 'next/router'


import { pageview } from '../analytics'
import LoginWrapper from '../components/LoginWrapper'

function MyApp({ Component, pageProps }) {
  const router = useRouter()

  useEffect(() => {
    router.events.on('routeChangeComplete', pageview)
    return () => {
      router.events.off('routeChangeComplete', pageview)
    }
  }, [router.events])

  if (router.pathname.startsWith("/app")) {
    return (
      <LoginWrapper Component={Component} pageProps={pageProps}>
        <Component {...pageProps} />
      </LoginWrapper>
    )
  }

  return (
    <Component {...pageProps} />
  )
}

export default MyApp
