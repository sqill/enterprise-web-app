import React from 'react'
import MdcPlus from '@meronex/icons/mdc/MdcPlus';
import Modal from '../../Modal'

import Form from './CreateForm'

function CreateForm({ isOpen, setIsOpen, create }) {
  return (
    <Modal isOpen={isOpen} onRequestClose={() => setIsOpen(false)}>
      <div className="flex-row w-full">
        <h3 className="text-xl font-semibold mb-6">
          Create new Sponsor
        </h3>

        <Form create={create} onSuccess={() => setIsOpen(false)} />
      </div>
    </Modal>
  )
}

export default function FontsHeader({ create }) {
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <React.Fragment>
      <div className="p-4 bg-white block sm:flex items-center justify-between border-b border-gray-200 lg:mt-1.5">
        <div className="mb-1 w-full">
          <div className="mb-4">
            <h1 className="text-xl sm:text-2xl font-semibold text-gray-900">Fonts</h1>
          </div>
          <div className="sm:flex">
            <div className="flex items-center space-x-2 sm:space-x-3 ml-auto">
              <button onClick={() => setIsOpen(true)} type="button" className="w-1/2 text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:ring-cyan-200 font-medium inline-flex items-center justify-center rounded-lg text-sm px-3 py-2 text-center sm:w-auto">
                <MdcPlus className="text-xl" />
                Create Font
              </button>
            </div>
          </div>
        </div>
      </div>
      <CreateForm isOpen={isOpen} setIsOpen={setIsOpen} create={create} />
    </React.Fragment>
  )
}
