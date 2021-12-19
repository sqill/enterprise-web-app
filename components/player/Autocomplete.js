import React from "react"

import ReactCountryFlag from 'react-country-flag'


import { autocompletePlayers } from '../../api'
import Avatar from './Avatar'
import Autocomplete from '../Autocomplete'

function PlayerEntry({ onClick, option, active }) {
  return (
    <div className={`flex flex-row cursor-pointer p-2 hover:bg-primary-600 ${active && 'bg-primary-600'}`} onClick={() => onClick(option)}>
      <div className="min-w-min">
        <Avatar size={42} avatar={option.avatar} thumb />
      </div>
      <div className="flex flex-col ml-4">
        <div className="block font-bold text-sm">
          <span className="mr-2">{option.sport.emoji}</span>{option.full_name}
        </div>
        {option.club && (
          <div className="flex flex-row text-xs">
            <ReactCountryFlag svg style={{ fontSize: '1rem' }} countryCode={option.club.country_code} />
            <span className="ml-2">{option.club.full_name}</span>
          </div>
        )}
      </div>
    </div>
  )
}

function Empty() {
  return (
    <div className="p-2">
      <em>No players found</em>
    </div>
  )
}

async function searchPlayers(userInput) {
  const { success, data } = await autocompletePlayers(userInput)

  if (success) {
    return data.data
  } else {
    return []
  }
}

export default function PlayerAutocomplete({ onSelect }) {
  return (
    <Autocomplete
      onSelect={onSelect}
      onSearch={searchPlayers}
      optionInputDisplay={(option) => option.full_name}
      renderOptionComponent={PlayerEntry}
      placeholder="Search players"
    />
  )
}
