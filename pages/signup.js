import Head from 'next/head'

import SignupForm from '../components/SignupForm';

export default function Signup() {
  return (
    <div className="min-w-screen min-h-screen bg-gray-900 flex items-center justify-center px-5 py-5">
      <div className="bg-gray-100 text-gray-500 rounded-3xl shadow-xl w-full overflow-hidden max-w-screen-lg" >
        <div className="md:flex w-full">
          <div className="hidden md:block w-1/2">
            <img className="rounded-l-lg" src="https://flowbite.com/application-ui/demo/images/authentication/login.jpg" alt="login image" />
          </div>
          <div className="w-full md:w-1/2 py-10 px-5 md:px-10">
            <div className="text-center mb-10">
              <h1 className="font-bold text-3xl text-gray-900">REGISTER</h1>
              <p>Enter your information to register</p>
            </div>
            <div>
              <SignupForm />
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}
