import React from 'react'

import MdcTrashCanOutline from '@meronex/icons/mdc/MdcTrashCanOutline';
import BiLinkExternal from '@meronex/icons/bi/BiLinkExternal';
import MdcPencilOutline from '@meronex/icons/mdc/MdcPencilOutline';

import Modal from '../../Modal'
import Form from './UpdateForm'


function UpdateForm({ color, setEditColor, update }) {
  return (
    <Modal isOpen={Boolean(color)} onRequestClose={() => setEditColor(null)}>
      <div className="flex-row w-full">
        <h3 className="text-xl font-semibold mb-6">
          Update subtitle color
        </h3>

        <Form color={color} update={update} onSuccess={() => setEditColor(null)} />
      </div>
    </Modal>
  )
}

function SubtitleColorsRow({ color, onRemove, onEdit }) {
  return (
    <tr className="hover:bg-gray-100">
      <td className="p-4 whitespace-nowrap text-base font-medium text-gray-900">{color.id}</td>
      <td className="p-4 whitespace-nowrap text-base font-normal text-gray-900">
        {color.foreground}
        <div className="w-12 h-12 rounded-full" style={{ backgroundColor: color.foreground }}></div>
      </td>
      <td className="p-4 whitespace-nowrap text-base font-normal text-gray-900">
        {color.background}
        <div className="w-12 h-12 rounded-full" style={{ backgroundColor: color.background }}></div>
      </td>
      <td className="p-4 whitespace-nowrap text-base font-normal text-gray-900">
      {color.company_font?.id} - {color.company_font?.name}
      </td>
      <td className="p-4 whitespace-nowrap space-x-2">
        <button onClick={() => onEdit(color)} type="button" className="text-white bg-blue-600 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm inline-flex items-center px-3 py-2 text-center">
          <MdcPencilOutline className="text-xl mr-1" />
          Edit
        </button>
        <button onClick={() => onRemove(color.id)} type="button" className="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm inline-flex items-center px-3 py-2 text-center">
          <MdcTrashCanOutline className="text-xl mr-1" />
          Remove
        </button>
      </td>
    </tr>
  )
}

export default function SubtitleColorsList({ list, remove, update }) {
  const [editColor, setEditColor] = React.useState(null)

  function handleRemove(id) {
    remove(id)
  }

  function handleEdit(color) {
    setEditColor(color)
  }

  return (
    <React.Fragment>
      <UpdateForm color={editColor} update={update} setEditColor={setEditColor} />

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
                      Font color
                    </th>
                    <th scope="col" className="p-4 text-left text-xs font-medium text-gray-500 uppercase">
                      Background color
                    </th>
                    <th scope="col" className="p-4 text-left text-xs font-medium text-gray-500 uppercase">
                      Font
                    </th>
                    <th scope="col" className="p-4">
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {list?.map(subtitleColor => <SubtitleColorsRow key={subtitleColor.id} color={subtitleColor} onRemove={handleRemove} onEdit={handleEdit} />)}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}