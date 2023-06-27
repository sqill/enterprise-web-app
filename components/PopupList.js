import React, { useState } from 'react';
import Modal from './Modal'
import Form from './Dashboard/Assets/CreateForm'
import Input from './Input'


function PopupList({ isOpen, setIsOpen, list, renderRows, columns, title, create }) {
    const [searchQuery, setSearchQuery] = useState('');

    const handleSearchQueryChange = (event) => {
        setSearchQuery(event.target.value.toLowerCase());
    };

    const filteredList = searchQuery
        ? list.filter((item) => {
            if (typeof item === 'string')
                return item.toLowerCase().includes(searchQuery);
            else if (typeof item.name === 'string')
                return item.name.toLowerCase().includes(searchQuery);
            else 
                return item.id.toLowerCase().includes(searchQuery);
        })
        : list;

    return (
        <React.Fragment>
            <Modal isOpen={isOpen} onRequestClose={() => setIsOpen(false)} color="gray-100" width='full' maxWidth='7xl' height='5/6' mx="0">
                <div className="flex-row w-10/12 bg-gray justify-items-center">
                    <div className="flex justify-between items-center mb-6">
                        <h3 className="text-medium text-textGray text-left pl-5 font-medium">{title}</h3>
                        <div className="justify-center">
                            <input
                                value={searchQuery}
                                placeholder="Search..."
                                className="text-xs text-textGray font-light max-w-96 rounded-full px-2 py-1 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-greenSqill-500"
                                onChange={handleSearchQueryChange}
                            />
                        </div>
                        <div>
                            <button onClick={() => create()} className='text-2xl text-containerGray uppercase hover:text-gray-700 focus:outline-none'> + </button>
                        </div>
                    </div>

                    <div className={`flex max-w-5xl py-2 justify-center`}>
                        {columns.map((column) => (
                            <h3 className={`w-1/${columns.length} text-xs font-medium text-textGray`} key={column}>{column}</h3>
                        ))}
                    </div>
                    {renderRows(filteredList)}
                    <div>
                    </div>
                </div>
            </Modal>
        </React.Fragment>

    )
}

export default PopupList;