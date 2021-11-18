import '../styles/index.css'
import { useEffect } from 'react'
import { useRouter } from 'next/router'


import { pageview } from '../gtag'

function MyApp({ Component, pageProps }) {
  const router = useRouter()
  useEffect(() => {
    router.events.on('routeChangeComplete', pageview)
    return () => {
      router.events.off('routeChangeComplete', pageview)
    }
  }, [router.events])


  return (
    <Component {...pageProps} />
  )
}

export default MyApp
