import MdcTrashCanOutline from '@meronex/icons/mdc/MdcTrashCanOutline';
import CountryFlag from '../../CountryFlag';
import React from 'react';

function UserRow({ avatar, user, full_name, finder_type, country_code, company_role }) {
  return (
    <div className="p-2 ml-5 bg-white rounded-xl w-52 flex flex-col text-center items-center content-center">
      {avatar && <img className="h-20 w-20 my-3 rounded-full" src={avatar.thumb} alt="Name avatar" />}
      <div className="text-sm font-normal text-gray-500">
        <div className="font-bold text-containerGray">{full_name}</div>
        <div className="text-sm font-ligth text-containerGray">{user?.email}</div>
      </div>
      {/* <div className="p-4 whitespace-nowrap text-base font-medium text-gray-900">{finder_type}</div>
      <div className="p-4 whitespace-nowrap text-base font-medium text-gray-900">
        <CountryFlag code={country_code} />
      </div> */}
      <div className="p-2 mt-1 whitespace-nowrap text-base font-bold text-containerGray">{company_role}</div>

    </div>
  )
}

export default function UsersList({ list, avatar, company }) {

  return (
    <React.Fragment>
      <div className='pt-2 text-xs font-medium text-textGray'>
        User Settings
      </div>
      <div className='py-5 font-bold text-textGray'>
        Overview
      </div>
      {/* <div className="flex-col"> */}
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
                {list?.map(finder => <UserRow key={finder.id} {...finder} />)}
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
    // <div className="flex flex-col">
    //     <div className="overflow-x-auto">
    //         <div className="align-middle inline-block min-w-full">
    //             <div className="shadow overflow-hidden">
    //                 <table className="table-fixed min-w-full divide-y divide-gray-200">
    //                     <thead className="bg-gray-100">
    //                         <tr>
    //                             {/* <th scope="col" className="p-4">

    //                             </th> */}
    //                             <th scope="col" className="p-4 text-left text-xs font-medium text-gray-500 uppercase">
    //                                 Name
    //                             </th>
    //                             <th scope="col" className="p-4 text-left text-xs font-medium text-gray-500 uppercase">
    //                                 Type
    //                             </th>
    //                             <th scope="col" className="p-4 text-left text-xs font-medium text-gray-500 uppercase">
    //                                 Country
    //                             </th>
    //                             <th scope="col" className="p-4 text-left text-xs font-medium text-gray-500 uppercase">
    //                                 Role
    //                             </th>
    //                             <th scope="col" className="p-4">
    //                             </th>
    //                         </tr>
    //                     </thead>
    //                   <tbody className="bg-white divide-y divide-gray-200">
    //                     {list?.map(finder => <UserRow key={finder.id} {...finder} />)}
    //                   </tbody>
    //                 </table>
    //             </div>
    //         </div>
    //     </div>
    // </div>
  )
}