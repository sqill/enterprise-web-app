import { useState } from "react"
import { useRouter } from 'next/router'

import Header from '../../../components/Dashboard/CompanySettings/Header'
import Form from '../../../components/Dashboard/CompanySettings/UpdateForm'

import DashboardLayout from "../../../components/Dashboard/Layout"

import { useStore } from '../../../lib/store'

export default function CompanySettings() {
  const { auth: { user } } = useStore()

  return (
    <DashboardLayout hideFooter>
      <Header />

      <div className="bg-white shadow rounded-lg p-4 sm:p-6 xl:p-8 2xl:col-span-2">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center flex-1 text-green-500 text-base font-bold">
          <Form company={user.entity.company} />
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}