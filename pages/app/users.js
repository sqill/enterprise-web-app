import { useEffect } from "react"

import DashboardLayout from "../../components/Dashboard/Layout"
import UsersHeader from "../../components/Dashboard/Users/Header"
import UsersFooter from "../../components/Dashboard/Users/Footer"
import UsersList from "../../components/Dashboard/Users/List"

import usersStore from '../../stores/users'

export default function Users() {

  const {
    list,
    fetch,
  } = usersStore()

  useEffect(() => {
    fetch()
  }, [])

  return (
    <DashboardLayout>
      <UsersHeader />
      <UsersList list={list} />
      <UsersFooter list={list} />
    </DashboardLayout>
  )
}