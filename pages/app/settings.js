import { useEffect } from "react"

import DashboardLayout from "../../components/Dashboard/Layout"
import UsersHeader from "../../components/Dashboard/Users/Header"
import UsersFooter from "../../components/Dashboard/Users/Footer"
import UsersList from "../../components/Dashboard/Users/List"

import usersStore from '../../stores/users'
import { useStore } from '../../lib/store'

export default function Settings() {
  const { list, fetch } = usersStore()
  const { auth: { user } } = useStore()


  useEffect(() => {
    fetch()
  }, [])

  return (
    <DashboardLayout hideFooter selectedPage={"settings"}>
      {/* <UsersHeader /> */}
      <UsersList list={list} avatar={user.entity.avatar?.thumb} company={user.entity.company} />
      <UsersFooter list={list} />
    </DashboardLayout>
  )
}