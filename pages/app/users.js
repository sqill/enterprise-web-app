import React, { useEffect } from "react"
import { useStore } from '../../lib/store'

import DashboardLayout from "../../components/Dashboard/Layout"
import OverviewList from "../../components/Dashboard/Overview/List"

import assetsStore from '../../stores/video_assets'
import fontStore from '../../stores/fonts'
import subtitleColorsStore from '../../stores/subtitle_colors'
import { updateCompany } from '../../api'


export default function Cockpit() {
  const { list: fontList, fetch: fetchFonts, create: createFont, remove: removeFont } = fontStore()
  const { list: assetlist, fetch: fetchAssets, create: createAsset, remove: removeAsset, edit: editAsset, fetchFolders } = assetsStore()
  const { list: subtitleList, fetch: fetchSubtitle, create: createSubtitle, remove: removeSubtitle, edit: editSubtitle } = subtitleColorsStore()
  const { auth: { user } } = useStore()
  const [fontFamilies, setFontFamilies] = React.useState([]);

  function generateFontKey(fontUrl) {
    return `font_${fontUrl.replace(/\W/g, '')}`;
  }
  
  function generateDynamicStyle(fontUrl) {
    const fontName = `myDynamicFont_${Math.random().toString(36).substr(2, 9)}`;
    const style = `
      @font-face {
        font-family: '${fontName}';
        src: url('${fontUrl}') format('woff2');
      }
    `;
  
    return { style, fontName };
  }

  useEffect(() => {
    fetchFonts()
    fetchAssets()
    fetchFolders()
    fetchSubtitle()
    loadFonts()
  }, [])

  function loadFonts()
  {
    fontList.map(sponsor => {
      const fontURL = sponsor.font_url;
      const fontKey = generateFontKey(fontURL)
      const { style, fontName } = generateDynamicStyle(fontURL)
      const styleElement = document.createElement('style')
      styleElement.innerHTML = style
      document.head.appendChild(styleElement)
      setFontFamilies((prevFontFamilies) => [...prevFontFamilies, { fontURL, fontName }])
    })
  }



  return (
    <DashboardLayout hideFooter>
      <OverviewList company={user.entity.company} updateCompany={updateCompany}
        assetlist={assetlist} assetCreate={createAsset} assetRemove={removeAsset} assetEdit={editAsset}
        fontList={fontList} fontCreate={createFont} fontRemove={removeFont} fontFamilies={fontFamilies}
        subtitleList={subtitleList} subtitleCreate={createSubtitle} subtitleEdit={editSubtitle} subtitleRemove={removeSubtitle} />
    </DashboardLayout>
  )
}