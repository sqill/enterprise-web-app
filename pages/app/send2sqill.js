import { useState } from "react"
import { useRouter } from 'next/router'

import VideoEditor from '../../components/send2sqill/VideoEditor'
import UploadVideoOrLink from '../../components/send2sqill/UploadVideoOrLink'

import DashboardLayout from "../../components/Dashboard/Layout"

export default function Send2Sqill() {
  const router = useRouter()

  const { url, referer, timestamps, mode = 'advanced' } = router.query
	const [sourceFile, setSourceFile] = useState()

  let comp;
  if (url || sourceFile) {
    comp = (
      <VideoEditor
        sourceUrl={url}
        referer={referer}
        file={sourceFile}
        timestamps={timestamps}
        mode={mode}
      />
    )
  }
  else {
    comp = (<UploadVideoOrLink onFile={setSourceFile} />)
  }

  return (
    <DashboardLayout hideFooter selectedPage={"video&image"}>
      {comp}
    </DashboardLayout>
  )
}