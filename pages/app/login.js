import { useEffect, useState } from 'react'
import React from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import Image from 'next/image'
import RegiterForm from '../../components/RegisterForm'

import { useStore } from '../../lib/store'
import { getCurrentUser } from '../../api'

import LoginForm from '../../components/Auth/LoginForm';
import Link from 'next/link'

const authSelector = state => state.auth
const setCurrentUserSelector = state => state.setCurrentUser

export default function Login() {
  const router = useRouter()
  const [isOpen, setIsOpen] = useState(false)
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
    <React.Fragment>
      <div className="min-w-screen min-h-screen bg-white px-5 py-5">
        <div className='flex items-left justify-left className="text-xl pl-12 lg:ml-2.5"'>
          <img src="/images/cutLogo.png" alt="Login Image" className='max-h-7 px-3' />
          <span className='self-center whitespace-nowrap'>Brand Lab</span>
        </div>

        <div className="flex items-center justify-center px-5 py-10">
          <div className='flex items-center py-0 justify-center'>
            <div className="flex flex-col items-center justify-center w-3/5">
              <h1 className="font-bold text-3xl text-gray-900 text-center py-10">
                Welcome to the <br></br> Brand lab
              </h1>
              <div className="w-4/5 py-10">
                <img src="/images/login_image.png" alt="Login Image" />
              </div>
            </div>
            <div className="bg-gray-100 text-gray-500 rounded-3xl shadow-xl lg:w-2/6 w-full overflow-hidden">
              <div className="py-10 px-5 md:px-10">
                <div className="text-center mb-10 py-5 flex flex-col items-center justify-center">
                  <img src="/images/cutLogo.png" alt="Login Image" className='max-h-14' />
                  <h1 className="font-bold text-3xl text-gray-900 py-5">Login</h1>
                </div>
                <div>
                  <LoginForm onSuccess={handleSuccess} />
                </div>
                <div className="mt-4 flex">
                  <div className='py-5 flex w-full'>
                    No account? Get access{' '}
                    <div onClick={() => setIsOpen(true)} className="pl-1 font-bold text-primary-700">
                      here
                    </div>
                    .
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <RegiterForm isOpen={isOpen} setIsOpen={setIsOpen}></RegiterForm>
    </React.Fragment>
  );
}
