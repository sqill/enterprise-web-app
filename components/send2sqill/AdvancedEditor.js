import ReactPlayer from 'react-player/lazy'
import RiScissorsCutLine from '@meronex/icons/ri/RiScissorsCutLine';
import FaTrash from '@meronex/icons/fa/FaTrash';
import { useState, useEffect } from 'react'

import { uploadS3 } from '../../utils'
import { generateDraftS3Upload } from '../../api'
import ProgressBar from "../ProgressBar";
import PlayerSearch from "../player/Autocomplete";

function Trim({ id, start, end, onRemove }) {
  return (
    <li className="rounded bg-gray px-6 py-3 flex flex-row mb-2 transition duration-500 hover:shadow-lg">
      <div className="select-none flex flex-1 items-center p-1 ">
        <div className="flex flex-row flex-1 pl-1 mr-16 justify-evenly items-center">
          <div className="text-4xl">{start}<span className="text-xs">s</span></div>
          <div className="text-2xl text-gray-500"><RiScissorsCutLine /></div>
          <div className="text-4xl">{end}<span className="text-xs">s</span></div>
        </div>
        <div className="text-gray-600 ">
          <button className="hover:text-gray-200 p-2" onClick={() => onRemove(id)}><FaTrash /></button>
        </div>
      </div>
    </li>
  )
}

function UploadProgress({ file, onUpload, draft }) {
  const [fileUploadProgress, setFileUploadProgress] = useState(0)

  async function executeUpload() {
    const { success, data } = await generateDraftS3Upload(
      draft.id,
      file.name
    )

    if (success && data?.signedUrl) {
      await uploadS3(data.signedUrl, file, p => setFileUploadProgress(parseInt(p, 10)))
      onUpload(true)
    }
  }

  useEffect(() => {
    if (draft) executeUpload()
  }, [file, draft]);

  return (
    <div className="mt-4">
      <span>Uploading...</span>
      <ProgressBar percentage={fileUploadProgress} />
    </div>
  )
}

export default function AdvancedEditor({ videoPlayer, speed, foundMedia, setProgress, file, isFileUploaded, onDurationChange, setFileUploaded, draft, clearTrims, removeTrim, trims, progress, onPlayerSelect, handleTrimPress, manualTrimStart, setManualTrimStart, duration, submitEnabled, submit }) {
  return (
    <div className="container">
      <div className="flex flex-row">
        <div className="w-2/3">
          <ReactPlayer
            ref={videoPlayer}
            playbackRate={speed}
            controls
            url={foundMedia.playing_url || foundMedia.media_url}
            width="600px"
            onProgress={setProgress}
          />
          {file && !isFileUploaded && (
            <UploadProgress file={file} draft={draft} onUpload={setFileUploaded} />
          )}
          <button className="btn mt-4 btn-error mt-8" onClick={clearTrims}>Clear all trims</button>
          <ul className="flex flex-col mt-2 w-full mx-auto">
            {trims.map(t => <Trim key={t.id} {...t} onRemove={removeTrim} />)}
          </ul>
        </div>
        <div className="p-4 flex flex-col w-1/3">
          {progress?.playedSeconds ? (
            <div className="mb-8">
              <h2 className="text-xl font-bold">Current time</h2>
              <div className="text-4xl">{parseInt(progress.playedSeconds, 10)}<span className="text-xs">s</span></div>
            </div>
          ) : null}

          <label>Default trim duration:</label>
          <input type="number" value={duration} step="1" min="5" max="60" onChange={onDurationChange} />
          <button className="btn mt-4" onClick={() => handleTrimPress()}>Create trim (&quot;t&quot; key)</button>
          <div className="flex flex-row mt-4 mb-12">
            <input type="number" className="w-2/5 mr-2 px-2" min="1" placeholder="seconds" value={manualTrimStart} onChange={e => setManualTrimStart(e.target.value)} />
            <button className="btn p-1 text-xs flex-grow h-full" onClick={() => handleTrimPress(manualTrimStart, true)}>Insert trim</button>
          </div>

          <PlayerSearch onSelect={onPlayerSelect} />
          <button disabled={!submitEnabled} onClick={submit} className="btn btn-primary mt-4 w-full">
            Send 2 sqill!
          </button>
        </div>
      </div>
    </div>
  )
}