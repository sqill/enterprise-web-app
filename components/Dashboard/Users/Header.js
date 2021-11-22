import MdcCog from '@meronex/icons/mdc/MdcCog';
import MdcPlus from '@meronex/icons/mdc/MdcPlus';
import MdcFileDownload from '@meronex/icons/mdc/MdcFileDownload';
// import MdChevronRight from '@meronex/icons/md/MdChevronRight';
// import MdChevronLeft from '@meronex/icons/md/MdChevronLeft';

export default function UsersHeader() {
  return (
    <div className="p-4 bg-white block sm:flex items-center justify-between border-b border-gray-200 lg:mt-1.5">
      <div className="mb-1 w-full">
        <div className="mb-4">
          {/* <nav className="flex mb-5" aria-label="Breadcrumb">
            <ol className="inline-flex items-center space-x-1 md:space-x-2">
              <li className="inline-flex items-center">
                  <a href="#" className="text-gray-700 hover:text-gray-900 inline-flex items-center">
                  <svg className="w-5 h-5 mr-2.5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path></svg>
                  <MdChevronRight className="text-2xl" />
                  Home
                  </a>
              </li>
              <li>
                <div className="flex items-center">
                  <MdChevronRight className="text-2xl" />
                  <a href="#" className="text-gray-700 hover:text-gray-900 ml-1 md:ml-2 text-sm font-medium">Users</a>
                </div>
              </li>
              <li>
                  <div className="flex items-center">
                  <MdChevronRight className="text-2xl" />

                  <span className="text-gray-400 ml-1 md:ml-2 text-sm font-medium" aria-current="page">List</span>
                  </div>
              </li>
            </ol>
          </nav> */}
          <h1 className="text-xl sm:text-2xl font-semibold text-gray-900">Company users</h1>
        </div>
        <div className="sm:flex">
            <div className="hidden sm:flex items-center sm:divide-x sm:divide-gray-100 mb-3 sm:mb-0">
                <form className="lg:pr-3" action="#" method="GET">
                <label htmlFor="users-search" className="sr-only">Search</label>
                <div className="mt-1 relative lg:w-64 xl:w-96">
                  <input type="text" name="email" id="users-search" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5" placeholder="Search for users" />
                </div>
                </form>
                <div className="flex space-x-1 pl-0 sm:pl-2 mt-3 sm:mt-0">
                    <a href="#" className="text-gray-500 hover:text-gray-900 cursor-pointer p-1 hover:bg-gray-100 rounded inline-flex justify-center">
                      <MdcCog className="text-2xl" />
                    </a>
                    <a href="#" className="text-gray-500 hover:text-gray-900 cursor-pointer p-1 hover:bg-gray-100 rounded inline-flex justify-center">
                      <MdcCog className="text-2xl" />
                    </a>
                </div>
            </div>
            <div className="flex items-center space-x-2 sm:space-x-3 ml-auto">
                <button type="button" data-modal-toggle="add-user-modal" className="w-1/2 text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:ring-cyan-200 font-medium inline-flex items-center justify-center rounded-lg text-sm px-3 py-2 text-center sm:w-auto">
                  <MdcPlus className="text-xl" />
                  Add user
                </button>
                <a href="#" className="w-1/2 text-gray-900 bg-white border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-cyan-200 font-medium inline-flex items-center justify-center rounded-lg text-sm px-3 py-2 text-center sm:w-auto">
                  <MdcFileDownload className="text-xl" />
                    Export
                </a>
            </div>
        </div>
    </div>
</div>
  )
}