import React from 'react'
import BoxContainer from '../../BoxContainer';
import { SyncRequest, ChooseCreators, TypeChanger, SyncSecondContainer, Calendar, TextInput, TextArea, BoxSelector } from './SyncRequest';
import SqillButton from '../../SqillButton';
import HiArrowRight from '@meronex/icons/hi/HiArrowRight';

const SyncTheme = () => {

    const components = [
        <TextInput key="theme-text-input" width ="full" background="white" inputBackground="gray-100" current="" change={() => {}} placeholder="Enter Theme Title" title="Theme Title" inputWidth="1/3"/>,
        <TextArea key="theme-text-area" width="full" background="white" inputBackground="gray-100" current="" change={() => {}} placeholder="Enter Text" title="Brief"/>,
        <SqillButton key="next-button" text="Next" onClick={() => {}} iconPosition="right" color="white" background="gradient" size="lg" paddingX="20" paddingY="4">
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

    const components = [
        <TextInput key="theme-text-input" width ="full" background="white" inputBackground="gray-100" current="" change={() => {}} placeholder="Enter Theme Title" title="Theme Title" inputWidth="1/3"/>,
        <BoxSelector key="emoji-selector" width="full" title="Tone" boxWidth ="1/5" boxes={
            [{
                boxBackground: 'green-gradient',
                borderRadius: '2xl',
                icon:'😁',
                textPosition: 'start',
                textSize: 'xl',
                text: 'Fun Vibe',
                textColor: 'black',
                weight: 'regular'
            },
            {
                boxBackground: 'black-gradient',
                borderRadius: '2xl',
                icon: '🧐', 
                textPosition: 'start',
                textSize: 'xl',
                text: 'Informative',
                textColor: 'white',
                weight: 'regular'
            },
            {
                boxBackground: 'yellow-gradient',
                borderRadius: '2xl',
                icon: '😱', 
                textPosition: 'start',
                textSize: 'xl',
                text: 'Intense',
                textColor: 'black',
                weight: 'regular'
            },
            {
                boxBackground: 'blue-gradient',
                borderRadius: '2xl',
                icon: '😎', 
                textPosition: 'start',
                textSize: 'xl',
                text: 'Chill',
                textColor: 'black',
                weight: 'regular'
            }]
        }/>,
        <BoxSelector key="type-selector +" width="full" title="Type" boxWidth="1/6" boxes={
            [
                {
                    boxBackground: 'white',
                    borderRadius: '2xl',
                    textPosition: 'center',
                    textSize: 'xl',
                    text: 'Review',
                    weight: 'semibold'
                },
                {
                    boxBackground: 'white',
                    borderRadius: '2xl',
                    textPosition: 'center',
                    textSize: 'xl',
                    text: 'React',
                    weight: 'semibold'
                },
                {
                    boxBackground: 'white',
                    borderRadius: '2xl',
                    textPosition: 'center',
                    textSize: 'xl',
                    text: 'LifeStyle',
                    weight: 'semibold'
                },
                {
                    boxBackground: 'white',
                    borderRadius: '2xl',
                    textPosition: 'center',
                    textSize: 'xl',
                    text: 'Unboxing',
                    weight: 'semibold'
                },
                {
                    boxBackground: 'white',
                    borderRadius: '2xl',
                    textPosition: 'center',
                    textSize: 'xl',
                    text: 'How-to',
                    weight: 'semibold'
                },
            ]
        }/> ,
        <TextArea key="brief-text-area" width="full" background="white" inputBackground="gray-100" current="" change={() => {}} placeholder="Enter Text" title="Brief"/>,
        <SqillButton key="next-button" text="Next" onClick={() => {}} iconPosition="right" color="white" background="gradient" size="lg" paddingX="20" paddingY="4">
            <HiArrowRight className="text-white" style={{width:"1.5rem", height:"2rem"}}/>
        </SqillButton>
    ]

    
    return (
        <div className='w-full h-full bg-white bg-opacity-90 absolute z-10 top-20 '>
            <div className="pl-64 w-full h-min-max flex justify-center items-center pt-20 ">
                <div className="bg-gray-200 w-11/12 h-full rounded-2xl">
                    <BoxContainer 
                        size="h-full" title="Specific" showEllipsis={true} componentList={components}
                    /> 
                </div>
            </div>
        </div>
    );
}   


export  { SyncTheme , SyncSpecific}