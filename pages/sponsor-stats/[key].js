import Head from 'next/head'
import { InstagramEmbed, TikTokEmbed } from 'react-social-media-embed';

import { getSponsorPosts, getSponsorCompany, getSponsor } from '../../api'
import { formatDate } from '../../utils';

function embedComponent(platform) {
  switch (platform) {
    case 'instagram':
      return InstagramEmbed;

    case 'tiktok':
      return TikTokEmbed;

    default:
      return null;
  }
}

function AdPost({ platform, id, url, created_at }) {
  const Comp = embedComponent(platform);

  if(!Comp) return;

  return (
    <div className="md:flex w-full">
      <div className="py-10 px-5 md:px-10">
        <h3 className="text-primary-600 font-bold mb-4">{formatDate(created_at)}</h3>
        <div>
          <Comp url={url} />
        </div>
      </div>
    </div>
  )
}

export default function SponsorPage({ adPosts, company, sponsor }) {
  return (
    <div className="min-h-screen bg-gray-900 flex justify-center px-5 py-5">
      <Head>
        <title>sqill enterprise - Ad stats ({ company.name })</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <div className="flex flex-col w-full md:w-1/2">
        <div className="flex flex-col mb-10">
          <h1 className="text-yellow text-3xl font-extrabold">{ sponsor.name } ↔ { company.name }</h1>
          <h3 className="text-primary-500">{ company.website }</h3>
        </div>

        <div className="">
          {adPosts.map(post => <AdPost key={post.id} {...post} />)}
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
  const [{ data: postsData }, { data: sponsorData }] = await Promise.all([
    getSponsorPosts(key),
    getSponsor(key)
  ]);


  return { props: { adPosts: postsData.data, company: dataCompany.data, sponsor: sponsorData.data } }
}
