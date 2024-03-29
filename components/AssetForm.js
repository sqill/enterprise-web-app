import React, { useState } from 'react';
import Modal from './Modal'
import Form from './Dashboard/Assets/CreateForm'
import LoadingFilesCounter from './Dashboard/Assets/LoadingFiles';



function AssetForm({ isOpen, setIsOpen, create, formProps : {type, format} }) {
  const labels = {
    logos: 'Logo',
    foreground: 'Banner',
    overlay: 'Overlay',
    effects: 'Effect'
  };

  const [uploads, setUpload] = useState({
    totalFiles: 10,
    successfulUploads: 5,
    failedUploads: 0,
    loadedFilesErrors: []
  });
  
  const [showLoadingPopup, setShowLoadingPopup] = useState(false);

  
  return (
    <>
    {!showLoadingPopup ? (
      <Modal isOpen={isOpen} onRequestClose={() => setIsOpen(false)} z="30">
        
        <div className="flex-row w-full">
          <h3 className="text-sm text-textGray font-bold mb-6">
            Add a new {labels[type]}
          </h3>

          <Form uploads={uploads} setShowLoadingPopup={setShowLoadingPopup} setUpload={setUpload} create={create} onSuccess={() => setIsOpen(false)} formProps={{type, format}} />
        </div>
      
      </Modal>
      ) :  (
        <LoadingFilesCounter  
        uploads={uploads}
        setShowLoadingPopup={setShowLoadingPopup}
        />
      )}
    </>
  )
}

export default AssetForm;