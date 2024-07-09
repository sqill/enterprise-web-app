import React from 'react'
import Link from 'next/link'
import cx from "classnames";

import GoFileMedia from '@meronex/icons/go/GoFileMedia';
import BsHouseDoor from '@meronex/icons/bs/BsHouseDoor';
import MdcTagOutline from '@meronex/icons/mdc/MdcTagOutline';
import TiSocialInstagram from '@meronex/icons/ti/TiSocialInstagram';
import MdcFormatFont from '@meronex/icons/mdc/MdcFormatFont';
import BsUpload from '@meronex/icons/bs/BsUpload';
import MdSettings from '@meronex/icons/ios/MdSettings';
import BsHeart from '@meronex/icons/bs/BsHeart';
import AiOutlineSetting from '@meronex/icons/ai/AiOutlineSetting';
import BsGearWide from '@meronex/icons/bs/BsGearWide';

export default function Sidebar({ opened = false }) {
  const className = cx(
    "fixed z-10 h-full top-0 left-0 pt-16 flex lg:flex flex-shrink-0 flex-col w-64 transition-width duration-75",
    { "hidden": !opened }
  );



  return (
    <aside id="sidebar" className={className} >
      <div className="relative flex-1 flex flex-col min-h-0 bg-white pl-5">
        <div className="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
          <div className="flex-1 bg-gray-100 rounded-xl divide-y space-y-1 pt-5">
            <ul className="space-y-2 pb-2">
              <li>
                <Link
                  href="/app/users"
                  className="text-xs text-gray-900 font-light hover:bg-greenSqill-200 flex items-center group px-5 py-3 pl-10">

                  <BsHouseDoor className="text-gray-900" />
                  <span className="ml-3 flex-1 whitespace-nowrap"> Cockpit </span>

                </Link>
              </li>
              <li>
                <Link
                  href="/app/send2sqill"
                  className="text-xs font-light text-gray-900  hover:bg-greenSqill-200 flex items-center group px-5 py-3 pl-10">

                  <BsUpload className="text-gray-900" />
                  <span className="ml-3 flex-1 whitespace-nowrap">Video & Image</span>

                </Link>
              </li>

              <li>
                <Link
                  href="/app/curated_database"
                  className="text-xs text-gray-900 font-light hover:bg-greenSqill-200 flex items-center group px-5 py-3 pl-10">

                  <BsHeart className="text-gray-900" />
                  <span className="ml-3 flex-1 whitespace-nowrap">Inspiration</span>

                </Link>
              </li>
              <li>
                <Link
                  href="/app/creators_sync"
                  className="text-xs text-gray-900 font-light hover:bg-greenSqill-200 flex items-center group px-5 py-3 pl-10">
                  <svg width="16" height="16" viewBox="0 0 25 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21.9422 11.8137C22.2298 12.0449 22.6075 11.9609 22.8233 11.6036C23.7224 10.1323 24.2349 8.15661 24.2349 6.13889C24.2349 4.11066 23.7314 2.11396 22.8233 0.663716C22.6075 0.306401 22.2298 0.222334 21.9422 0.453528C21.6455 0.684721 21.5916 1.13661 21.8252 1.51493C22.5625 2.75501 22.9941 4.42592 22.9941 6.13889C22.9941 7.84135 22.5445 9.50176 21.8252 10.7523C21.6004 11.1307 21.6455 11.5826 21.9422 11.8137Z" fill="black"/>
                    <path d="M19.2455 9.68181C19.5151 9.89199 19.8927 9.81843 20.1086 9.46112C20.6481 8.62041 20.9538 7.36983 20.9538 6.14027C20.9538 4.90022 20.6481 3.66016 20.1086 2.81943C19.8927 2.45161 19.5151 2.37807 19.2455 2.59874C18.9128 2.86146 18.8588 3.33438 19.1105 3.7127C19.4972 4.32223 19.713 5.2365 19.713 6.14027C19.713 7.03354 19.4882 7.93731 19.1105 8.55735C18.8678 8.94617 18.9128 9.40858 19.2455 9.68181Z" fill="black"/>
                    <path d="M9.77723 17.8598H18.4716C19.7304 17.8598 20.3329 17.4289 20.3329 16.4831C20.3329 14.3182 17.9862 11.155 14.12 11.155C10.2628 11.155 7.91607 14.3182 7.91607 16.4831C7.91607 17.4289 8.51846 17.8598 9.77723 17.8598ZM14.129 10.1882C15.8193 10.1882 17.2219 8.41219 17.2219 6.27887C17.2219 4.14554 15.8373 2.47461 14.129 2.47461C12.4206 2.47461 11.027 4.17708 11.027 6.29987C11.027 8.42269 12.4296 10.1882 14.129 10.1882ZM2.14373 17.8598H7.50247C7.11585 17.6076 6.83712 17.0401 6.90905 16.4726H1.92794C1.85601 16.4726 1.81107 16.4305 1.81107 16.336C1.81107 14.3918 3.76215 12.5317 6.00095 12.5317C6.80116 12.5317 7.52044 12.7314 8.15882 13.1097C8.41057 12.7419 8.70727 12.4056 9.06694 12.1114C8.1678 11.4703 7.11585 11.1445 6.00095 11.1445C3.0968 11.1445 0.615234 13.6141 0.615234 16.4305C0.615234 17.3869 1.12773 17.8598 2.14373 17.8598ZM6.00993 10.2408C7.4755 10.2408 8.6893 8.68542 8.6893 6.79381C8.6893 4.94422 7.50247 3.46247 6.00993 3.46247C4.53538 3.46247 3.32158 4.97575 3.32158 6.81482C3.32158 8.69594 4.54437 10.2408 6.00993 10.2408ZM9.36364 16.4411C9.26474 16.4411 9.21078 16.4095 9.21078 16.2939C9.21078 15.0644 10.9461 12.5737 14.12 12.5737C17.3029 12.5737 19.0292 15.0644 19.0292 16.2939C19.0292 16.4095 18.9841 16.4411 18.8852 16.4411H9.36364ZM14.129 8.78001C13.1669 8.78001 12.3307 7.67655 12.3307 6.29987C12.3307 4.92321 13.1399 3.89332 14.129 3.89332C15.118 3.89332 15.9182 4.90219 15.9182 6.27887C15.9182 7.65555 15.091 8.78001 14.129 8.78001ZM6.00993 8.84307C5.20972 8.84307 4.51739 7.92877 4.51739 6.81482C4.51739 5.72189 5.19173 4.86015 6.00993 4.86015C6.83712 4.86015 7.50247 5.70086 7.50247 6.79381C7.50247 7.92877 6.81015 8.84307 6.00993 8.84307Z" fill="black"/>
                  </svg>
                  <span className="ml-3 flex-1 whitespace-nowrap">Creators Sync</span>
                </Link>
              </li>

              <li>
                <Link
                  href="/app/settings"
                  className="text-xs text-gray-900  font-light hover:bg-greenSqill-200 flex items-center group px-5 py-3 pl-10"
                >

                  <AiOutlineSetting className="text-gray-900" />
                  <span className="ml-3 flex-1 whitespace-nowrap">Settings</span>

                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </aside>
  );
}
