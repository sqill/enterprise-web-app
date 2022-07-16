import { useEffect } from "react"

import DashboardLayout from "../../components/Dashboard/Layout"
import FontsList from "../../components/Dashboard/Fonts/List"
import FontsHeader from "../../components/Dashboard/Fonts/Header"

import fontsStore from '../../stores/fonts'

export default function Fonts() {
  const { list, fetch, create, remove } = fontsStore()

  useEffect(() => {
    fetch()
  }, [])

  return (
    <DashboardLayout hideFooter>
      <FontsHeader create={create} />
      <FontsList list={list} remove={remove} />
    </DashboardLayout>
  )
}