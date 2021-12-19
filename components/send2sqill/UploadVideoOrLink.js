import React, { useEffect, useState } from "react"
import ReactPlayer from 'react-player/lazy'
import { useRouter } from 'next/router'

export default function UploadVideoOrLink({ onFile }) {
	const router = useRouter()
	const [url, setUrl] = useState('')

	function handleSubmit(e) {
		e.preventDefault()
		if (url) {
			router.push(`?url=${encodeURIComponent(url.trim())}`, undefined, { shallow: true })
		}
	}

	function handleFileChoose(e) {
		if (e.target.files.length > 0) {
			onFile(e.target.files[0])
		}
	}

  return (
		<div className="pt-6 px-4 py-4">
			<div className="bg-white shadow rounded-lg p-4 sm:p-6 xl:p-8 2xl:col-span-2">
				<div className="flex items-center justify-between mb-4">
					<div className="flex items-center justify-end flex-1 text-green-500 text-base font-bold">
						<form onSubmit={handleSubmit} className="flex flex-col items-center w-1/2 mx-auto py-10">
							<p>Paste a URL to a page containing the media or a direct link to a media file.</p>
							<p className="text-xs text-gray-700">Example: <br/>https://www.youtube.com/watch?v=FMDOJuZFA10<br/>http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4</p>
							<input value={url} onChange={e => setUrl(e.target.value)} className="my-10 bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5" type="text" name="url" placeholder="https://www.youtube.com/watch?v=FMDOJuZFA10" />
						</form>
					</div>
				</div>
			</div>

			<div className="bg-white shadow rounded-lg p-4 sm:p-6 xl:p-8 2xl:col-span-2 mt-4">
				<div className="flex items-center justify-between mb-4">
					<div className="flex items-center justify-end flex-1 text-green-500 text-base font-bold">
						<form onSubmit={handleSubmit} className="flex flex-col items-center w-1/2 mx-auto py-10">
							<p className="w-full">Upload a file from your device</p>
							<input
								type="file"
								className="w-full my-10"
								name="file"
								accept="video/mp4,video/x-m4v,video/*"
								multiple={false}
								onChange={handleFileChoose}
							/>
						</form>
					</div>
				</div>
			</div>
		</div>
  )
}
