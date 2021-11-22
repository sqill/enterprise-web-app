import Link from 'next/link'
import cx from 'classnames'
import React from 'react'

function Links({ filled = false }) {
  const linkClass = cx("text-base font-medium ", {
    "text-white hover:text-primary-50": filled,
    "text-gray-500 hover:text-gray-900": !filled,
  })

  return (
    <React.Fragment>
      <Link href="#">
        <a className={linkClass}>
          Solutions
        </a>
      </Link>

      <Link href="#">
        <a className={linkClass}>
          Solutions
        </a>
      </Link>

      <Link href="#">
        <a className={linkClass}>
          Solutions
        </a>
      </Link>

      <Link href="#">
        <a className={linkClass}>
          Solutions
        </a>
      </Link>
    </React.Fragment>
  )
}

export default function Header({ filled = false }) {
  return (
    <header className={filled ? "bg-primary-600" : ""}>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Top">
        <div className="w-full py-6 flex items-center justify-between border-b border-primary-500 lg:border-none">
          <div className="flex items-center">
            <Link href="/">
              <a>
                <span className="sr-only">Workflow</span>
                <img className="h-10 w-auto" src="/images/logo_color.svg" alt=""/>
              </a>
            </Link>
            <div className="hidden ml-10 space-x-8 lg:block">
              <Links filled={filled} />
            </div>
          </div>
          <div className="ml-10 space-x-4">
            <Link href="/app/login">
              <a className="inline-block bg-primary-500 py-2 px-4 border border-transparent rounded-md text-base font-medium text-white hover:bg-opacity-75">Login</a>
            </Link>
            <Link href="/signup">
              <a className="inline-block bg-white py-2 px-4 border border-transparent rounded-md text-base font-medium text-primary-600 hover:bg-primary-50">
                Sign up
              </a>
            </Link>
          </div>
        </div>
        <div className="mt-4 flex justify-center space-x-6 lg:hidden">
          <Links filled={filled} />
        </div>
      </nav>
    </header>
  )
}
