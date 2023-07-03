import React from 'react'
import MdcPlus from '@meronex/icons/mdc/MdcPlus';
import Modal from '../../Modal'

import Form from './CreateForm'

function CreateForm({ isOpen, setIsOpen, create }) {
  return (
    <Modal isOpen={isOpen} onRequestClose={() => setIsOpen(false)}>
      <div className="flex-row w-full">
        <h3 className="text-xl font-semibold mb-6">
          Create new video editor asset
        </h3>

        <Form create={create} onSuccess={() => setIsOpen(false)} />
      </div>
    </Modal>
  )
}

export default function AssetsHeader({ create }) {
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <React.Fragment>
      <div className="p-4 bg-white block sm:flex items-center justify-between">
        <div className="mb-1 w-full px-5">
          <div className="mb-4">
            <p className="text-sm sm:text-l font-semibold text-gray-900 text-opacity-50 py-5">User Core Elements</p>
          </div>
          <div className="mb-4">
            <p className="text-xl sm:text-l font-semibold text-gray-900 text-opacity-50">Overview</p>

            <button onClick={() => setIsOpen(true)} type="button" className="w-1/2 text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:ring-cyan-200 font-medium inline-flex items-center justify-center rounded-lg text-sm px-3 py-2 text-center sm:w-auto">
              <MdcPlus className="text-xl" />
              Create asset
            </button>
          </div>
        </div>
      </div>
      <CreateForm isOpen={isOpen} setIsOpen={setIsOpen} create={create} />
    </React.Fragment>
  )
}
