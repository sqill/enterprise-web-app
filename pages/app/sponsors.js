import { useEffect } from "react"

import DashboardLayout from "../../components/Dashboard/Layout"
import SponsorsList from "../../components/Dashboard/Sponsors/List"
import SponsorsHeader from "../../components/Dashboard/Sponsors/Header"

import sponsorsStore from '../../stores/sponsors'

export default function Sponsors() {
  const { list, fetch, create, remove } = sponsorsStore()

  useEffect(() => {
    fetch()
  }, [])

  return (
    <DashboardLayout hideFooter>
      <SponsorsHeader create={create} />
      <SponsorsList list={list} remove={remove} />
    </DashboardLayout>
  )
}