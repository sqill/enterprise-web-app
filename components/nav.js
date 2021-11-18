import Link from 'next/link'
import Image from 'next/image'
import FaTwitter from '@meronex/icons/fa/FaTwitter';
import FaInstagram from '@meronex/icons/fa/FaInstagram';
import FaGooglePlay from '@meronex/icons/fa/FaGooglePlay';
import FaAppStore from '@meronex/icons/fa/FaAppStore';
import ReactCountryFlag from 'react-country-flag'
import { useRouter } from 'next/router'

import AppConsts from '../constants'

const links = [
  // { href: '/', label: 'Home' },
  // { href: '/athletes', label: 'athletes' },
  // { href: '/finders', label: 'finders' },
  // { href: '/fans', label: 'fans' },
  // { href: '/about', label: 'about us' },
  { href: 'https://twitter.com/sqill_app', label: 'Twitter', icon: FaTwitter },
  { href: 'https://www.instagram.com/sqill_app', label: 'Instagram', icon: FaInstagram },
  { href: AppConsts.PLAY_STORE_URL, label: 'Play Store', icon: FaGooglePlay },
  { href: AppConsts.APP_STORE_URL, label: 'App Store', icon: FaAppStore }
]

export default function Nav() {
	const router = useRouter()

  return (
    <nav className="">
      <ul className="flex items-center justify-between p-8 px-8 lg:px-56">
        <li>
          <Link href="/">
            <a className="block hover:opacity-75">
              <Image src="/images/logo.svg" alt="home" width="120" height="45" />
            </a>
          </Link>
        </li>
        <ul className="flex items-center justify-between space-x-2 sm:space-x-8">
          {links.map(({ href, icon: Icon, label }) => (
            <li className="" key={`${href}${label}`}>
              <Link href={href}>
                <a title={label}>
                  {Icon ? <Icon size="2rem" /> : label }
                </a>
              </Link>
            </li>
          ))}
          {/* <li>
            {router.pathname === '/international' ? (
              <Link href="/">
                <a><ReactCountryFlag style={{ fontSize: '2rem' }} svg countryCode="PT" /></a>
              </Link>
            ) : (
              <Link href="/international">
                <a><ReactCountryFlag style={{ fontSize: '2rem' }} svg countryCode="GB" /></a>
              </Link>
            )}
          </li> */}
          {/* <li>
            <a className="btn btn-primary" href="">reach out</a>
          </li> */}
        </ul>

      </ul>
    </nav>
  )
}
