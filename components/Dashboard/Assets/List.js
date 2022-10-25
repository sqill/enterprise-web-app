import React from 'react'

import MdcTrashCanOutline from '@meronex/icons/mdc/MdcTrashCanOutline';
import BiLinkExternal from '@meronex/icons/bi/BiLinkExternal';
import MdcPencilOutline from '@meronex/icons/mdc/MdcPencilOutline';

import Modal from '../../Modal'
import Form from './UpdateForm'


function UpdateForm({ asset, setEditAsset, update }) {
  return (
    <Modal isOpen={Boolean(asset)} onRequestClose={() => setEditAsset(null)}>
      <div className="flex-row w-full">
        <h3 className="text-xl font-semibold mb-6">
          Update video editor asset
        </h3>

        <Form asset={asset} update={update} onSuccess={() => setEditAsset(null)} />
      </div>
    </Modal>
  )
}

function AssetRow({ asset, onRemove, onEdit }) {
  const { id, name, bundle_type, asset_type, asset_url, asset_thumb_url, company_id, is_default } = asset;

  return (
    <tr className="hover:bg-gray-100">
      <td className="p-4 whitespace-nowrap text-base font-medium text-gray-900">{id}</td>
      <td className="p-4 flex items-center whitespace-nowrap space-x-6 mr-12 lg:mr-0">
        {asset_thumb_url &&
          <img className="h-10 w-10 rounded-full" src={asset_thumb_url} alt="thumbnail" />
        }
      </td>
      <td className="p-4 whitespace-nowrap text-base font-normal text-gray-900">{name}</td>
      <td className="p-4 whitespace-nowrap text-base font-normal text-gray-900">{bundle_type}</td>
      <td className="p-4 whitespace-nowrap text-base font-normal text-gray-900">{asset_type}</td>
      <td className="p-4 whitespace-nowrap space-x-2">
        <a href={asset_url} target='_blank' className="text-white bg-primary-600 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm inline-flex items-center px-3 py-2 text-center" rel="noreferrer">
          <BiLinkExternal className="text-xl mr-1" />
          Open
        </a>
        <button onClick={() => onEdit(asset)} type="button" className="text-white bg-blue-600 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm inline-flex items-center px-3 py-2 text-center">
          <MdcPencilOutline className="text-xl mr-1" />
          Edit
        </button>
        <button onClick={() => onRemove(id)} type="button" className="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm inline-flex items-center px-3 py-2 text-center">
          <MdcTrashCanOutline className="text-xl mr-1" />
          Remove
        </button>
      </td>
    </tr>
  )
}

export default function AssetsList({ list, remove, edit }) {
  const [editAsset, setEditAsset] = React.useState(null)

  function handleRemove(id) {
    remove(id)
  }

  function handleEdit(asset) {
    setEditAsset(asset)
    // edit(id)
  }

  return (
    <React.Fragment>
      <UpdateForm asset={editAsset} update={edit} setEditAsset={setEditAsset} />

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
                      Thumbnail
                    </th>
                    <th scope="col" className="p-4 text-left text-xs font-medium text-gray-500 uppercase">
                      Name
                    </th>
                    <th scope="col" className="p-4 text-left text-xs font-medium text-gray-500 uppercase">
                      Category
                    </th>
                    <th scope="col" className="p-4 text-left text-xs font-medium text-gray-500 uppercase">
                      Asset Type
                    </th>
                    <th scope="col" className="p-4">
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {list.filter(a => !a.is_default).map(asset => <AssetRow key={asset.id} asset={asset} onRemove={handleRemove} onEdit={handleEdit} />)}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}