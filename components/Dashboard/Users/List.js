import MdcTrashCanOutline from '@meronex/icons/mdc/MdcTrashCanOutline';
import CountryFlag from '../../CountryFlag';

function UserRow({ avatar, user, full_name, finder_type, country_code, company_role }) {
  return (
    <tr className="hover:bg-gray-100">
      <td className="p-4 flex items-center whitespace-nowrap space-x-6 mr-12 lg:mr-0">
          {avatar && <img className="h-10 w-10 rounded-full" src={avatar.thumb} alt="Name avatar" />}
          <div className="text-sm font-normal text-gray-500">
              <div className="text-base font-semibold text-gray-900">{full_name}</div>
              <div className="text-sm font-normal text-gray-500">{user?.email}</div>
          </div>
      </td>
      <td className="p-4 whitespace-nowrap text-base font-medium text-gray-900">{finder_type}</td>
      <td className="p-4 whitespace-nowrap text-base font-medium text-gray-900">
        <CountryFlag code={country_code} />
      </td>
      <td className="p-4 whitespace-nowrap text-base font-normal text-gray-900">{company_role}</td>
      <td className="p-4 whitespace-nowrap space-x-2">
        {/* <button type="button" data-modal-toggle="delete-user-modal" className="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm inline-flex items-center px-3 py-2 text-center">
          <MdcTrashCanOutline className="text-xl mr-1" />
          Remove user
        </button> */}
      </td>
    </tr>
  )
}

export default function UsersList({ list }) {
  return (
    <div className="flex flex-col">
        <div className="overflow-x-auto">
            <div className="align-middle inline-block min-w-full">
                <div className="shadow overflow-hidden">
                    <table className="table-fixed min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-100">
                            <tr>
                                {/* <th scope="col" className="p-4">

                                </th> */}
                                <th scope="col" className="p-4 text-left text-xs font-medium text-gray-500 uppercase">
                                    Name
                                </th>
                                <th scope="col" className="p-4 text-left text-xs font-medium text-gray-500 uppercase">
                                    Type
                                </th>
                                <th scope="col" className="p-4 text-left text-xs font-medium text-gray-500 uppercase">
                                    Country
                                </th>
                                <th scope="col" className="p-4 text-left text-xs font-medium text-gray-500 uppercase">
                                    Role
                                </th>
                                <th scope="col" className="p-4">
                                </th>
                            </tr>
                        </thead>
                      <tbody className="bg-white divide-y divide-gray-200">
                        {list?.map(finder => <UserRow key={finder.id} {...finder} />)}
                      </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
  )
}