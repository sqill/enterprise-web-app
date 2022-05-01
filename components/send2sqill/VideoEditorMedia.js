import React, { useEffect, useState } from "react"
import orderBy from 'lodash.orderby';

import { generateDraft, updateDraft } from '../../api'
import AdvancedEditor from "./AdvancedEditor";
import SimpleEditor from "./SimpleEditor";

const DEFAULT_TRIM_DURATION = 15

let GLOBAL_TRIM_ID = 0

function clamp(number, min, max) {
  return Math.max(min, Math.min(number, max));
}

function createTrim(startTs, endTs = null, duration = null) {
  const start = clamp(startTs, 0, Number.MAX_SAFE_INTEGER)
  return {
    id: GLOBAL_TRIM_ID++,
    start,
    end: endTs ? endTs : start + duration
  }
}


export default function VideoEditorMedia({ file, afterComplete, foundMedia, mode = 'advanced', timestamps }) {
  const [speed, setSpeed] = useState(1)
  const [manualTrimStart, setManualTrimStart] = useState('')
  const [duration, setDuration] = useState(DEFAULT_TRIM_DURATION)
  const videoPlayer = React.useRef(null);
  const [trims, setTrims] = useState([])
  const [user, setUser] = useState()
  const [progress, setProgress] = useState({})
  const [isFileUploaded, setFileUploaded] = useState(false)
  const [draft, setDraft] = useState()

  async function createDraft() {

    const { success, data: { data: draft } = {} } = await generateDraft(
      { source_url: file ? null : foundMedia.media_url, origin_url: foundMedia.source_url }
    )
    if (success && draft) {
      setDraft(draft)
    } else {
      alert('Could not create draft')
    }
  }

  useEffect(() => {
    createDraft()
  }, [foundMedia, file])

  useEffect(() => {
    const trims = timestamps.map(t => createTrim(t, null, duration))
    setTrims(existingTrims => orderBy([...existingTrims, ...trims], ['start', 'desc']))
  }, [])

  function handleTrimPress(startTs = null, exact = false) {
    const start = parseInt(startTs || videoPlayer.current.getCurrentTime(), 10)
    if (trims.some(t => t.start === start && t.end === start + duration)) return

    const trim = createTrim(start - (exact ? 0 : 1), null, duration)
    setTrims(trims => orderBy([...trims, trim], ['start', 'desc']))
  }

  useEffect(() => {
    function onKeyup(e) {
      if (e.key === 't') handleTrimPress()
    }
    window.addEventListener('keyup', onKeyup);
    return () => window.removeEventListener('keyup', onKeyup);
  }, [duration, handleTrimPress]);

  function removeTrim(id) {
    setTrims([...trims.filter(t => t.id !== id)])
  }

  function onDurationChange(e) {
    setDuration(Number(e.target.value))
  }

  function clearTrims() {
    setTrims([])
  }

  async function submit() {
    if (!draft) {
      alert("There's no draft")
      return
    }

    if (trims.length === 0) {
      alert("You must set at least one trim point")
      return
    }

    if (!user) {
      alert("You must select a user to send the sqills to")
      return
    }

    const trim_start_points = trims.map(t => t.start)
    const trim_durations = trims.map(t => t.end - t.start)
    const { success, data, error } = await updateDraft(
      draft.id,
      { user_id: user, trim_start_points, trim_durations }
    )

    if (success) {
      afterComplete(data.data)
    }
    else {
      alert(error)
      console.error(error)
    }
  }

  function onUserSelect(user_id) {
    setUser(user_id)
  }

  const submitEnabled = user && trims.length > 0 && (file ? isFileUploaded : true)

  if (mode === 'advanced') {
    return (
      <AdvancedEditor
        submitEnabled={submitEnabled}
        videoPlayer={videoPlayer}
        speed={speed}
        foundMedia={foundMedia}
        setProgress={setProgress}
        file={file}
        isFileUploaded={isFileUploaded}
        setFileUploaded={setFileUploaded}
        draft={draft}
        clearTrims={clearTrims}
        removeTrim={removeTrim}
        trims={trims}
        progress={progress}
        onUserSelect={onUserSelect}
        handleTrimPress={handleTrimPress}
        manualTrimStart={manualTrimStart}
        setManualTrimStart={setManualTrimStart}
        duration={duration}
        submit={submit}
        onDurationChange={onDurationChange}
      />
    )
  }
  else {
    return (
      <SimpleEditor
        submitEnabled={submitEnabled}
        videoPlayer={videoPlayer}
        speed={speed}
        foundMedia={foundMedia}
        setProgress={setProgress}
        file={file}
        isFileUploaded={isFileUploaded}
        setFileUploaded={setFileUploaded}
        draft={draft}
        clearTrims={clearTrims}
        removeTrim={removeTrim}
        trims={trims}
        progress={progress}
        onUserSelect={onUserSelect}
        handleTrimPress={handleTrimPress}
        manualTrimStart={manualTrimStart}
        setManualTrimStart={setManualTrimStart}
        duration={duration}
        submit={submit}
      />
    )
  }
}
