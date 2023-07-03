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
