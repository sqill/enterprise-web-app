import React, { useState } from 'react';
import Modal from './Modal'
import Form from './Dashboard/Fonts/CreateForm'

function FontForm({ isOpen, setIsOpen, create }) {
  return (
    <Modal isOpen={isOpen} onRequestClose={() => setIsOpen(false)} z="40">
      <div className="flex-row w-full">
        <h3 className="text-sm text-textGray font-bold mb-6">
          Add a new Font
        </h3>

        <Form create={create} onSuccess={() => setIsOpen(false)} />
      </div>
    </Modal>
  )
}

export default FontForm;