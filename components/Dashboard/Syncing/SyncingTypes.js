import React from 'react'
import BoxContainer from '../../BoxContainer';
import { SyncRequest, ChooseCreators, TypeChanger, SyncSecondContainer, Calendar, TextInput, TextArea } from './SyncRequest';
import SqillButton from '../../SqillButton';
import HiArrowRight from '@meronex/icons/hi/HiArrowRight';

const SyncTheme = () => {

    const components = [
        <TextInput key="theme-text-input" width ="full" background="white" inputBackground="gray-100" current="" change={() => {}} placeholder="Enter Theme Title" title="Theme Title" inputWidth="1/3"/>,
        <TextArea key="theme-text-area" width="full" background="white" inputBackground="gray-100" current="" change={() => {}} placeholder="Enter Text" title="Brief"/>,
        <SqillButton key="next-button" text="Next" onClick={() => {}} iconPosition="right" color="white" background="gradient" size="lg">
            <HiArrowRight className="text-white" style={{width:"1.5rem", height:"2rem"}}/>
        </SqillButton>
    ]

    return (
        <div className='w-full h-full bg-white bg-opacity-90 absolute z-10 top-20 '>
            <div className="pl-64 w-full  flex justify-center items-center pt-20 ">
                <div className="bg-gray-200 w-11/12  rounded-2xl">
                    <BoxContainer 
                        size="h-full" title="Theme" showEllipsis={true} componentList={components}
                    /> 
                </div>
            </div>
        </div>
    );
}


const SyncSpecific = () => {
    
        return (
            <div className='w-full h-full bg-white bg-opacity-90 absolute z-10 top-20 '>
                <div className="pl-64 w-full h-min-max flex justify-center items-center pt-20 ">
                    <div className="bg-gray-200 w-11/12 h-full rounded-2xl">
                        <BoxContainer 
                            size="h-full" title="Theme" showEllipsis={true} componentList={components}
                        /> 
                    </div>
                </div>
            </div>
        );
    }   


export  { SyncTheme , SyncSpecific}