import { useEffect } from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'

import { useStore } from '../../lib/store'
import { getCurrentUser } from '../../api'

import LoginForm from '../../components/Auth/LoginForm';
import Link from 'next/link'

const authSelector = state => state.auth
const setCurrentUserSelector = state => state.setCurrentUser

export default function Login() {
  const router = useRouter()

  const { user } = useStore(authSelector)
  const setCurrentUser = useStore(setCurrentUserSelector)

  // Redirect if logged in
  useEffect(() => {
    if (!user) return;

    router.push('/app')
  }, [user])

  if (user) return null;

  async function handleSuccess() {
    const res = await getCurrentUser();

    if (res?.success)
      setCurrentUser(res.data.data)
    else
      setCurrentUser(null)

    router.push('/app')
  }


  return (
    <div className="min-w-screen min-h-screen bg-gray-900 flex items-center justify-center px-5 py-5">
      <div className="bg-gray-100 text-gray-500 rounded-3xl shadow-xl lg:w-1/3 w-full overflow-hidden max-w-screen-lg" >
        <div className="py-10 px-5 md:px-10">
          <div className="text-center mb-10">
            <h1 className="font-bold text-3xl text-gray-900">LOGIN</h1>
          </div>
          <div>
            <LoginForm onSuccess={handleSuccess} />
          </div>
          <div className="mt-4">
            <p>
              No account? Get access <Link href="/signup"><a className="font-bold text-primary-700">here</a></Link>.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
