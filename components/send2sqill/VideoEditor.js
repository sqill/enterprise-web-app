import React, { useEffect, useState, useRef } from "react"

import { mediaFinder } from '../../api'
import Loading from '../Loading'
import VideoEditorMedia from './VideoEditorMedia'

const STATUS = {
  FINDING_MEDIA: 'FINDING_MEDIA',
  FINDING_MEDIA_DONE: 'FINDING_MEDIA_DONE',
  NO_MEDIA_FOUND: 'NO_MEDIA_FOUND',
  MEDIA_FOUND: 'MEDIA_FOUND',
  LOCAL_MEDIA_FOUND: 'LOCAL_MEDIA_FOUND',
  DONE: 'DONE'
}

function useInterval(callback, delay) {
  const savedCallback = useRef();

  // Remember the latest function.
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Set up the interval.
  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}
// timestamps = "12.32;45.62;1.0;10"
function parseTimestamps(timestamps) {
  if (!timestamps) return [];

  return timestamps.split(';').map(Number)
}

export default function VideoEditor({ sourceUrl, file, referer, timestamps, mode }) {
  const [status, setStatus] = useState(STATUS.FINDING_MEDIA)
  const [foundMedia, setFoundMedia] = useState(null)
  const [fakeLoadingExpired, setFakeLoadingExpired] = useState(false);

  useInterval(async () => {
    if (file) return;

    setStatus(STATUS.FINDING_MEDIA)
    const { success, data: { data: media } = {} } = await mediaFinder(sourceUrl, referer)

    if (success && media.media_url) {
      setStatus(STATUS.MEDIA_FOUND)
      setFoundMedia(media)
    }
    else if (!success || (media && !media.processing)) {
      setStatus(STATUS.NO_MEDIA_FOUND)
    }

  }, status !== STATUS.NO_MEDIA_FOUND && !file && (!foundMedia || foundMedia?.processing) ? 2000 : null);


  useEffect(() => {
    if (sourceUrl) {
      // callApi()
      setTimeout(() => setFakeLoadingExpired(true), 1500)
    }
    else if (file) {
      setFoundMedia({ media_url: URL.createObjectURL(file) });
      setStatus(STATUS.LOCAL_MEDIA_FOUND)
      setFakeLoadingExpired(true)
    }
  }, [sourceUrl, file])

  function afterDraftSubmission() {
    setStatus(STATUS.DONE)
  }

  if (status === STATUS.FINDING_MEDIA || !fakeLoadingExpired) {
    return (
      <div className="inset-center">
        <Loading />
      </div>
    )
  }

  if (status === STATUS.NO_MEDIA_FOUND) {
    return (
      <div className="mt-20 flex flex-row mx-auto justify-center">
        <h1 className="text-5xl text-primary-500">No media found</h1>
      </div>
    )
  }

  if (status === STATUS.DONE) {
    return (
      <div className="mt-20 flex flex-row mx-auto justify-center">
        <h1 className="text-5xl text-primary-500">the sqill is now being processed</h1>
      </div>
    )
  }

  if ((status === STATUS.MEDIA_FOUND || status === STATUS.LOCAL_MEDIA_FOUND) && foundMedia?.media_url) {
    return (
      <VideoEditorMedia
        mode={mode}
        foundMedia={foundMedia}
        // mediaUrl={foundMedia.media_url}
        // originUrl={foundMedia.origin_url}
        file={file}
        afterComplete={afterDraftSubmission}
        timestamps={parseTimestamps(timestamps)}
      />
    )
  }

  return <h1>Ups</h1>
}
