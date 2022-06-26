import Head from 'next/head'
import { useRouter } from 'next/router'

import { getSponsorPosts, getSponsorCompany } from '../../api'

function AdPost(post) {
  return (
    <div className="bg-gray-100 text-gray-500 rounded-3xl shadow-xl w-full" >
      <div className="md:flex w-full">
        <div className=" py-10 px-5 md:px-10">
          <div>
            {JSON.stringify(post)}
          </div>
        </div>
      </div>
    </div>
  )
}

export default function SponsorPage({ adPosts, company }) {
  return (
    <div className="min-h-screen bg-gray-900 flex justify-center px-5 py-5">
      <Head>
        <title>sqill enterprise - Ad stats ({ company.name })</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <div className="flex flex-col w-full md:w-1/2">
        <div className="flex flex-col mb-10">
          <h1 className="text-yellow text-3xl font-extrabold">{ company.name }</h1>
          <h3 className="text-primary-500">{ company.website }</h3>
        </div>

        <div className="">
          {adPosts.map(post => <AdPost key={post.id} post={post} />)}
        </div>
      </div>
    </div>

  )
}

export async function getServerSideProps(context) {
  const { key } = context.params;

  const { success: successCompany, data: dataCompany } = await getSponsorCompany(key);

  if(!successCompany) {
    return {
      notFound: true,
    }
  }

  const { data } = await getSponsorPosts(key);

  return { props: { adPosts: data.data, company: dataCompany.data } }
}
