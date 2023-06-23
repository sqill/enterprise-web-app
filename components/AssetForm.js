import React, { useState } from 'react';
import Modal from './Modal'
import Form from './Dashboard/Assets/CreateForm'



function AssetForm({ isOpen, setIsOpen, create, props }) {
  const labels = {
    logos: 'Logo',
    foreground: 'Banner',
    overlay: 'Overlay',
    effects: 'Effect'
  };

  return (
    <Modal isOpen={isOpen} onRequestClose={() => setIsOpen(false)} z="40">
      <div className="flex-row w-full">
        <h3 className="text-sm text-textGray font-bold mb-6">
          Add a new {labels[props[0]]}
        </h3>

        <Form create={create} onSuccess={() => setIsOpen(false)} props={props} />
      </div>
    </Modal>
  )
}

export default AssetForm;