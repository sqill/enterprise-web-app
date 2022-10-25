import MdcTrashCanOutline from '@meronex/icons/mdc/MdcTrashCanOutline';

function AdPostRow({ id, url, sponsor, platform, onRemove }) {
  return (
    <tr className="hover:bg-gray-100">
      <td className="p-4 whitespace-nowrap text-base font-medium text-gray-900">{id}</td>
      <td className="p-4 whitespace-nowrap text-base font-normal text-gray-900">{platform}</td>
      <td className="p-4 whitespace-nowrap text-base font-normal text-gray-900">
        <a target="_blank" rel="noreferrer" href={url} className="text-sm text-primary-500 hover:underline ml-auto">{url}</a>
      </td>
      <td className="p-4 whitespace-nowrap text-base font-normal text-gray-900">{sponsor.name}</td>
      <td className="p-4 whitespace-nowrap space-x-2">
        <button onClick={() => onRemove(id)} type="button" className="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm inline-flex items-center px-3 py-2 text-center">
          <MdcTrashCanOutline className="text-xl mr-1" />
          Remove
        </button>
      </td>
    </tr>
  )
}

export default function SponsorsList({ list, remove }) {
  function handleRemove(id) {
    remove(id)
  }

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
                    ID
                  </th>
                  <th scope="col" className="p-4 text-left text-xs font-medium text-gray-500 uppercase">
                    Platform
                  </th>
                  <th scope="col" className="p-4 text-left text-xs font-medium text-gray-500 uppercase">
                    URL
                  </th>
                  <th scope="col" className="p-4 text-left text-xs font-medium text-gray-500 uppercase">
                    Sponsor
                  </th>
                  <th scope="col" className="p-4">
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {list?.map(ad => <AdPostRow key={ad.id} {...ad} onRemove={handleRemove} />)}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}