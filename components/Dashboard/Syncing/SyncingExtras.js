import React from 'react'
import BoxContainer from '../../BoxContainer'
import { SyncRequest, ChooseCreators, TypeChanger, SyncSecondContainer, Calendar, TextInput, TextArea, BoxSelector } from './SyncRequest';

const SyncingExtras = ({}) => {

    const components = [
        
    ]


    return (
        <div className='w-full h-full bg-white bg-opacity-90 absolute z-10 top-20 '>
            <div className="pl-64 w-full  flex justify-center items-center pt-20 ">
                <BoxContainer size="h-full" title="Extras" showEllipsis={true} componentList={components} />
            </div>
        </div>
    )

}