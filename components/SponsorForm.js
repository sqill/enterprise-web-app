import React, { useState } from 'react';
import Modal from './Modal'
import Form from './Dashboard/Sponsors/CreateAssetForm'

function SponsorForm({ isOpen, setIsOpen, create, formProps: {name} }) {
    return (
        <Modal isOpen={isOpen} onRequestClose={() => setIsOpen(false)} z="30">
            <div className="flex-row w-full">
                <h3 className="text-sm text-textGray font-bold mb-6">
                    Add a new Sponsor Asset
                </h3>

                <Form create={create} onSuccess={() => setIsOpen(false)} sponsor={name} />
            </div>
        </Modal>
    )
}

export default SponsorForm;