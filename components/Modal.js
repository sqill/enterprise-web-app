// import onClickOutside from "react-onclickoutside"

export default function Modal({ isOpen, onRequestClose, children, color = "white", minWidth = "lg", width = "1/3", maxWidth = "full", mx = "0", height = "fit", z = "30" }) {
  if (!isOpen) return null;

  return (
    <div className={`fixed z-${z} inset-x-0 top-0 bottom-0 overflow-y-auto`} aria-labelledby="modal-title" role="dialog" aria-modal="true">
      <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center roun sm:block sm:p-0">

        <div onClick={onRequestClose} className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true"></div>

        <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>


        <div className={`inline-block rounded-xl justify-center text-left transform transition-all max-h-200  overflow-y-auto sm:my-8 sm:align-middle sm:min-w-${minWidth} sm:w-${width} sm:max-w-${maxWidth}`}>
          <div className={`px-6 pt-5 pb-4 sm:p-6 sm:pb-4 shadow-md rounded-xl mx-${mx} bg-${color}`}>
            <div className="sm:flex sm:items-start flex justify-center  text-center">
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
