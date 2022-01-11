import MdChevronRight from '@meronex/icons/md/MdChevronRight';
import MdChevronLeft from '@meronex/icons/md/MdChevronLeft';

export default function UsersFooter() {
  return null;

  return (
    <div className="bg-white sticky sm:flex items-center w-full sm:justify-between bottom-0 right-0 border-t border-gray-200 p-4">
        <div className="flex items-center mb-4 sm:mb-0">
            <a href="#" className="text-gray-500 hover:text-gray-900 cursor-pointer p-1 hover:bg-gray-100 rounded inline-flex justify-center">
              <MdChevronLeft className="text-3xl" />
            </a>
            <a href="#" className="text-gray-500 hover:text-gray-900 cursor-pointer p-1 hover:bg-gray-100 rounded inline-flex justify-center mr-2">
              <MdChevronRight className="text-3xl" />
            </a>
            <span className="text-sm font-normal text-gray-500">Showing <span className="text-gray-900 font-semibold">1-20</span> of <span className="text-gray-900 font-semibold">2290</span></span>
        </div>
        <div className="flex items-center space-x-3">
            <a href="#" className="flex-1 text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:ring-cyan-200 font-medium inline-flex items-center justify-center rounded-lg text-sm px-3 py-2 text-center">
            <MdChevronLeft className="text-2xl" />
                Previous
            </a>
            <a href="#" className="flex-1 text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:ring-cyan-200 font-medium inline-flex items-center justify-center rounded-lg text-sm px-3 py-2 text-center">
                Next
                <MdChevronRight className="text-2xl" />
            </a>
        </div>
    </div>
  )
}