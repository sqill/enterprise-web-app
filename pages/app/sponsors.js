import { useEffect } from "react"

import DashboardLayout from "../../components/Dashboard/Layout"
import SponsorsList from "../../components/Dashboard/Sponsors/List"
import SponsorsHeader from "../../components/Dashboard/Sponsors/Header"

import sponsorsStore from '../../stores/sponsors'
import assetsStore from '../../stores/video_assets'

export default function Sponsors() {
  const { list: sponsorList, fetch: fetchSponsors, create:createSponsors, remove:removeSponsor } = sponsorsStore()
  const { list: assetlist, fetch: fetchAssets, create: createAsset, remove: removeAsset, edit: editAsset, fetchFolders } = assetsStore()

  useEffect(() => {
    fetchSponsors()
    fetchAssets()
    fetchFolders()
  }, [])

  return (
    <DashboardLayout hideFooter>
      {/* <SponsorsHeader create={createSponsors} /> */}
      <SponsorsList list={sponsorList} remove={removeSponsor}
      assetlist={assetlist} assetCreate={createAsset} assetRemove={removeAsset} assetEdit={editAsset}
      create={createSponsors}
      />
    </DashboardLayout>
  )
}