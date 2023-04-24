import { useEffect } from "react"

import DashboardLayout from "../../components/Dashboard/Layout"
import SubtitleColorsList from "../../components/Dashboard/SubtitleColors/List"
import SubtitleColorsHeader from "../../components/Dashboard/SubtitleColors/Header"

import subtitleColorsStore from '../../stores/subtitle_colors'

export default function SubtitleColors() {
  const { list, fetch, create, remove, edit } = subtitleColorsStore()

  useEffect(() => {
    fetch()
  }, [])

  return (
    <DashboardLayout hideFooter>
      <SubtitleColorsHeader create={create} />
      <SubtitleColorsList list={list} remove={remove} update={edit} />
    </DashboardLayout>
  )
}