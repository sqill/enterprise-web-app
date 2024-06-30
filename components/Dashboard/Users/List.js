import MdcTrashCanOutline from '@meronex/icons/mdc/MdcTrashCanOutline';
import CountryFlag from '../../CountryFlag';
import React from 'react';

function UserRow({ avatar, user, full_name, country_code, current_company_role }) {
  return (
    <div className="p-2 ml-5 bg-white rounded-xl w-52 h-52 flex flex-col justify-center text-center items-center content-center">
      {avatar && <img className="h-20 w-20 my-3 rounded-full" src={avatar.thumb} alt="Name avatar" />}
      <div className="text-sm font-normal text-gray-500">
        <div className="font-bold text-containerGray">{full_name}</div>
        <div className="text-sm font-ligth text-containerGray">{user?.email}</div>
      </div>
      <div className="p-2 mt-1 whitespace-nowrap text-base font-bold text-containerGray">{current_company_role}</div>
    </div>
  )
}

export default function UsersList({ list, avatar, company }) {

  return (
    <React.Fragment>
      <div className='py-5 font-bold text-textGray'>
        Overview
      </div>
      <div className="flex flex-wrap h-max mb-5">
        <div className="flex min-w-full min-h-full mb-4">
          <div className='pr-5 w-2/6 rounded-xl bg-gray-100 mr-5'>
            <div className={`bg-gray-100 p-5 rounded-xl overflow-hidden`} id="container">
              <div className="flex justify-between">
                <h2 className="text-sm pl-5 flex items-center font-medium text-containerGray">Account</h2>
              </div>
              <div className='flex flex-col items-center p-5'>
                <img className='w-40 border-4 border-greenSqill-500  rounded-full' src={avatar}></img>
                <div className='pt-4 font-bold text-containerGray'>
                  {company.name}
                </div>
                <div className='text-sm font-ligth text-containerGray'>
                  {company.email}
                </div>
                <div className='text-sm pt-5 font-ligth text-containerGray'>
                  Website
                </div>
                <div className='text-sm font-ligth text-containerGray'>
                  {company.website}
                </div>
                <div className='text-sm pt-5 font-ligth text-containerGray'>
                  Country
                </div>
                <CountryFlag code={company.country_code} />
                <div className=' text-sm pt-5 font-ligth text-containerGray'>
                  Vat Number
                </div>
                <div className='text-sm font-ligth text-containerGray'>
                  {company.vat_number}
                </div>
              </div>
            </div>
          </div>
          <div className='pr-5 w-4/6 min-h-150 rounded-xl bg-gray-100 mr-5'>
            <div className={`bg-gray-100 p-5 h-full rounded-xl overflow-hidden`} id="container">
              <div className="flex justify-between">
                <h2 className="text-sm pl-5 flex items-center font-medium text-containerGray">Users</h2>
              </div>
              <div className={"py-5 overflow-x-auto h-full grid grid grid-rows-2 grid-flow-col gap-4 gap-x-1 text-center items-center content-start"}>
                {list?.map(user => <UserRow key={user.id} {...user} />)}
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}