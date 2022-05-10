import { useEffect } from "react"

import DashboardLayout from "../../components/Dashboard/Layout"
import AssetsList from "../../components/Dashboard/Assets/List"
import AssetsHeader from "../../components/Dashboard/Assets/Header"

import assetsStore from '../../stores/video_assets'

export default function Users() {
  const { list, fetch, create, remove } = assetsStore()

  useEffect(() => {
    fetch()
  }, [])

  return (
    <DashboardLayout hideFooter>
      <AssetsHeader create={create} />
      <AssetsList list={list} remove={remove} />
    </DashboardLayout>
  )
}