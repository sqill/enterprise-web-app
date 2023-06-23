import React, { useState } from 'react';
import Modal from './Modal'
import Form from './Dashboard/CompanySettings/CreateForm'
import { useStore } from '../lib/store'


function ColorForm({ isOpen, setIsOpen, create }) {
  const { auth: { user } } = useStore()

  return (
    <Modal isOpen={isOpen} onRequestClose={() => setIsOpen(false)} z="40">
      <div className="flex-row w-full">
        <h3 className="text-sm text-textGray font-bold mb-6">
          Add a new Color
        </h3>

        <Form company={user.entity.company} create={create} onSuccess={() => setIsOpen(false)} />
      </div>
    </Modal>
  )
}

export default ColorForm;