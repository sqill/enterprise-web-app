import React from 'react'
import Modal from './Modal'
import { useRouter } from 'next/router'
import AppConsts from '../constants'

export default function DownloadAppModal() {
  const router = useRouter()
  const [isOpen, setIsOpen] = React.useState(false)

  React.useEffect(() => {
    if (router.query.hasOwnProperty('downloadapp')) {
      setIsOpen(true)
    }
  }, [router.query])

  return (
    <Modal isOpen={isOpen} onRequestClose={() => setIsOpen(false)}>
      <div className="mt-3 text-center sm:mt-0 w-full">
        <h3 className="text-3xl leading-6 font-medium text-gray-900">
          Get sqill App
        </h3>
        <div className="mt-2">
          <p className="text-lg text-black">
            Point your camera at the QR code to download <span className="font-bold text-primary-500">sqill</span>
          </p>
          <img className="mx-auto" src="/images/app-qrcode.png" style={{ height: '200px', width: '200px' }} />
          <p className="text-sm text-gray-500">
            Or download directly from the stores:
          </p>
          <div className="flex flex-col justify-center mt-8 sm:flex-row mx-auto">
            <a className="sm:mr-10 mb-4 mx-auto" href={AppConsts.PLAY_STORE_URL} target="_blank">
              <img src="/images/google_play.png" />
            </a>
            <a className="text-center mx-auto" href={AppConsts.APP_STORE_URL} target="_blank">
              <img src="/images/app_store.svg" style={{ height: 46 }} />
            </a>
          </div>
        </div>
      </div>
    </Modal>
  )
}
