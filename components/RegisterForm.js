import React, { useState } from 'react';
import Modal from './Modal'
import Form from './SignupForm'
import { useStore } from '../lib/store'


function RegiterForm({ isOpen, setIsOpen }) {
    const { auth: { user } } = useStore()

    return (
        <Modal isOpen={isOpen} onRequestClose={() => setIsOpen(false)} z="40">
            <div className="flex-row w-full">
                <h3 className="text-xl font-semibold mb-6">
                    Register
                </h3>

                <Form />
            </div>
        </Modal>
    )
}

export default RegiterForm;