import { useEffect } from "react"
import { useStore } from '../../lib/store'

import DashboardLayout from "../../components/Dashboard/Layout"
import OverviewList from "../../components/Dashboard/Overview/List"
import AssetsHeader from "../../components/Dashboard/Overview/Header"

import assetsStore from '../../stores/video_assets'
import fontStore from '../../stores/fonts'
import subtitleColorsStore from '../../stores/subtitle_colors'
import { updateCompany } from '../../api'


export default function Cockpit() {
  const { list: fontList, fetch: fetchFonts, create: createFont, remove: removeFont } = fontStore()
  const { list: assetlist, fetch: fetchAssets, create: createAsset, remove: removeAsset, edit: editAsset, fetchFolders } = assetsStore()
  const { list: subtitleList, fetch: fetchSubtitle, create: createSubtitle, remove: removeSubtitle, edit: editSubtitle } = subtitleColorsStore()
  const { auth: { user } } = useStore()

  useEffect(() => {
    fetchFonts()
    fetchAssets()
    fetchFolders()
    fetchSubtitle();
  }, [])

  return (
    <DashboardLayout hideFooter>
      <OverviewList company={user.entity.company} updateCompany={updateCompany}
        assetlist={assetlist} assetCreate={createAsset} assetRemove={removeAsset} assetEdit={editAsset}
        fontList={fontList} fontCreate={createFont} fontRemove={removeFont}
        subtitleList={subtitleList} subtitleCreate={createSubtitle} subtitleEdit={editSubtitle} subtitleRemove={removeSubtitle} />
    </DashboardLayout>
  )
}