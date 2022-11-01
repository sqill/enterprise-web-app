
import React from 'react'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import Footer from './Footer'

export default function DashboardLayout(props) {
  const [sidebarOpened, setSidebarOpened] = React.useState(false);

  function toggleSidebar() {
    setSidebarOpened(!sidebarOpened)
  }

  return (
    <React.Fragment>
      <Navbar onClick={toggleSidebar} />
      <div className="flex overflow-hidden bg-white pt-16">
        <Sidebar opened={sidebarOpened} />
        <div id="main-content" className="h-full w-full bg-gray-50 relative overflow-y-auto lg:ml-64">
          <main>
            {props.children}
          </main>
          {!props.hideFooter && <Footer />}
        </div>
      </div>
    </React.Fragment>
  )
}
