import React, { useState } from 'react';
import PopupList from './PopupList';


function ContainerComponent({ title, list, handleRemove, handleEdit, handleCreate, formProps, renderRows, renderList, columns, FormComponent, containerClass, parentClass }) {
  const [expanded, setExpanded] = useState(false);
  const [isOpen, setIsOpen] = useState(false)


  function toggleExpand() {
    setExpanded(!expanded);
  }
  function SetOpen() {
    setIsOpen(true);
  }

  if ( title === "Fonts" ) {
    console.log("oi")
    
  }
  1
  return (
    <React.Fragment>
      <div onClick={(e) => { if (e.target.onclick !== null && e.target.id !== "container") return; toggleExpand(); }}
        className={`bg-gray-100 p-5 rounded-xl overflow-hidden ${parentClass}`} id="container">
        <div className="flex justify-between">
          <h2 className="text-sm pl-5 flex items-center font-medium text-containerGray">{title}</h2>
          <div className="flex justify-left">
            <button onClick={() => setIsOpen(true)} className='text-2xl text-containerGray uppercase hover:text-gray-700 focus:outline-none'> + </button>
          </div>
        </div>
        <div className={containerClass}>
          {renderRows && (renderRows(list))}
        </div>

      </div>
      {FormComponent && (
        <FormComponent isOpen={isOpen} setIsOpen={setIsOpen} create={handleCreate} formProps={formProps} />
      )}
      <PopupList
        isOpen={expanded}
        setIsOpen={setExpanded}
        list={list}
        renderRows={renderList}
        columns={columns}
        title={title}
        create={SetOpen}
      ></PopupList>
    </React.Fragment>
  );
}

export default ContainerComponent;