import React, { useState } from 'react';
import Modal from './Modal'
import Form from './Dashboard/SubtitleColors/CreateForm'

function SubtitleColorForm({ isOpen, setIsOpen, create }) {

    
    return (
        <Modal isOpen={isOpen} onRequestClose={() => setIsOpen(false)} z="30">

            <div className="flex-row w-full">
                <h3 className="text-sm text-textGray font-bold mb-6">
                    Add a new Subtitle Color
                </h3>

                <Form create={create} onSuccess={() => setIsOpen(false)} />
            </div>
        </Modal>
    )
}

export default SubtitleColorForm;