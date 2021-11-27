import Head from 'next/head'

import SignupForm from '../components/SignupForm';

const style = {
  backgroundImage: "url(/images/testemunho.jpg)",
  backgroundSize: 'cover'
}

export default function Signup() {
  return (
    <div className="min-w-screen min-h-screen bg-gray-900 flex items-center justify-center px-5 py-5">
      <Head>
        <title>sqill enterprise - signup</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className="bg-gray-100 text-gray-500 rounded-3xl shadow-xl w-full overflow-hidden max-w-screen-lg" >
        <div className="md:flex w-full">
          <div className="hidden md:block w-1/2" style={style} />
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
