
import Image from 'next/image'
import Link from 'next/link'
import Head from 'next/head'

import FaTwitter from '@meronex/icons/fa/FaTwitter';
import FaInstagram from '@meronex/icons/fa/FaInstagram';
import FaGooglePlay from '@meronex/icons/fa/FaGooglePlay';
import FaAppStore from '@meronex/icons/fa/FaAppStore';
import FaLinkedin from '@meronex/icons/fa/FaLinkedin';
import SiCrunchbase from '@meronex/icons/si/SiCrunchbase';


const linksSocial = [
  { href: 'https://twitter.com/sqill_app', label: 'Twitter', icon: FaTwitter },
  { href: 'https://www.instagram.com/sqill_app', label: 'Instagram', icon: FaInstagram },
  { href: 'https://www.linkedin.com/company/heysqill/', label: 'LinkedIn', icon: FaLinkedin },
  { href: 'https://www.crunchbase.com/organization/sqill', label: 'Crunchbase', icon: SiCrunchbase },
  { href: 'https://play.google.com/store/apps/details?id=com.heydime.dime', label: 'Play Store', icon: FaGooglePlay },
  { href: 'https://apps.apple.com/pt/app/sqill/id1552698486', label: 'App Store', icon: FaAppStore }
]

export default function IndexPage() {
  return (
    <div className="flex items-center justify-center h-screen bg-background text-white font-montserrat">
      <Head>
        <title>sqill enterprise</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className="container">
        <div className="text-center">
          <Image  src="/images/logo_color.svg" alt="sqill logo" width="213" height="70" />
          <h5 className='text-xl md:text-3xl mt-1'>Enterprise</h5>
          <p className="text-md md:text-xl mt-10">
            <Link href="/app"><a className="text-primary-500 hover:underline">Login</a></Link>
            {" | "}
            <Link href="/signup"><a className="text-primary-500 hover:underline">Sign up</a></Link>
          </p>
        </div>
        <div className="flex flex-wrap mt-10 justify-center">
          {linksSocial.map(({ href, icon: Icon, label }) => (
            <a key={label} title={label} href={href} target="_blank" rel="noreferrer" className="p-2 mx-2 hover:text-primary-500">
              <Icon size="2rem" />
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}
