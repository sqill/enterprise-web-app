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
    "fixed z-20 h-full top-0 left-0 pt-16 flex lg:flex flex-shrink-0 flex-col w-64 transition-width duration-75",
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
                  href="/app/settings"
                  className="text-xs text-gray-900  font-light hover:bg-greenSqill-200 flex items-center group px-5 py-3 pl-10"
                >

                  <AiOutlineSetting className="text-gray-900" />
                  <span className="ml-3 flex-1 whitespace-nowrap">Settings</span>

                </Link>
              </li>
              {/* <li>
                <Link
                  href="/app/sponsors"
                  className="text-xs text-gray-900 font-light hover:bg-greenSqill-200 flex items-center group px-5 py-3 pl-10" >

                  <MdcTagOutline className="text-gray-900" />
                  <span className="ml-3 flex-1 whitespace-nowrap">Sponsors</span>

                </Link>
              </li>
              <li>
                <Link
                  href="/app/video_assets"
                  className="text-xs text-gray-900 font-light hover:bg-greenSqill-200 flex items-center group px-5 py-3 pl-10">

                  <GoFileMedia className="text-gray-900" />
                  <span className="ml-3 flex-1 whitespace-nowrap">Editor assets</span>

                </Link>
              </li>
              <li>
                <Link
                  href="/app/ad_posts"
                  className="text-xs text-gray-900 font-light hover:bg-greenSqill-200 flex items-center group px-5 py-3 pl-10">

                  <TiSocialInstagram className="text-gray-900" />
                  <span className="ml-3 flex-1 whitespace-nowrap">Ad Posts</span>

                </Link>
              </li>
              <li>
                <Link
                  href="/app/fonts"
                  className="text-xs text-gray-900 font-light hover:bg-greenSqill-200 flex items-center group px-5 py-3 pl-10">

                  <MdcFormatFont className="text-gray-900" />
                  <span className="ml-3 flex-1 whitespace-nowrap">Fonts</span>

                </Link>
              </li>
              <li>
                <Link
                  href="/app/subtitle_colors"
                  className="text-xs text-gray-900 font-light hover:bg-greenSqill-200 flex items-center group px-5 py-3 pl-10">

                  <MdcFormatFont className="text-gray-900" />
                  <span className="ml-3 flex-1 whitespace-nowrap">Subtitle colors</span>

                </Link>
              </li>
              <li>
                <Link
                  href="/app/company/settings"
                  className="text-xs text-gray-900 font-light hover:bg-greenSqill-200 flex items-center group px-5 py-3 pl-10"
                  >

                  <MdSettings className="text-gray-900" />
                  <span className="ml-3 flex-1 whitespace-nowrap">Company settings</span>

                </Link>
              </li> */}
            </ul>
            {/* <div className="space-y-2 pt-2">
              <a href="https://flowbite.com/docs/components/alerts/" target="_blank" className="text-base text-gray-900 font-normal rounded-lg hover:bg-gray-100 group transition duration-75 flex items-center p-2" rel="noreferrer">
                <svg className="w-6 h-6 text-gray-500 flex-shrink-0 group-hover:text-gray-900 transition duration-75" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z"></path></svg>
                <span className="ml-3">Components</span>
              </a>
              <a href="https://github.com/themesberg/windster-tailwind-css-dashboard/issues" target="_blank" className="text-base text-gray-900 font-normal rounded-lg hover:bg-gray-100 group transition duration-75 flex items-center p-2" rel="noreferrer">
                <svg className="w-6 h-6 text-gray-500 flex-shrink-0 group-hover:text-gray-900 transition duration-75" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-2 0c0 .993-.241 1.929-.668 2.754l-1.524-1.525a3.997 3.997 0 00.078-2.183l1.562-1.562C15.802 8.249 16 9.1 16 10zm-5.165 3.913l1.58 1.58A5.98 5.98 0 0110 16a5.976 5.976 0 01-2.516-.552l1.562-1.562a4.006 4.006 0 001.789.027zm-4.677-2.796a4.002 4.002 0 01-.041-2.08l-.08.08-1.53-1.533A5.98 5.98 0 004 10c0 .954.223 1.856.619 2.657l1.54-1.54zm1.088-6.45A5.974 5.974 0 0110 4c.954 0 1.856.223 2.657.619l-1.54 1.54a4.002 4.002 0 00-2.346.033L7.246 4.668zM12 10a2 2 0 11-4 0 2 2 0 014 0z" clipRule="evenodd"></path></svg>
                <span className="ml-3">Help</span>
              </a>
            </div> */}
          </div>
        </div>
      </div>
    </aside>
  );
}
